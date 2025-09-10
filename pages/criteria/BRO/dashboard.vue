<template>
  <div class="flex h-screen overflow-hidden">
    <NewSidebar />

    <div class="flex-1 bg-gray-200 flex flex-col pl-4">
      <div class="flex flex-row items-stretch mt-4 mr-4 gap-4 rounded-lg">
        <!-- Best Regional Office Card -->
        <div class="bg-white p-4 rounded-lg w-1/5 min-w-[150px] h-full flex flex-col shadow-2xs">
          <p class="text-sm font-medium text-center">Best Regional Office</p>
          <span class="border-b p-1"></span>
          <div class="flex-grow flex items-center justify-center">
            <div class="font-light text-center">
              Regional Operations and Management Office
            </div>
          </div>
        </div>

        <!-- 2024 Winners Card -->
        <div class="bg-white p-4 rounded-lg flex-1 h-full flex flex-col justify-start shadow-2xs">
          <p class="text-sm font-medium mb-2">2024 Winners</p>
          <ul class="space-y-1 flex-grow">
            <li class="font-light text-sm border-b">TESDA Central Office</li>
            <li class="font-light text-sm border-b">TESDA Nueva Ecija Provincial Office</li>
            <li class="font-light text-sm border-b">TESDA Nueva Ecija Provincial Office</li>
          </ul>
        </div>

        <!-- Mark as Done Card -->
        <div
          class="bg-white p-4 rounded-lg w-1/4 min-w-[200px] text-end h-full flex flex-col justify-between shadow-2xs"
        >
          <p class="text-sm font-light">Done Evaluating?</p>
          <div>
            <button
              class="bg-green-400 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md"
            >
              Mark as Done for Evalutation!
            </button>
          </div>
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
        <p class="text-xs text-gray-500">TESDA Office</p>
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
