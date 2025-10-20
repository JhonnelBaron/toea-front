<template>
    <div class="flex h-screen overflow-hidden">
            <SidebarAdmin />
<div class="flex-1 bg-blue-200 flex flex-col overflow-y-auto">
            <section class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5 mr-4 ml-0">
  <!-- Best Regional Office -->
<div class="flex flex-col gap-y-4">
  <!-- Header -->
  <div class="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-4 flex items-center gap-3">
    <!-- Building Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M3 21h18M9 8h6m-7 4h8m-9 4h10M12 3l8 4v2H4V7l8-4z" />
    </svg>
    <div>
      <h2 class="text-lg font-semibold">Best Regional Office</h2>
      <p class="text-3xl font-bold">{{ broCount }}</p>
    </div>
  </div>

  <!-- Subcards -->
  <div class="grid grid-cols-3 gap-3">
    <div class="bg-blue-50 rounded-lg p-3 text-center">
      <p class="text-xs text-gray-600">Small</p>
      <p class="text-xl font-bold text-blue-600">{{ broSmall }}</p>
    </div>
    <div class="bg-blue-50 rounded-lg p-3 text-center">
      <p class="text-xs text-gray-600">Medium</p>
      <p class="text-xl font-bold text-blue-600">{{ broMedium }}</p>
    </div>
    <div class="bg-blue-50 rounded-lg p-3 text-center">
      <p class="text-xs text-gray-600">Large</p>
      <p class="text-xl font-bold text-blue-600">{{ broLarge }}</p>
    </div>
  </div>
</div>

  <!-- Galing Probinsya -->
  <div class="flex flex-col gap-y-4">
    <div class="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-4 flex items-center gap-3">
      <!-- Semi-building Icon (house style) -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M3 12l9-9 9 9M4 10v10h16V10" />
      </svg>
      <div>
        <h2 class="text-lg font-semibold">Galing Probinsya</h2>
        <p class="text-3xl font-bold">{{ gpCount }}</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-3">
      <div class="bg-green-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">Small</p>
        <p class="text-xl font-bold text-green-600">{{ gpSmall }}</p>
      </div>
      <div class="bg-green-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">Medium</p>
        <p class="text-xl font-bold text-green-600">{{ gpMedium }}</p>
      </div>
      <div class="bg-green-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">Large</p>
        <p class="text-xl font-bold text-green-600">{{ gpLarge }}</p>
      </div>
    </div>
  </div>

  <!-- Best Training Institution -->
  <div class="flex flex-col gap-y-4">
    <div class="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-4 flex items-center gap-3">
      <!-- Training Icon (graduation cap) -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m-3 0h6" />
      </svg>
      <div>
        <h2 class="text-lg font-semibold">Best Training Institution</h2>
        <p class="text-3xl font-bold">{{ btiCount }}</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-3">
      <div class="bg-orange-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">RTC/STC</p>
        <p class="text-xl font-bold text-orange-600">{{ btiRtc }}</p>
      </div>
      <div class="bg-orange-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">PTC/DTC</p>
        <p class="text-xl font-bold text-orange-600">{{ btiPtc }}</p>
      </div>
      <div class="bg-orange-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">TAS</p>
        <p class="text-xl font-bold text-orange-600">{{ btiTas }}</p>
      </div>
    </div>
  </div>

</section>
   <!-- Modern Table -->
            <!-- Compact Modern Table -->
