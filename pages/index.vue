<template>
  <div class="flex h-screen overflow-hidden"> 
    <SidebarAdmin />

    <div class="flex-1 bg-blue-200 flex flex-col">
      <!-- Tab Header -->
      <CriteriaNavigator :activeTab="activeTab" @tab-change="activeTab = $event" />
      <!-- Tab Content -->
      <section class="flex-1 bg-gray-600 flex flex-col mt-4 mb-4 mr-4 rounded-2xl shadow-lg overflow-y-auto"> 
        <component :is="getComponent(activeTab)" :key="activeTab" />
      </section>
    </div>
    
  </div>
</template>

<script setup>
definePageMeta({
  requiresAuth: true
})
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
