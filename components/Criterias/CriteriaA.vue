<template>
    <div class="max-w-full container p-8 space-y-8 bg-white rounded-lg shadow-md flex-1 overflow-y-auto">
      <!-- Section Header -->
        <div class="flex justify-between items-center text-2xl font-bold text-gray-800 mb-6">
            <div>A. Good Governance Measures</div>
            <AddCriteria />
        </div>
  
      <!-- Table Section -->
<section class="bg-white rounded-lg" v-for="(criteria, index) in criteriaList" :key="criteria.id">
  <div>
    <div class="flex items-center gap-2">
      <h2 class="text-xl font-semibold">
        {{ criteria.number }}. {{ criteria.title }}
      </h2>
      <EditCriteria />
      <EditTags :initialTags="selectedTags" @save="handleTagsSave" />
    </div>

    <!-- Description -->
    <p class="text-sm text-gray-600 my-2" v-if="criteria.description">
      {{ criteria.description }}
    </p>

    <!-- Tags -->
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

  <!-- Table -->
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
          <tr
            v-for="(requirement, reqIndex) in criteria.a_requirements"
            :key="requirement.id"
          >
            <td class="px-4 py-2">{{ requirement.requirement_description }}</td>
            <td class="px-4 py-2">{{ requirement.point_value }}</td>
            <td class="px-4 py-2">
              <span v-if="reqIndex === 0">
                {{ criteria.means_of_verification || 'N/A' }}
              </span>
            </td>
          </tr>
      </tbody>
    </table>
  </div>

  <hr class="my-10 border-gray-500" />
</section>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
const { $api } = useNuxtApp()
  import EditCriteria from '../Buttons/EditCriteria.vue'; 
  import AddCriteria from '../Buttons/AddCriteria.vue';
  import EditTags from '../Buttons/EditTags.vue';

  const selectedTags = ref([])
const criteriaList = ref([])

const handleTagsSave = (tags) => {
  selectedTags.value = tags
}

const fetchCriterias = async () => {
  try {
    const res = await $api.get('/get-all')
    if (res.data.status === 200) {
      criteriaList.value = res.data.data
    }
  } catch (error) {
    console.error('Error fetching criteria:', error)
  }
}

onMounted(() => {
  fetchCriterias()
})




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
  