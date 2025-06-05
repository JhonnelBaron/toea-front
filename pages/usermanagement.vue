<template>
  <div class="flex h-screen bg-blue-200">
    <SidebarAdmin />

    <div class="flex-1 bg-blue-200 mt-4 mr-4 mb-4 flex ">
      <section class="flex-1 bg-gray-100 rounded-2xl shadow-lg overflow-y-auto p-4 pt-20 ">
        <div class="flex justify-between items-center mb-4">
          <div class="flex items-center text-green-600 font-semibold cursor-pointer">
            <span class="mr-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
              </svg>
            </span>
            Add User
          </div>

          <div class="flex items-center space-x-4">
            <div class="flex items-center text-blue-600 font-semibold cursor-pointer">
              <span class="mr-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                  <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path>
                </svg>
              </span>
              Edit User
            </div>
            <div class="flex items-center text-red-600 font-semibold cursor-pointer">
              <span class="mr-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 011 1v1h4a1 1 0 110 2H6a1 1 0 110-2h4V3a1 1 0 011-1zM4 7a1 1 0 011-1h10a1 1 0 011 1v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm3 3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm5 0a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1z" clip-rule="evenodd"></path>
                </svg>
              </span>
              Delete User
            </div>
          </div>
        </div>
        <div class="bg-white text-gray-800 p-6 rounded-xl shadow-md my-4">
          Add User Here
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
