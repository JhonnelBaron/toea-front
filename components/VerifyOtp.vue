<template>
  <div class="gray-500 h-screen flex items-center justify-center flex-col relative">
    <!-- Logo -->
    <img
      src="/images/toeaLogo.png"
      alt="Logo"
      class="w-40 h-40 mb-[-80px] z-10 relative border-4 border-gray-200 rounded-full bg-gray-200"
    />
    <!-- OTP Form -->
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10 relative">
      <h2 class="text-2xl font-bold mb-6 text-center">Verify OTP</h2>
      <form @submit.prevent="submitOtp" class="space-y-4">
        <div class="flex flex-col">
          <label for="otp" class="text-sm font-medium text-gray-700">Enter OTP</label>
          <input
            v-model="otp"
            type="text"
            id="otp"
            class="mt-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder=""
            maxlength="6"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Verify
        </button>
        <button
  @click.prevent="resendOtp"
  class="text-blue-600 underline text-sm mt-2"
>
  Resend OTP
</button>
        <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>

      </form>   
</div>
</div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const { $api } = useNuxtApp()
const router = useRouter()
import { onMounted } from 'vue'

const email = ref(localStorage.getItem('verify_email') || '')
const otp = ref('')
const errorMessage = ref('')

onMounted(() => {
  if (!email.value) {
    router.push('/register') // redirect if email is missing
  }
})

async function submitOtp() {
  try {
    const response = await $api.post('/verify-otp', {
      email: email.value,
      otp: otp.value
    })

    alert('Email verified successfully!')
    localStorage.removeItem('verify_email')

    router.push('/login')
  } catch (err) {
    errorMessage.value = err.response?.data?.message || 'Verification failed.'
  }
}

async function resendOtp() {
  try {
    await $api.post('/resend-otp', { email: email.value })
    alert('OTP resent successfully!')
  } catch (err) {
    errorMessage.value = err.response?.data?.message || 'Failed to resend OTP.'
  }
}
</script>