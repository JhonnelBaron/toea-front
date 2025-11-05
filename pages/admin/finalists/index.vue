<template>
    <div class="flex h-screen overflow-hidden">
            <SidebarAdmin />
<div class="flex-1 bg-blue-200 flex flex-col overflow-y-auto">
            <section class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5 mr-4 ml-0">
  <!-- Best Regional Office -->
<div class="flex flex-col gap-y-4">
  <!-- Header -->
  <div class="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-4 flex items-center gap-3" @click="filterBro('all')">
    <!-- Building Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M3 21h18M9 8h6m-7 4h8m-9 4h10M12 3l8 4v2H4V7l8-4z" />
    </svg>
    <div>
      <h2 class="text-lg font-semibold">Best Regional Office</h2>
      <p class="text-3xl font-bold">{{ broFinalistCount }}</p>
    </div>
  </div>

  <!-- Subcards -->
  <div class="grid grid-cols-3 gap-3">
    <div class="bg-blue-50 rounded-lg p-3 text-center" @click="filterBro('small')">
      <p class="text-xs text-gray-600">Small</p>
      <p class="text-xl font-bold text-blue-600">{{ broFinalistSmall }}</p>
    </div>
    <div class="bg-blue-50 rounded-lg p-3 text-center" @click="filterBro('medium')">
      <p class="text-xs text-gray-600">Medium</p>
      <p class="text-xl font-bold text-blue-600">{{ broFinalistMedium }}</p>
    </div>
    <div class="bg-blue-50 rounded-lg p-3 text-center" @click="filterBro('large')">
      <p class="text-xs text-gray-600">Large</p>
      <p class="text-xl font-bold text-blue-600">{{ broFinalistLarge }}</p>
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
        <p class="text-3xl font-bold">{{ gpFinalistCount }}</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-3">
      <div class="bg-green-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">Small</p>
        <p class="text-xl font-bold text-green-600">{{ gpFinalistSmall }}</p>
      </div>
      <div class="bg-green-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">Medium</p>
        <p class="text-xl font-bold text-green-600">{{ gpFinalistMedium }}</p>
      </div>
      <div class="bg-green-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">Large</p>
        <p class="text-xl font-bold text-green-600">{{ gpFinalistLarge }}</p>
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
        <p class="text-3xl font-bold">{{ btiFinalistCount }}</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-3">
      <div class="bg-orange-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">RTC/STC</p>
        <p class="text-xl font-bold text-orange-600">{{ btiFinalistRtc }}</p>
      </div>
      <div class="bg-orange-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">PTC/DTC</p>
        <p class="text-xl font-bold text-orange-600">{{ btiFinalistPtc }}</p>
      </div>
      <div class="bg-orange-50 rounded-lg p-3 text-center">
        <p class="text-xs text-gray-600">TAS</p>
        <p class="text-xl font-bold text-orange-600">{{ btiFinalistTas }}</p>
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
          <td class="px-2 py-1.5 text-center relative">
            <div class="flex justify-center items-center gap-1">
              <button
            class="text-blue-500 hover:text-blue-700 focus:outline-none"
            @click="(e) => toggleTooltip(index, e)"
          >

                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"/>
                </svg>
              </button>
              <NuxtLink
                  :to="{
                    path: `/admin/bro/${item.nominee_id}`,
                    query: {
                      total: item.secretariat,
                      a: item.details?.bro_a,
                      b: item.details?.bro_b,
                      c: item.details?.bro_c,
                      d: item.details?.bro_d,
                      e: item.details?.bro_e,
                      a_percentage: item.details?.a_percentage,
                      b_percentage: item.details?.b_percentage,
                      c_percentage: item.details?.c_percentage,
                      d_percentage: item.details?.d_percentage,
                      e_percentage: item.details?.e_percentage,
                      total_percentage: item.secretariatPercent
                    }
                  }"
                class="text-blue-600 font-semibold hover:text-blue-800 hover:underline transition-colors"
              >
                {{ item.secretariat }}
              </NuxtLink>
              <sup class="text-[10px] text-gray-500">({{ item.secretariatPercent }}%)</sup>

              <!-- Clickable Info Icon -->

            </div>

            <!-- Tooltip (click-based) -->
          <div
            v-if="activeTooltip === index"
            class="fixed w-48 bg-gray-800 text-white text-xs rounded-md p-2 shadow-lg z-[9999] text-left transition-opacity duration-200"
            :style="tooltipStyle"
          >
            <button
              class="absolute top-1 right-1 text-gray-400 hover:text-white text-[10px] font-bold"
              @click.stop="activeTooltip = null"
            >
              X
            </button>
            <div
              class="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-800"
            ></div>
            <p>Category A: {{ item.details?.bro_a ?? 0 }} pts — <span class="text-blue-300">{{ item.details?.a_percentage ?? 0 }}%</span></p>
            <p>Category B: {{ item.details?.bro_b ?? 0 }} pts — <span class="text-blue-300">{{ item.details?.b_percentage ?? 0 }}%</span></p>
            <p>Category C: {{ item.details?.bro_c ?? 0 }} pts — <span class="text-blue-300">{{ item.details?.c_percentage ?? 0 }}%</span></p>
            <p>Category D: {{ item.details?.bro_d ?? 0 }} pts — <span class="text-blue-300">{{ item.details?.d_percentage ?? 0 }}%</span></p>
            <p>Category E: {{ item.details?.bro_e ?? 0 }} pts — <span class="text-blue-300">{{ item.details?.e_percentage ?? 0 }}%</span></p>
            </div>
            
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

          <!-- <td class="px-2 py-1.5 text-center font-semibold text-blue-600 bg-blue-50 rounded-r-lg">
            {{ item.average }}
            <sup class="text-[10px] text-gray-500">({{ item.averagePercent }}%)</sup>
          </td> -->
          <td class="px-2 py-1.5 text-center font-semibold text-blue-600 bg-blue-50 rounded-r-lg flex items-center justify-center gap-2">
          <span>
            {{ item.average }}
            <sup class="text-[10px] text-gray-500">({{ item.averagePercent }}%)</sup>
          </span>
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

