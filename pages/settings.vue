<template>
  <div class="flex h-screen bg-blue-200">
    <SidebarAdmin />

    <div class="flex-1 bg-blue-200 mt-4 mr-4 mb-4 flex ">
      <section class="flex-1 bg-gray-100 rounded-2xl shadow-lg overflow-y-auto p-4 pt-20 ">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center text-gray-900 font-semibold cursor-pointer">
            <img src="/images/settingsIcon.svg" alt="Settings" class="w-5 h-5 mr-2" />
            Settings
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex items-center text-blue-600 font-semibold cursor-pointer">
              
            </div>
            <div class="flex items-center text-red-600 font-semibold cursor-pointer">
            
            </div>
            
          </div>
        </div>
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md my-4">
              • Disable Registration <br>
              • Disable Modification of Criterias <br></br>
              • Disable Loggin in (Client Side - Sitewide)
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
