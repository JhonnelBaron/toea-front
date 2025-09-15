<template>
  <div class="flex h-screen">
    <NewSidebar />

    <main class="flex-1 bg-gray-100 flex flex-col overflow-y-auto p-4">
    <div class="flex-1 bg-gray-100 flex flex-col pl-4">
     <div class="flex flex-row items-stretch mt-4 mr-4 gap-4 rounded-lg">
  <!-- Best Regional Office Card -->

<div class="bg-white p-4 rounded-lg flex-1 flex flex-col shadow-md py-8">
  <p class="text-lg text-center font-light text-white bg-blue-600 rounded-lg p-2 mb-2">
    🏆 BEST REGIONAL OFFICE 
  </p>

  <div class="flex flex-row justify-between items-center">
    <!-- Left side -->
    <div class="flex flex-col text-start mt-2">
      <div class="font-light text-sm text-gray-700">You are Evaluating:</div>
      <div class="text-gray-600 text-xl font-semibold">
        TESDA Regional Office III
      </div>
    </div>

    <!-- Right side button -->
    <div class="mt-2 flex flex-row">
      <NuxtLink to="/executive">
      <button class="bg-blue-600 px-2 py-2 rounded-lg text-xs text-white flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="16" height="16" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Back to Dashboard
      </button>
      </NuxtLink>
    </div>

  </div>
</div>


  <!-- Overall Evaluation Completion Card -->
  <div class="bg-white relative overflow-hidden p-6 rounded-lg flex-1 flex flex-col justify-between shadow-md">
    <!-- Trophy background -->
    <img 
      src="/images/trophy.png" 
      alt="Trophy" 
      class="absolute right-8 -bottom-10 w-60 h-60 opacity-40 pointer-events-none select-none" 
    />

    <p class="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2 relative z-10">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3v1H6v2h3v1c0 1.657 1.343 3 3 3s3-1.343 3-3v-1h3v-2h-3v-1c0-1.657-1.343-3-3-3z" />
      </svg>
      Evaluation Completion Percentage
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


  <!-- Mark as Done Card (smaller) -->
  <div class="bg-white relative overflow-hidden p-6 rounded-lg flex-[0.8] flex flex-col justify-center items-start shadow-md">
  <!-- Check background -->
  <img 
    src="/images/check.png" 
    alt="Check" 
    class="absolute -right-18 -bottom-10 w-60 h-60 opacity-30 pointer-events-none select-none object-contain" 
  />

  <p class="text-lg font-light mb-2 relative z-10">Done Evaluating?</p>
  <button
    class="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 ease-in-out relative z-10"
  >
    ✅ Mark as Done
  </button>
</div>


</div>


<!-- Navigator -->
<!-- <BRONavigator /> -->

<!-- GINAWA KO MUNA COMPONENT PARA DI MAHABA -->
<!-- <EvaluationCriteriaA />
<EvaluationCriteriaB />
<EvaluationCriteriaC />
<EvaluationCriteriaD />
<EvaluationCriteriaE /> -->
<BRONavigator @selectCategory="activeTab = $event" />

<!-- Conditionally render each EvaluationCriteria -->
<EvaluationCriteriaA v-if="activeTab === 'A'" />
<EvaluationCriteriaB v-else-if="activeTab === 'B'" />
<EvaluationCriteriaC v-else-if="activeTab === 'C'" />
<EvaluationCriteriaD v-else-if="activeTab === 'D'" />
<EvaluationCriteriaE v-else-if="activeTab === 'E'" />


    </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EvaluationCriteriaA from '~/components/BroEvaluation/EvaluationCriteriaA.vue';
import EvaluationCriteriaB from '~/components/BroEvaluation/EvaluationCriteriaB.vue';
import EvaluationCriteriaC from '~/components/BroEvaluation/EvaluationCriteriaC.vue';
import EvaluationCriteriaD from '~/components/BroEvaluation/EvaluationCriteriaD.vue';
import EvaluationCriteriaE from '~/components/BroEvaluation/EvaluationCriteriaE.vue';
import BRONavigator from '~/components/BRONavigator.vue';
// import SampleEvaluationCriteria from '~/components/SampleEvaluationCriteria.vue';
const activeTab = ref('A')


</script>