const tableData = ref([]);

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

const fetchBroSummaries = async () => {
  try {
    const res = await $api.get('/finalists/bro', {
      params: {
        nominee_type: 'BRO', // optional — adjust if you want to filter here
      },
    });

    // API returns { status, message, data }
    const summaries = res.data.data || [];

    // Map API data to table format
    tableData.value = summaries.map(item => ({
      nominee_id: item.nominee_id, 
      region: item.nominee?.nominee_name || '—',
      category: item.nominee?.nominee_category || '—',
      secretariat: item.bro_total ?? 0,
      validator1: item.ex1_total ?? 0,
      validator2: item.ex2_total ?? 0,
      validator3: item.ex3_total ?? 0,
      average: computeAverage(item),
      secretariatPercent: item.total_percentage ? item.total_percentage.toFixed(1) : 0,
      validator1Percent: 0, // placeholder if you don’t have these yet
      validator2Percent: 0,
      validator3Percent: 0,
      averagePercent: 0,

            details: {
        bro_a: item.bro_a ?? 0,
        bro_b: item.bro_b ?? 0,
        bro_c: item.bro_c ?? 0,
        bro_d: item.bro_d ?? 0,
        bro_e: item.bro_e ?? 0,

        a_percentage: item.A_percentage?.toFixed(1) ?? 0,
        b_percentage: item.B_percentage?.toFixed(1) ?? 0,
        c_percentage: item.C_percentage?.toFixed(1) ?? 0,
        d_percentage: item.D_percentage?.toFixed(1) ?? 0,
        e_percentage: item.E_percentage?.toFixed(1) ?? 0,
      },
    }));

  } catch (error) {
    console.error('Error fetching BRO summaries:', error);
  }
};
// Compute average of 4 scores (if null, skip)
const computeAverage = (item) => {
  const scores = [item.bro_total, item.ex1_total, item.ex2_total, item.ex3_total]
    .filter(s => s !== null && s !== undefined);
  if (scores.length === 0) return 0;
  return (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2);
};

// For now, simple placeholder percent logic — adjust if you have max scores
// const computePercent = (score) => {
//   if (!score) return 0;
//   return Math.min(((score / 1000) * 100).toFixed(1), 100); // e.g., scale to %
// };

const filterBro = async (category) => {
  try {
    const params = { nominee_type: 'BRO' };

    // Add category filter if not "all"
    if (category !== 'all') {
      params.nominee_category = category;
    }

    const res = await $api.get('/finalists/bro', { params });

    const summaries = res.data.data || [];
    tableData.value = summaries.map(item => ({
      nominee_id: item.nominee_id, 
      endorse_externals: item.endorse_externals ?? false,
      region: item.nominee?.nominee_name || '—',
      category: item.nominee?.nominee_category || '—',
      secretariat: item.bro_total ?? 0,
      validator1: item.ex1_total ?? 0,
      validator2: item.ex2_total ?? 0,
      validator3: item.ex3_total ?? 0,
      average: computeAverage(item),
      secretariatPercent: item.total_percentage ? item.total_percentage.toFixed(1) : 0,
      validator1Percent: 0, // placeholder if you don’t have these yet
      validator2Percent: 0,
      validator3Percent: 0,
      averagePercent: 0,

            details: {
        bro_a: item.bro_a ?? 0,
        bro_b: item.bro_b ?? 0,
        bro_c: item.bro_c ?? 0,
        bro_d: item.bro_d ?? 0,
        bro_e: item.bro_e ?? 0,
        a_percentage: item.A_percentage?.toFixed(1) ?? 0,
        b_percentage: item.B_percentage?.toFixed(1) ?? 0,
        c_percentage: item.C_percentage?.toFixed(1) ?? 0,
        d_percentage: item.D_percentage?.toFixed(1) ?? 0,
        e_percentage: item.E_percentage?.toFixed(1) ?? 0,
      },


    }));

    console.log(`Filtered ${category}:`, summaries);
  } catch (error) {
    console.error('Error filtering BRO summaries:', error);
  }
};
const activeTooltip = ref(null)

const tooltipStyle = ref({ top: '0px', left: '0px' })

function toggleTooltip(index, event) {
  if (activeTooltip.value === index) {
    activeTooltip.value = null
    return
  }

  // Get the position of the clicked button
  const rect = event.currentTarget.getBoundingClientRect()

  // Calculate tooltip position (above the clicked icon)
  tooltipStyle.value = {
    top: `${rect.top - 90}px`, // adjust height offset
    left: `${rect.left + rect.width / 2 - 96}px`, // center horizontally
  }

  activeTooltip.value = index
}



function handleClickOutside(event) {
  if (!event.target.closest('td')) {
    activeTooltip.value = null
  }
}

onMounted(() => {
  fetchBroSummaries()
  fetchFinalistsData()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})


</script>

<style scoped>
table th,
table td {
  border-bottom: 1px solid #e5e7eb; /* gray-200 */
}

</style>