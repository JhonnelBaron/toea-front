<template>
    <div class="max-w-full container p-8 space-y-8 bg-white rounded-lg shadow-md flex-1 overflow-y-auto">
      <!-- Section Header -->
        <div class="flex justify-between items-center text-2xl font-bold text-gray-800 mb-6">
            <div>A. Good Governance Measures</div>
            <AddCriteria />
        </div>
  
      <!-- Table Section -->
      <section class="bg-white rounded-lg">
        <div>
    <div class="flex items-center gap-2">
      <h2 class="text-xl font-semibold">A.1. Compliance to Zero Corruption Policy</h2>
      <EditCriteria   :criteriaId="item.id"
  :activeTab="activeTab"/>
      <EditTags :initialTags="selectedTags" @save="handleTagsSave" />
    </div>

    <!-- Display selected tags under the title -->
    <div v-if="selectedTags.length" class="my-2 flex flex-wrap gap-2">
      <span
        v-for="tag in selectedTags"
        :key="tag"
        class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full border border-blue-500"
      >
        {{ tag }}
      </span>
    </div>
  </div>
        
  
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm text-left border border-gray-200">
            <thead class="bg-gray-100">
              <tr class="bg-gray-200">
                <th class="px-4 py-2">Requirements</th>
                <th class="px-4 py-2">Score</th>
                <th class="px-4 py-2">Means of Verification</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="px-4 py-2">No personnel with pending administrative case</td>
                <td class="px-4 py-2">40</td>
                <td class="px-4 py-2">Certification of no pending case</td>
              </tr>
              <tr class="">
                <td class="px-4 py-2">At least one with pending case</td>
                <td class="px-4 py-2">0</td>
                <td class="px-4 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr class="my-10 border-gray-500" />
      </section>
  
      <section class="bg-white rounded-lg">
        <div class="flex items-center">
          <h2 class="text-xl font-semibold mb-2">A.2. Compliance to TESDA Code of Conduct and Ethical Standards</h2>
          <EditCriteria />
        </div>
  
        <ul class="list-disc pl-6 text-sm text-gray-700 mb-4 space-y-1">
          <li>Fidelity to Duty</li>
          <li>Conflict of Interest</li>
          <li>Solicitation and Acceptance of Gifts</li>
          <li>Outside Employment</li>
          <li>Cronyism</li>
          <li>Confidentiality</li>
          <li>Post-employment</li>
          <li>Procurement of Goods, Consulting Services, Infrastructure Projects</li>
          <li>Reporting of Malpractices, Corruption, etc.</li>
          <li>Complaints from 888, CSC, ISP findings</li>
        </ul>
  
        <p class="text-xs text-gray-500 mb-4">
          *Valid complaints are officially filed and verified by ACC/Investigation Committee.
        </p>
  
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm text-left border border-gray-200">
            <thead class="bg-gray-200">
              <tr>
                <th class="px-4 py-2">Requirements</th>
                <th class="px-4 py-2">Score</th>
                <th class="px-4 py-2">Means of Verification</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="px-4 py-2">No personnel with pending administrative case</td>
                <td class="px-4 py-2">40</td>
                <td class="px-4 py-2">Certification of no pending case</td>
              </tr>
              <tr class="">
                <td class="px-4 py-2">At least one with pending case</td>
                <td class="px-4 py-2">0</td>
                <td class="px-4 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
<hr class="my-10 border-gray-500" />
      </section>

      <section class="bg-white rounded-lg">
        <div class="flex items-center">
          <h2 class="text-xl font-semibold mb-2">A.2. Compliance to TESDA Code of Conduct and Ethical Standards</h2>
          <EditCriteria />
        </div>
        
  
        <ul class="list-disc pl-6 text-sm text-gray-700 mb-4 space-y-1">
          <li>Fidelity to Duty</li>
          <li>Conflict of Interest</li>
          <li>Solicitation and Acceptance of Gifts</li>
          <li>Outside Employment</li>
          <li>Cronyism</li>
          <li>Confidentiality</li>
          <li>Post-employment</li>
          <li>Procurement of Goods, Consulting Services, Infrastructure Projects</li>
          <li>Reporting of Malpractices, Corruption, etc.</li>
          <li>Complaints from 888, CSC, ISP findings</li>
        </ul>
  
        <p class="text-xs text-gray-500 mb-4">
          *Valid complaints are officially filed and verified by ACC/Investigation Committee.
        </p>
  
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm text-left border border-gray-200">
            <thead class="bg-gray-300">
              <tr>
                <th class="px-4 py-2">Requirements</th>
                <th class="px-4 py-2">Score</th>
                <th class="px-4 py-2">Means of Verification</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="px-4 py-2">No personnel with pending administrative case</td>
                <td class="px-4 py-2">40</td>
                <td class="px-4 py-2">Certification of no pending case</td>
              </tr>
              <tr class="">
                <td class="px-4 py-2">At least one with pending case</td>
                <td class="px-4 py-2">0</td>
                <td class="px-4 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
<hr class="my-10 border-gray-500" />
      </section>

      <section class="bg-white rounded-lg">
        <div class="flex items-center">
          <h2 class="text-xl font-semibold mb-2">A.2. Compliance to TESDA Code of Conduct and Ethical Standards</h2>
          <EditCriteria />
        </div>
        
  
        <ul class="list-disc pl-6 text-sm text-gray-700 mb-4 space-y-1">
          <li>Fidelity to Duty</li>
          <li>Conflict of Interest</li>
          <li>Solicitation and Acceptance of Gifts</li>
          <li>Outside Employment</li>
          <li>Cronyism</li>
          <li>Confidentiality</li>
          <li>Post-employment</li>
          <li>Procurement of Goods, Consulting Services, Infrastructure Projects</li>
          <li>Reporting of Malpractices, Corruption, etc.</li>
          <li>Complaints from 888, CSC, ISP findings</li>
        </ul>
  
        <p class="text-xs text-gray-500 mb-4">
          *Valid complaints are officially filed and verified by ACC/Investigation Committee.
        </p>
  
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm text-left border border-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-4 py-2">Requirements</th>
                <th class="px-4 py-2">Score</th>
                <th class="px-4 py-2">Means of Verification</th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td class="px-4 py-2">No personnel with pending administrative case</td>
                <td class="px-4 py-2">40</td>
                <td class="px-4 py-2">Certification of no pending case</td>
              </tr>
              <tr class="">
                <td class="px-4 py-2">At least one with pending case</td>
                <td class="px-4 py-2">0</td>
                <td class="px-4 py-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
<hr class="my-10 border-gray-500" />
      </section>
    </div>
  </template>
  
  <script setup>
  import EditCriteria from '../Buttons/EditCriteria.vue'; 
  import AddCriteria from '../Buttons/AddCriteria.vue';
  import EditTags from '../Buttons/EditTags.vue';

  const selectedTags = ref([])

const handleTagsSave = (tags) => {
  selectedTags.value = tags
}

  </script>

<style>
/* Optional scrollbar hide (WebKit browsers only) */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.3);
  border-radius: 3px;
}
</style>
  