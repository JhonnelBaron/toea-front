<template>
  <div class="gray-500 h-screen flex items-center justify-center flex-col relative">
    <!-- Logo -->
    <img
      src="/images/toeaLogo.png"
      alt="Logo"
      class="w-40 h-40 mb-[-80px] z-10 relative border-4 border-white rounded-full bg-white"
    />

    <!-- Form container -->
    <div class="bg-white p-10 rounded-lg shadow-md w-md pt-20 relative z-0">
      <h2 class="text-2xl font-bold mb-6 text-center">Welcome!</h2>
      <form @submit.prevent="submitLogin" class="space-y-4">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            placeholder="juandelacruz@tesda.gov.ph"
            :disabled="isLoading"
          />
        </div>
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="password"
            :type="passwordVisible ? 'text' : 'password'" 
            id="password"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
            placeholder="**********"
            :disabled="isLoading"
          />
          <div class="flex items-center justify-between mt-2">
            <NuxtLink class="text-xs mt-2 hover:text-blue-700" to="/reset-password">Forgot Password?</NuxtLink>
            <div class="flex items-center">
              <input type="checkbox" id="showPassword" v-model="passwordVisible" class=" mr-1" :disabled="isLoading" />
              <label for="showPassword" class="text-xs text-gray-600">Show Password</label>
            </div>
          </div>
        </div>

        <p v-if="errorMessage" class="text-sm text-red-600 mb-4">{{ errorMessage }}</p>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 flex justify-center items-center disabled:opacity-50"
          :disabled="isLoading"
        >
          <span v-if="isLoading" class="loader mr-2"></span>
          <span>{{ isLoading ? 'Logging in...' : 'Login' }}</span>
        </button>
      </form>

      <p class="text-sm text-gray-600 flex items-center justify-center pt-10">
        Don't have an account?
        <NuxtLink class="text-blue-600 hover:underline ml-1" to="/register">Sign up</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { NuxtLink } from '#components'

const { $api } = useNuxtApp()
const router = useRouter()

const email = ref('')
const password = ref('')
const passwordVisible = ref(false)
const errorMessage = ref('')
const isLoading = ref(false)

async function submitLogin() {
  errorMessage.value = ''
  isLoading.value = true
  try {
    const res = await $api.post('/login', {
      email: email.value,
      password: password.value,
    })

    const token = res.data.token
    localStorage.setItem('token', token)

    router.push('/') // or wherever you want to go
  } catch (err) {
    if (err.response?.status === 403) {
      errorMessage.value = 'Please verify your email address first.'
    } else if (err.response?.status === 401) {
      errorMessage.value = 'Incorrect email or password.'
    } else if (err.response?.status === 404) {
      errorMessage.value = 'User not found.'
    } else {
      errorMessage.value = 'Something went wrong. Please try again.'
    }
  } finally {
    isLoading.value = false
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
