<template>
  <div class="bg-blue-200 flex h-screen overflow-hidden">
    <SidebarAdmin />
        <section class="flex-1 bg-white flex flex-col mt-4 mb-4 mr-4 rounded-2xl shadow-lg overflow-y-auto border-b-4 border-blue-600">
            <div class="p-10 text-4xl"></div>
        </section>
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