<section class="mx-2 bg-white rounded-xl shadow-md p-4 mt-4 mr-4 ml-0">
  <h3 class="text-lg font-semibold text-gray-700 mb-3 tracking-wide">
    Regional Office Evaluation Summary
  </h3>

  <div class="overflow-x-auto rounded-lg border border-gray-200">
    <table class="min-w-full text-sm border-collapse">
      <thead>
        <tr class="bg-blue-600 text-white text-xs uppercase tracking-wide">
          <th class="px-3 py-2 text-left w-28 rounded-tl-lg">Region</th>
          <th class="px-3 py-2 text-left w-24">Category</th>
          <th class="px-2 py-2 text-center w-20">Secretariat</th>
          <th class="px-2 py-2 text-center w-20">Validator 1</th>
          <th class="px-2 py-2 text-center w-20">Validator 2</th>
          <th class="px-2 py-2 text-center w-20">Validator 3</th>
          <th class="px-2 py-2 text-center w-20 rounded-tr-lg">Average</th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr
          v-for="(item, index) in tableData"
          :key="index"
          class="hover:bg-blue-50 even:bg-gray-50 transition-colors"
        >
          <td class="px-3 py-1.5 font-medium">{{ item.region }}</td>
          <td class="px-3 py-1.5">{{ item.category }}</td>

          <!-- Scores with superscript % -->
          <td class="px-2 py-1.5 text-center">
            {{ item.secretariat }}
            <sup class="text-[10px] text-gray-500">({{ item.secretariatPercent }}%)</sup>
          </td>
          <td class="px-2 py-1.5 text-center">
            {{ item.validator1 }}
            <sup class="text-[10px] text-gray-500">({{ item.validator1Percent }}%)</sup>
          </td>
          <td class="px-2 py-1.5 text-center">
            {{ item.validator2 }}
            <sup class="text-[10px] text-gray-500">({{ item.validator2Percent }}%)</sup>
          </td>
          <td class="px-2 py-1.5 text-center">
            {{ item.validator3 }}
            <sup class="text-[10px] text-gray-500">({{ item.validator3Percent }}%)</sup>
          </td>

          <td class="px-2 py-1.5 text-center font-semibold text-blue-600 bg-blue-50 rounded-r-lg">
            {{ item.average }}
            <sup class="text-[10px] text-gray-500">({{ item.averagePercent }}%)</sup>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


    </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'; // Import ref, onMounted, and onUnmounted
import SidebarAdmin from '~/components/SidebarAdmin.vue';
import UserModal from '~/components/Modals/UserModal.vue'
const { $api } = useNuxtApp()

// Nominee data refs
const totalNominees = ref(0)

// BRO
const broCount = ref(0)
const broSmall = ref(0)
const broMedium = ref(0)
const broLarge = ref(0)
// GP
const gpCount = ref(0)
const gpSmall = ref(0)
const gpMedium = ref(0)
const gpLarge = ref(0)

// BTI
const btiCount = ref(0)
const btiRtc = ref(0)
const btiPtc = ref(0)
const btiTas = ref(0)
const tableData = ref([
  {
    region: 'Region I',
    category: 'Small',
    secretariat: 90,
    validator1: 88,
    validator2: 85,
    validator3: 89,
    average: 88,
    secretariatPercent: 98,
    validator1Percent: 95,
    validator2Percent: 92,
    validator3Percent: 93,
    averagePercent: 95,
  },
  {
    region: 'Region II',
    category: 'Medium',
    secretariat: 92,
    validator1: 91,
    validator2: 90,
    validator3: 93,
    average: 91.5,
    secretariatPercent: 97,
    validator1Percent: 93,
    validator2Percent: 91,
    validator3Percent: 94,
    averagePercent: 94,
  },
  {
    region: 'Region III',
    category: 'Large',
    secretariat: 87,
    validator1: 84,
    validator2: 86,
    validator3: 88,
    average: 86.25,
    secretariatPercent: 89,
    validator1Percent: 86,
    validator2Percent: 84,
    validator3Percent: 88,
    averagePercent: 87,
  },
])

const fetchDashboardData = async () => {
  try {
    const res = await $api.get('/dashboard/nominees') 
    const data = res.data  // 👈 fix: extract response data

    totalNominees.value = data.total_nominees

    // BRO
    broCount.value = data.bro.count
    broSmall.value = data.bro.categories.small ?? 0
    broMedium.value = data.bro.categories.medium ?? 0
    broLarge.value = data.bro.categories.large ?? 0

    // GP
    gpCount.value = data.gp.count
    gpSmall.value = data.gp.categories.small ?? 0
    gpMedium.value = data.gp.categories.medium ?? 0
    gpLarge.value = data.gp.categories.large ?? 0

    // BTI
    btiCount.value = data.bti.count
    btiRtc.value = data.bti.categories['rtc-stc'] ?? 0
    btiPtc.value = data.bti.categories['ptc-dtc'] ?? 0
    btiTas.value = data.bti.categories['tas'] ?? 0

  } catch (err) {
    console.error('Error fetching dashboard data:', err)
  }
}

onMounted(() => {
    fetchDashboardData()
});


</script>

<style scoped>
table th,
table td {
  border-bottom: 1px solid #e5e7eb; /* gray-200 */
}

</style>