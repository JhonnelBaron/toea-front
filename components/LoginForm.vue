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
    <form>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
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
          type="password"
          id="password"
          class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          required
          placeholder="**********"
        />
        <button href="#" class="text-xs mt-2 hover:text-blue-700">Forgot Password?</button>
      </div>
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

<script lang="ts" setup>

</script>

<style>

</style>