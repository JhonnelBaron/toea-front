<template>
  <div class="flex min-h-screen bg-cover bg-center items-center justify-center" style="background-image: url('/images/loginBG.png')">
    <div class="flex flex-row items-center justify-center max-w-max w-full">
      <VerifyOtp />
    </div>

  </div>
</template>

<script setup>
import LoginForm from '~/components/LoginForm.vue'
definePageMeta({ layout: 'empty' })
</script>
