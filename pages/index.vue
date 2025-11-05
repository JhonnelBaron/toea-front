<template>
  <div class="flex h-screen overflow-hidden">
    <SidebarAdmin />

    <div class="flex-1 bg-blue-200 flex flex-col overflow-y-auto">
      <div class="flex flex-row items-stretch mt-4 mr-4 gap-4 rounded-lg">
        
        <div class="bg-white p-4 rounded-lg w-1/5 min-w-[150px] h-full flex flex-col justify-between border-b-4 border-red-500">
          <p class="text-sm font-medium">Total number of Nominees</p>
          <div class="font-light text-5xl text-center">{{totalNominees}}</div>
        </div>

        <div class="bg-white p-4 rounded-lg flex-1 h-full flex flex-col justify-start border-b-4 border-green-800">
          <p class="text-sm font-medium mb-2">2024 Winners</p>
          <ul class="space-y-1 flex-grow">
            <li class="font-light text-sm border-b">TESDA Central Office</li>
            <li class="font-light text-sm border-b">TESDA Nueva Ecija Provincial Office</li>
            <li class="font-light text-sm border-b">TESDA Nueva Ecija Provincial Office</li>
          </ul>
        </div>

        <div class="bg-white p-4 rounded-lg w-1/4 min-w-[200px] text-end h-full flex flex-col justify-between border-b-4 border-orange-500">
          <p class="text-sm font-medium">Time and Date</p>
          <div>
            <div class="text-2xl font-bold">{{ currentTime }}</div>
            <div class="text-md font-semibold">{{ currentDate }}</div>
          </div>
        </div>

      </div>


<section class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4 mr-4 ml-0">
  <!-- Best Regional Office -->
<div class="flex flex-col gap-y-4">
  <!-- Header -->
  <div class="relative bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-4 flex items-center gap-3">
    <!-- Building Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M3 21h18M9 8h6m-7 4h8m-9 4h10M12 3l8 4v2H4V7l8-4z" />
    </svg>
    <div>
      <h2 class="text-lg font-semibold">Best Regional Office</h2>
      <p class="text-3xl font-bold">{{ broCount }}</p>
    </div>
  <NuxtLink
    to="/admin/regions"
    class="absolute bottom-2 right-3 text-sm font-medium text-white/90 hover:text-white transition"
  >
    View
  </NuxtLink>
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
<section class="flex-1 bg-white flex flex-col mt-4 mb-4 mr-4 rounded-2xl shadow-lg overflow-y-auto border-b-4 border-blue-600 p-6">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
    
    <!-- Executive Offices -->
    <div class="flex flex-col">
      <h2 class="text-lg font-semibold mb-4 text-blue-700">Evaluators</h2>
      <ul class="space-y-3">
       <!-- Executive Offices -->
    <li
      @click="fetchUsersByType('executive office focal', 'Executive Offices')"
      class="flex justify-between items-center bg-blue-50 rounded-lg p-3 cursor-pointer hover:bg-blue-100 transition"
    >
      <span class="text-sm font-medium text-gray-700">Executive Offices</span>
      <span class="text-lg font-bold text-blue-600">{{ executiveOfficeCount }}</span>
    </li>

    <!-- Secretariat -->
    <li
      @click="fetchUsersByType('secretariat', 'Secretariat')"
      class="flex justify-between items-center bg-blue-50 rounded-lg p-3 cursor-pointer hover:bg-blue-100 transition"
    >
      <span class="text-sm font-medium text-gray-700">Secretariat</span>
      <span class="text-lg font-bold text-blue-600">{{ secretariatCount }}</span>
    </li>

    <!-- External Validators -->
    <li
      @click="fetchUsersByType('external validator', 'External Validators')"
      class="flex justify-between items-center bg-blue-50 rounded-lg p-3 cursor-pointer hover:bg-blue-100 transition"
    >
      <span class="text-sm font-medium text-gray-700">External Validators</span>
      <span class="text-lg font-bold text-blue-600">{{ externalValidatorCount }}</span>
    </li>
      </ul>
    </div>

    <!-- View Monitoring -->
    <div class="bg-gradient-to-r text-center from-blue-400 to-blue-600 text-white rounded-xl p-6 flex flex-col justify-between shadow">
      <div class="grid grid-cols-3 gap-3 mt-6">
    <div class="bg-white/20 rounded-lg p-3 text-center shadow hover:bg-white/30 transition">
      <p class="text-lg font-bold">{{ broFinalistCount }}</p>
      <p class="text-xs opacity-90">BRO</p>
    </div>
    <div class="bg-white/20 rounded-lg p-3 text-center shadow hover:bg-white/30 transition">
      <p class="text-lg font-bold">{{ gpFinalistCount}}</p>
      <p class="text-xs opacity-90">GP</p>
    </div>
    <div class="bg-white/20 rounded-lg p-3 text-center shadow hover:bg-white/30 transition">
      <p class="text-lg font-bold">{{ btiFinalistCount }}</p>
      <p class="text-xs opacity-90">BTI</p>
    </div>
  </div>
      <div class="mt-6">
        <p class="text-2xl font-bold">{{totalFinalists}}</p>
        <p class="text-xs opacity-90">Total Finalists</p>
      </div>
      <NuxtLink to="/admin/finalists" class="mt-6 bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition">
        View Finalists
      </NuxtLink>
    </div>

  </div>
