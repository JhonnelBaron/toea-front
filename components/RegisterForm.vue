<template>
  <div class="gray-500 h-screen flex items-center justify-center flex-col relative">
    <!-- Logo -->
    <img
      src="/images/toeaLogo.png"
      alt="Logo"
      class="w-40 h-40 mb-[-80px] z-10 relative border-4 border-gray-200 rounded-full bg-gray-200"
    />

    <!-- Form container -->
    <div class="bg-gray-200 p-5 rounded-lg shadow-md w-4xl pt-20 relative z-0">
      <h2 class="text-2xl font-bold mb-6 text-center">Nominee Account Registration</h2>
      <form @submit.prevent="submitForm" class="space-y-6">

  <!-- Row 1: Name + Email -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        v-model="form.name"
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
        required
        placeholder="Juan Dela Cruz"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        v-model="form.email"
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
        required
        placeholder="juandelacruz@gmail.com"
      />
    </div>
  </div>

  <!-- Row 2: Award + Category + Region -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Award</label>
      <select v-model="form.award" required
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm">
        <option disabled value="">Select Award</option>
        <option value="Best Regional Office">Best Regional Office</option>
        <option value="Galing Probinsya">Galing Probinsya</option>
        <option value="Best Training Institution">Best Training Institution</option>
      </select>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Category</label>
      <select v-model="form.category" required
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm">
        <option disabled value="">Select Category</option>
        <option v-if="form.award !== 'Best Training Institution'" value="Small">Small</option>
        <option v-if="form.award !== 'Best Training Institution'" value="Medium">Medium</option>
        <option v-if="form.award !== 'Best Training Institution'" value="Large">Large</option>
        <option v-if="form.award === 'Best Training Institution'" value="RTC/STC">RTC/STC</option>
        <option v-if="form.award === 'Best Training Institution'" value="PTC">PTC</option>
        <option v-if="form.award === 'Best Training Institution'" value="TAS">TAS</option>
      </select>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Region</label>
      <select v-model="form.region" required
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm">
        <option disabled value="">Select Region</option>
        <option>Region I</option>
        <option>Region II</option>
        <option>Region III</option>
        <option>Region IV-A</option>
        <option>Region IV-B</option>
        <option>Region V</option>
        <option>Region VI</option>
        <option>Region VII</option>
        <option>Region VIII</option>
        <option>Region IX</option>
        <option>Region X</option>
        <option>Region XI</option>
        <option>Region XII</option>
        <option>CAR</option>
        <option>BARMM</option>
        <option>NCR</option>
      </select>
    </div>
  </div>

  <!-- Row 3: Name of Institution (only for Best Training Institution) -->
  <div v-if="form.award === 'Best Training Institution'">
    <label class="block text-sm font-medium text-gray-700">Name of Institution</label>
    <input
      type="text"
      v-model="form.institution"
      class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
      required
      placeholder="TESDA Administered School"
    />
  </div>

  <!-- Row 4: Province (only for Galing Probinsya) -->
  <div v-if="form.award === 'Galing Probinsya'">
  <label class="block text-sm font-medium text-gray-700">Province</label>
  <select
    v-model="form.province"
    :disabled="!availableProvinces.length"
    required
    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
  >
    <option disabled value="">Select Province</option>
    <option v-for="province in availableProvinces" :key="province" :value="province">
      {{ province }}
    </option>
  </select>
</div>

  <!-- Row 5: Password + Confirm Password -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Password</label>
      <input
        type="password"
        v-model="form.password"
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
        required
        placeholder="********"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
      <input
        type="password"
        v-model="form.confirmPassword"
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
        required
        placeholder="********"
      />
    </div>
  </div>

  <!-- Submit -->
  <div>
    <button type="submit"
      class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
      Register
    </button>
    <p class="text-sm text-gray-600 flex items-center justify-center pt-5">
      Already have an account?
      <NuxtLink class="text-blue-600 hover:underline ml-1" to="/login">Log in</NuxtLink>
    </p>
  </div>
</form>


    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  email: '',
  award: '',
  category: '',
  region: '',
  province: '',
  institution: '',
  password: '',
  confirmPassword: ''
})

const showCategory = computed(() => {
  return form.value.award !== ''
})

const submitForm = () => {
  if (form.value.password !== form.value.confirmPassword) {
    alert('Passwords do not match')
    return
  }

  // TODO: Add submit logic (API call, etc.)
  console.log('Form submitted:', form.value)
}

const regionProvinceMap: Record<string, string[]> = {
  'Region I': ['Ilocos Norte', 'Ilocos Sur', 'La Union', 'Pangasinan'],
  'Region II': ['Cagayan', 'Isabela', 'Nueva Vizcaya', 'Quirino', 'Batanes'],
  'Region III': ['Aurora', 'Bataan', 'Bulacan', 'Nueva Ecija', 'Pampanga', 'Tarlac', 'Zambales'],
  'Region IV-A': ['Batangas', 'Cavite', 'Laguna', 'Quezon', 'Rizal'],
  'Region IV-B': ['Marinduque', 'Occidental Mindoro', 'Oriental Mindoro', 'Palawan', 'Romblon'],
  'Region V': ['Albay', 'Camarines Norte', 'Camarines Sur', 'Catanduanes', 'Masbate', 'Sorsogon'],
  'Region VI': ['Aklan', 'Antique', 'Capiz', 'Guimaras', 'Iloilo', 'Negros Occidental'],
  'Region VII': ['Bohol', 'Cebu', 'Negros Oriental', 'Siquijor'],
  'Region VIII': ['Biliran', 'Eastern Samar', 'Leyte', 'Northern Samar', 'Samar', 'Southern Leyte'],
  'Region IX': ['Zamboanga del Norte', 'Zamboanga del Sur', 'Zamboanga Sibugay'],
  'Region X': ['Bukidnon', 'Camiguin', 'Lanao del Norte', 'Misamis Occidental', 'Misamis Oriental'],
  'Region XI': ['Davao de Oro', 'Davao del Norte', 'Davao del Sur', 'Davao Occidental', 'Davao Oriental'],
  'Region XII': ['Cotabato', 'Sarangani', 'South Cotabato', 'Sultan Kudarat'],
  'CAR': ['Abra', 'Apayao', 'Benguet', 'Ifugao', 'Kalinga', 'Mountain Province'],
  'NCR': ['Metro Manila'],
  'BARMM': ['Basilan', 'Lanao del Sur', 'Maguindanao del Norte', 'Maguindanao del Sur', 'Sulu', 'Tawi-Tawi'],
}

const availableProvinces = computed(() => {
  return regionProvinceMap[form.value.region] || []
})

</script>

<style scoped>

</style>
