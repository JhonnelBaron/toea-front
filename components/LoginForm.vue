<template>
  <div class="gray-500 h-screen flex items-center justify-center flex-col relative">
  <!-- Logo -->
  <img
  src="/images/toeaLogo.png"
  alt="Logo"
  class="w-40 h-40 mb-[-80px] z-10 relative border-4 border-gray-200 rounded-full bg-gray-200"/>

  <!-- Form container -->
  <div class="bg-gray-200 p-10 rounded-lg shadow-md w-md pt-20 relative z-0">
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
        />
        <div class="flex items-center mt-2">
        <input type="checkbox" id="showPassword" v-model="passwordVisible" class="mr-2">
        <label for="showPassword" class="text-xs text-gray-600">Show Password</label>
      </div>
        <NuxtLink class="text-xs mt-2 hover:text-blue-700" to="/reset-password">Forgot Password?</NuxtLink>
      </div>
              <p v-if="errorMessage" class="text-sm text-red-600 mb-4">{{ errorMessage }}</p>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Login
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
import { NuxtLink } from '#components'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const { $api } = useNuxtApp()
const router = useRouter()
const passwordVisible = ref(false)

const email = ref('')
const password = ref('')
const errorMessage = ref('')

async function submitLogin() {
  errorMessage.value = ''
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
  }
}
</script>

<style>

</style>