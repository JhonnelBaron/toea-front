<template>
  <div class="h-screen flex items-center justify-center px-4">
    <div class="bg-white p-10 rounded-xl shadow-xl w-full max-w-lg text-center relative">
      
      <!-- Email Icon -->
      <img
        src="/images/emailsent.png"
        alt="Email Sent"
        class="w-20 h-20 mx-auto mb-4"
      />

      <!-- Title -->
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Verify Your Account</h2>
      <p class="text-sm text-gray-600 mb-1">An OTP has been sent to your email:</p>
      <p class="text-sm font-medium text-blue-600 mb-6 break-words">{{ email }}</p>

      <!-- OTP input boxes + Submit button inside form -->
      <form @submit.prevent="submitOtp" class="flex flex-col items-center space-y-6 mb-6">
        <div class="flex justify-center space-x-2">
          <input
            v-for="(digit, index) in 6"
            :key="index"
            v-model="otpArray[index]"
            maxlength="1"
            inputmode="numeric"
            pattern="[0-9]*"
            @input="onDigitInput(index, $event)"
            @keydown.backspace="onBackspace(index, $event)"
            @paste="onPaste($event)"
            type="text"
            :disabled="isLoading"
            class="w-12 h-12 text-xl text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
        </div>

        <button
          type="submit"
          :disabled="isLoading"
          class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200 flex justify-center items-center disabled:opacity-50"
        >
          <span v-if="isLoading" class="loader mr-2"></span>
          <span>{{ isLoading ? 'Verifying...' : 'Submit' }}</span>
        </button>
      </form>

      <!-- Resend OTP Button -->
      <button
        @click.prevent="resendOtp"
        :disabled="isResending"
        class="text-blue-600 text-sm flex items-center justify-center mx-auto disabled:opacity-50"
      >
        <span v-if="isResending" class="loader mr-2"></span>
        <span>{{ isResending ? 'Resending...' : 'Resend OTP' }}</span>
      </button>

      <!-- Error Message -->
      <p v-if="errorMessage" class="text-red-500 text-sm mt-4">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'

const { $api } = useNuxtApp()
const router = useRouter()

const email = ref(localStorage.getItem('verify_email') || '')
const otpArray = ref(["", "", "", "", "", ""])
const errorMessage = ref("")
const isLoading = ref(false)
const isResending = ref(false)

onMounted(() => {
  if (!email.value) {
    router.push('/register')
  }
})

// Clear error when user types
watch(otpArray, () => {
  errorMessage.value = ""
})

function onDigitInput(index, event) {
  // Remove non-digit input immediately
  const val = event.target.value
  if (!/^\d$/.test(val)) {
    otpArray.value[index] = ""
    return
  }
  // Move focus to next input
  const inputs = document.querySelectorAll('input[type="text"]')
  if (index + 1 < inputs.length) {
    inputs[index + 1].focus()
  }
}

function onPaste(event) {
  event.preventDefault()
  const paste = event.clipboardData.getData('text')
  const digits = paste.replace(/\D/g, '').slice(0, 6).split('')

  otpArray.value = ["", "", "", "", "", ""] // Clear all inputs

  digits.forEach((digit, i) => {
    otpArray.value[i] = digit
  })

  // Focus next empty input or last input if all filled
  const inputs = document.querySelectorAll('input[type="text"]')
  const nextIndex = digits.length < 6 ? digits.length : 5
  inputs[nextIndex].focus()
}

function onBackspace(index, event) {
  if (otpArray.value[index] === "") {
    // Move focus to previous input
    const prevIndex = index - 1
    if (prevIndex >= 0) {
      otpArray.value[prevIndex] = ""
      const inputs = document.querySelectorAll('input[type="text"]')
      inputs[prevIndex].focus()
    }
  } else {
    otpArray.value[index] = ""
  }
}

async function submitOtp() {
  errorMessage.value = ""

  // Clean OTP string
  const otp = otpArray.value.join('')

  // Validate OTP length and digits only
  if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
    errorMessage.value = "Please enter a valid 6-digit numeric OTP."
    return
  }

  isLoading.value = true
  try {
    await $api.post('/verify-otp', {
      email: email.value,
      otp
    })
    alert('Email verified successfully!')
    localStorage.removeItem('verify_email')
    router.push('/login')
  } catch (err) {
    errorMessage.value = err.response?.data?.message || 'Verification failed.'
  } finally {
    isLoading.value = false
  }
}

async function resendOtp() {
  errorMessage.value = ""
  isResending.value = true
  try {
    await $api.post('/resend-otp', { email: email.value })
    alert('OTP resent successfully!')
  } catch (err) {
    errorMessage.value = err.response?.data?.message || 'Failed to resend OTP.'
  } finally {
    isResending.value = false
  }
}
</script>

<style scoped>
.loader {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3490dc;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
