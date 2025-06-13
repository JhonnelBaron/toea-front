<template>
  <div class="gray-500 h-screen flex items-center justify-center flex-col relative">
    <!-- Logo -->
    <img
      src="/images/toeaLogo.png"
      alt="Logo"
      class="w-26 h-26 mb-[-40px] z-10 relative border-4 border-white rounded-full bg-white"
    />

      <div class="bg-white p-8 rounded-lg shadow-lg w-96 max-w-full">
        <h2 class="text-lg font-bold text-gray-800 mb-4 mt-4 text-center">RESET PASSWORD</h2>
  
        <form @submit.prevent="handleResetLink">
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              v-model="email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>
  
          <div v-if="message" class="text-xs mb-4 text-blue-600">
            {{ message }}
          </div>
          <div v-if="error" class="mb-4 text-red-600 text-xs">
            {{ error }}
          </div>
  
          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
            :disabled="isLoading"
          >
          <div v-if="isLoading" class="flex items-center">
    <div class="loader mr-2"></div>
    Processing...
  </div>
            <!-- <div v-if="isLoading" class="loader mr-2"></div> -->
            <span v-if="!isLoading" class="text-xs font-medium">SUBMIT</span>
          </button>
        </form>
  
        <p class="mt-4 text-xs text-center text-gray-600">
          Remember your password?
        </p>
        <p class="text-xs text-center text-gray-600">
        <NuxtLink to="/" class="hover:underline text-xs text-center text-blue-700 hover:text-red-700">Login here</NuxtLink>
        </p>
      </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
  import axios from 'axios';
  
  const email = ref('');
  const message = ref('');
  const error = ref('');
  const isLoading = ref(false);
  
  const handleResetLink = async () => {
    isLoading.value = true;
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/password/email', { email: email.value });
      message.value = response.data.message;
      error.value = '';
    } catch (err) {
      error.value = err.response?.data?.message || 'Something went wrong';
      message.value = '';
    } finally {
      isLoading.value = false;
    }
  };
  </script>
  
  <style>
  /* Loader CSS */
  .loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #ffffff;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>