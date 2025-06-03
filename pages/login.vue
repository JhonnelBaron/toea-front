<template>
  <div class="flex min-h-screen bg-cover bg-center" style="background-image: url('/images/loginBG.png')">
    
    <!-- Left side: Title -->
    <div class="w-1/2 flex flex-col items-start justify-center px-24">
  <!-- Title -->
  <div class="text-white text-3xl sm:text-3xl md:text-3xl lg:text-8xl font-bold font-spartan" style="line-height: 0.9;">
    TESDA<br />
    Organizational<br />
    Excellence<br />
    Awards
  </div>

  <!-- Line -->
  <div class="w-lg h-1 bg-white my-3"></div>

  <!-- Subtitle -->
  <div class="text-white text-2xl font-bold mb-6">
    Recognizing organizational performance and excellence
  </div>

  <!-- Logos -->
  <div class="flex gap-6 items-center">
    <img src="/images/bpLogo.png" alt="Logo 1" class="w-20 h-20 object-contain" />
    <img src="/images/tesdaLogo.png" alt="Logo 2" class="w-20 h-20 object-contain" />
    <img src="/images/kayangLogo.png" alt="Logo 3" class="w-40 h-20 object-contain" />
  </div>
</div>


    <!-- Right side: Login form -->
    <div class="w-1/2 flex items-center justify-center">
      <LoginForm />
    </div>

  </div>
</template>

<script setup>
import LoginForm from '~/components/LoginForm.vue'
definePageMeta({ layout: 'empty' })
</script>
