<template>
  <div class="flex h-screen overflow-hidden">
    <NewSidebar />

    <div class="flex-1 bg-gray-100 flex flex-col pl-4">
     <div class="flex flex-row items-stretch mt-4 mr-4 gap-4 rounded-lg">
  <!-- Best Regional Office Card -->
  <div class="bg-white p-4 rounded-lg flex-1 flex flex-col shadow-md">
    <p class="text-lg text-center font-semibold text-blue-900">BEST REGIONAL OFFICE</p>
    <span class="border-b block mt-1 mb-3"></span>
    <div class="flex flex-col items-center justify-center text-center">
      <div class="font-light text-sm text-gray-700">Welcome!</div>
      <div class="font-thin text-gray-600 text-sm mt-1">
        Regional Operations and Management Office
      </div>
    </div>
  </div>

  <!-- Overall Evaluation Completion Card -->
  <div class="bg-white relative overflow-hidden p-6 rounded-lg flex-1 flex flex-col justify-between shadow-md">
    <!-- Trophy background -->
    <img 
      src="/images/trophy.png" 
      alt="Trophy" 
      class="absolute right-8 bottom-2 w-28 h-34 opacity-40 pointer-events-none select-none" 
    />

    <p class="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2 relative z-10">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3v1H6v2h3v1c0 1.657 1.343 3 3 3s3-1.343 3-3v-1h3v-2h-3v-1c0-1.657-1.343-3-3-3z" />
      </svg>
      Overall Evaluation Completion
    </p>

    <!-- Progress Bar -->
    <div class="relative z-10">
      <div class="flex justify-between text-xs mb-1 text-gray-600">
        <span>Completion Rate</span>
        <span>75%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4">
        <div
          class="bg-green-500 h-4 rounded-full transition-all duration-500"
          style="width: 75%"
        ></div>
      </div>
    </div>
  </div>

  <!-- Partner Logos Card (extra wide) -->
  <div class="bg-white p-4 rounded-lg flex-[2] flex flex-col justify-center items-center shadow-md">
    <div class="flex flex-row gap-6 justify-center items-center">
      <img src="/images/bpLogo.png" alt="Logo 1" class="w-20 h-20 object-contain" />
    <img src="/images/tesdaLogo.png" alt="Logo 2" class="w-20 h-20 object-contain" />
    <img src="/images/kayangLogo.png" alt="Logo 3" class="w-40 h-20 object-contain" />
      <img src="/images/toeaLogo.png" class="w-22 h-20" alt="Logo 4">
    </div>
  </div>

  <!-- Mark as Done Card (smaller) -->
  <div class="bg-white p-6 rounded-lg flex-[0.8] flex flex-col justify-between items-center shadow-md">
    <p class="text-sm font-light mb-3">Done Evaluating?</p>
    <button
      class="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 ease-in-out"
    >
      ✅ Mark as Done
    </button>
  </div>
</div>


      <!-- Grid Section -->
      <section
  class="flex-1 bg-white flex flex-col mt-4 mb-4 mr-4 rounded-2xl shadow-lg overflow-y-auto p-6"
>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div
      v-for="region in 16"
      :key="region"
      class="bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-md p-5 flex flex-col justify-between"
    >
      <!-- Header -->
      <div>
        <p class="text-sm font-semibold text-gray-800">Region {{ region }}</p>
        <p class="text-xs text-gray-500">TESDA Office / Small / Medium / Large</p>
      </div>

      <!-- Progress -->
      <div class="mt-4">
        <div class="flex justify-between text-xs mb-1 text-gray-600">
          <span>Evaluation Progress</span>
          <span>{{ (region * 6) % 100 }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-3">
          <div
            class="bg-green-500 h-3 rounded-full transition-all duration-500"
            :style="{ width: ((region * 6) % 100) + '%' }"
          ></div>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex justify-between items-center mt-4">
        <!-- Go to Evaluation -->
        <button
          class="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-2 rounded-lg shadow-md"
        >
          Go to Evaluation
        </button>

        <!-- Remarks icons -->
        <div class="flex items-center space-x-2 text-gray-600">
          <button
            class="hover:text-blue-500"
            title="View Remarks"
          >
            <EyeIcon class="h-5 w-5" />
          </button>
          <button
            class="hover:text-green-500"
            title="Edit Remarks"
          >
            <PencilSquareIcon class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarAdmin from '~/components/SidebarAdmin.vue'
import CriteriaNavigator from '~/components/CriteriaNavigator.vue'

import CriteriaA from '~/components/Criterias/CriteriaA.vue'
import CriteriaB from '~/components/Criterias/CriteriaB.vue'
import CriteriaC from '~/components/Criterias/CriteriaC.vue'
import CriteriaD from '~/components/Criterias/CriteriaD.vue'
import CriteriaE from '~/components/Criterias/CriteriaE.vue'

const activeTab = ref('A')

const getComponent = (tabName) => {
  switch (tabName) {
    case 'A':
      return CriteriaA
    case 'B':
      return CriteriaB
    case 'C':
      return CriteriaC
    case 'D':
      return CriteriaD
    case 'E':
      return CriteriaE
    default:
      return CriteriaA
  }
}

</script>