</section>


    </div>

  </div>
  <UserModal
  v-if="showUserModal"
  :title="modalTitle"
  :users="modalUsers"
  @close="showUserModal = false"
/>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'; // Import ref, onMounted, and onUnmounted
import SidebarAdmin from '~/components/SidebarAdmin.vue';
import UserModal from '~/components/Modals/UserModal.vue'
import { NuxtLink } from '#components';
const { $api } = useNuxtApp()

definePageMeta({
  requiresAuth: true
});
const showUserModal = ref(false)
const modalTitle = ref('')
const modalUsers = ref([])


// --- Real-time clock logic ---
const currentTime = ref('');
const currentDate = ref('');
let timerInterval; // To store the interval ID for cleanup

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

const totalFinalists = ref(0)
const broFinalistCount = ref(0)
const broFinalistSmall = ref(0)
const broFinalistMedium = ref(0)
const broFinalistLarge = ref(0)

const gpFinalistCount = ref(0)
const gpFinalistSmall = ref(0)
const gpFinalistMedium = ref(0)
const gpFinalistLarge = ref(0)

const btiFinalistCount = ref(0)
const btiFinalistRtc = ref(0)
const btiFinalistPtc = ref(0)
const btiFinalistTas = ref(0)


// Evaluators
const executiveOfficeCount = ref(0)
const secretariatCount = ref(0)
const externalValidatorCount = ref(0)

const fetchUsersByType = async (type, title) => {
  try {
    const res = await $api.get(`/dashboard/users?type=${encodeURIComponent(type)}`)
    modalUsers.value = res.data.data
    modalTitle.value = title
    showUserModal.value = true
  } catch (err) {
    console.error('Error fetching users:', err)
  }
}
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

    // Evaluators
    executiveOfficeCount.value = data.users_by_type.data['executive office focal'] ?? 0
    secretariatCount.value = data.users_by_type.data['secretariat'] ?? 0
    externalValidatorCount.value = data.users_by_type.data['external validator'] ?? 0

  } catch (err) {
    console.error('Error fetching dashboard data:', err)
  }
}

const fetchFinalistsData = async () => {
  try {
    const res = await $api.get('/finalists/total') 
    const data = res.data  // 👈 fix: extract response data

    totalFinalists.value = data.data

    // BRO
    broFinalistCount.value = data.BRO.count
    broFinalistSmall.value = data.BRO.category_count.small ?? 0
    broFinalistMedium.value = data.BRO.category_count.medium ?? 0
    broFinalistLarge.value = data.BRO.category_count.large ?? 0

    // GP
    gpFinalistCount.value = data.GP.count
    gpFinalistSmall.value = data.GP.category_count.small ?? 0
    gpFinalistMedium.value = data.GP.category_count.medium ?? 0
    gpFinalistLarge.value = data.GP.category_count.large ?? 0

    // BTI
    btiFinalistCount.value = data.TTI.count
    btiFinalistRtc.value = data.TTI.category_count['rtc-stc'] ?? 0
    btiFinalistPtc.value = data.TTI.category_count['ptc-dtc'] ?? 0
    btiFinalistTas.value = data.TTI.category_count['tas'] ?? 0

  } catch (err) {
    console.error('Error fetching dashboard data:', err)
  }
}



const updateTimeAndDate = () => {
  const now = new Date();

  // Format time (HH:MM:SS)
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  currentTime.value = `${hours}:${minutes}:${seconds}`;

  // Format date (Month Day, Year)
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  currentDate.value = now.toLocaleDateString('en-US', options);
};

// Start the timer when the component is mounted
onMounted(() => {
    fetchDashboardData()
  updateTimeAndDate(); // Initial update
  fetchFinalistsData()
  timerInterval = setInterval(updateTimeAndDate, 1000); // Update every second
});

// Clear the timer when the component is unmounted to prevent memory leaks
onUnmounted(() => {
  clearInterval(timerInterval);
});

</script>