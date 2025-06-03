<template>
  <div class="gray-500 h-screen flex items-center justify-center flex-col relative px-4">
    <!-- Logo -->
    <img
      src="/images/toeaLogo.png"
      alt="Logo"
      class="w-40 h-40 mb-[-80px] z-10 relative border-4 border-gray-200 rounded-full bg-gray-200"
    />

    <!-- Registration Card -->
    <div class="bg-gray-200 p-10 pt-28 rounded-xl shadow-md w-full max-w-2xl relative z-0">
      <p class="font-bold text-3xl text-gray-900 pb-10 text-center">Create an Account</p>

      <form @submit.prevent="handleRegister" class="space-y-6">
        <!-- Name Fields -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              id="firstName"
              v-model="form.firstName"
              required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Juan"
            />
          </div>
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              id="lastName"
              v-model="form.lastName"
              required
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Dela Cruz"
            />
          </div>
        </div>

        <!-- Birthday -->
        <div>
          <label for="birthday" class="block text-sm font-medium text-gray-700">Birthday</label>
          <input
            type="date"
            id="birthday"
            v-model="form.birthday"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="juandelacruz@tesda.gov.ph"
          />
        </div>

        <!-- Passwords -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              v-model="form.password"
              required
              minlength="8"
              class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="********"
            />
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="form.confirmPassword"
              required
              :class="[
                'mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm',
                form.password !== form.confirmPassword
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-300 focus:ring-blue-500 focus:border-blue-500'
              ]"
              placeholder="********"
            />
            <p v-if="form.password !== form.confirmPassword" class="text-xs text-red-600 mt-1">
              Passwords do not match.
            </p>
          </div>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-200"
        >
          Register
        </button>
        <p class="text-sm text-gray-600 text-center">
          Already have an account?
          <NuxtLink class="text-blue-600 hover:underline ml-1" to="/login">Sign in</NuxtLink>
        </p>
        </form>

        <p class="text-center font-extralight text-xs">Portal developed by: Regional Operations Management Office</p>
        <p class="text-center font-extralight text-xs">©All rights reserved</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const form = ref({
  firstName: '',
  lastName: '',
  birthday: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const handleRegister = () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert('Passwords do not match!')
    return
  }

  // Submit logic here
  console.log('Registering:', form.value)
}
</script>
