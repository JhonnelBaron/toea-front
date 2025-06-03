<template>
  <div class="flex min-h-screen bg-cover bg-center items-center justify-center" style="background-image: url('/images/loginBG.png')">
    <div class="w-1/2 flex flex-row items-center justify-center">
      <RegisterForm />
    </div>

  </div>
</template>

<script setup>
import LoginForm from '~/components/LoginForm.vue'
definePageMeta({ layout: 'empty' })
</script>
