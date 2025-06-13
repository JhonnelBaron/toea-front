<template>
  <div class="flex h-screen overflow-hidden"> 
    <SidebarAdmin />

    <div class="flex-1 bg-blue-200 flex flex-col">
      <div class="flex flex-row items-center p-4 mt-4 mr-4 rounded-lg">
        <div class="p-4 bg-amber-300 flex flex-col mr-4">Total number of Nominees
          <div class="font-bold text-7xl text-end">143</div>
        </div>
        <div class="p-4 bg-amber-300 mr-4 px-20 text-start items-start justify-start">Past Winners
          <div class="font-semibold text-md">TESDA Central Office</div>
          <div class="font-semibold text-md">TESDA Nueva Ecija Provincial Office</div>
          <div class="font-semibold text-md">TESDA Nueva Ecija Provincial Office</div>
        </div>
        <div class="p-4 bg-amber-300">Real Time and Date
          <div class="text-5xl font-bold">05:05:00</div>
          <div class="text-2xl font-semibold">January 27, 2025</div>
        </div>
      </div>
      <section class="flex-1 bg-gray-100 flex flex-col mt-4 mb-4 mr-4 rounded-2xl shadow-lg overflow-y-auto"> 
        <div class="p-10 text-4xl font-semibold">Welcome to the TOEA</div>
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
import CriteriaE from '~/components/Criterias/CriteriaE.vue';

const activeTab = ref('A')

const getComponent = (tabName) => {
  switch (tabName) {
    case 'A': return CriteriaA
    case 'B': return CriteriaB
    case 'C': return CriteriaC
    case 'D': return CriteriaD
    case 'E': return CriteriaE
    default: return CriteriaA
  }
}
</script>
