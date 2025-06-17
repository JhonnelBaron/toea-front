<template>
  <div class="flex h-screen overflow-hidden">
    <SidebarAdmin />

    <div class="flex-1 bg-blue-200 flex flex-col">
      <div class="flex flex-row items-stretch mt-4 mr-4 gap-4 rounded-lg">

        <div class="bg-white p-4 rounded-lg w-1/5 min-w-[150px] h-full flex flex-col justify-between">
          <p class="text-sm font-medium">Total number of Nominees</p>
          <div class="font-bold text-7xl text-end">143</div>
        </div>

        <div class="bg-white p-4 rounded-lg flex-1 h-full flex flex-col justify-start">
          <p class="text-sm font-medium mb-2">2024  Winners</p>
          <ul class="space-y-1 flex-grow">
            <li class="font-light text-md border-b">TESDA Central Office</li>
            <li class="font-light text-md border-b">TESDA Nueva Ecija Provincial Office</li>
            <li class="font-light text-md border-b">TESDA Nueva Ecija Provincial Office</li>
          </ul>
        </div>

        <div class="bg-white p-4 rounded-lg w-1/4 min-w-[200px] text-end h-full flex flex-col justify-between">
          <p class="text-sm font-medium">Time and Date</p>
          <div>
            <div class="text-5xl font-bold">{{ currentTime }}</div>
            <div class="text-2xl font-semibold">{{ currentDate }}</div>
          </div>
        </div>

      </div>

      <section class="flex-1 bg-gray-100 flex flex-col mt-4 mb-4 mr-4 rounded-2xl shadow-lg overflow-y-auto">
        <div class="p-10 text-4xl font-semibold">Welcome to the TOEA</div>
      </section>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'; // Import ref, onMounted, and onUnmounted
import SidebarAdmin from '~/components/SidebarAdmin.vue';
import CriteriaNavigator from '~/components/CriteriaNavigator.vue';

// Import Criteria components (existing code)
import CriteriaA from '~/components/Criterias/CriteriaA.vue';
import CriteriaB from '~/components/Criterias/CriteriaB.vue';
import CriteriaC from '~/components/Criterias/CriteriaC.vue';
import CriteriaD from '~/components/Criterias/CriteriaD.vue';
import CriteriaE from '~/components/Criterias/CriteriaE.vue';

definePageMeta({
  requiresAuth: true
});

const activeTab = ref('A');

const getComponent = (tabName) => {
  switch (tabName) {
    case 'A': return CriteriaA;
    case 'B': return CriteriaB;
    case 'C': return CriteriaC;
    case 'D': return CriteriaD;
    case 'E': return CriteriaE;
    default: return CriteriaA;
  }
};

// --- Real-time clock logic ---
const currentTime = ref('');
const currentDate = ref('');
let timerInterval; // To store the interval ID for cleanup

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
  updateTimeAndDate(); // Initial update
  timerInterval = setInterval(updateTimeAndDate, 1000); // Update every second
});

// Clear the timer when the component is unmounted to prevent memory leaks
onUnmounted(() => {
  clearInterval(timerInterval);
});
</script>