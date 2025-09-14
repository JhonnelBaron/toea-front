<template>
    <div class="max-w-full container p-8 space-y-8 bg-white rounded-lg shadow-md flex-1 overflow-y-auto">
      <!-- Section Header -->
        <div class="flex justify-between items-center text-xl font-semibold text-gray-800 mb-6">

  <!-- Left title -->
  <div>C. Administrative and Support Services</div>

  <!-- Right side: search and AddCriteria -->
  <div class="flex items-center space-x-3 bg-white px-4 py-2 rounded-lg shadow-md">

<!-- Search input -->
    <input
    v-model="searchQuery"
    type="text"
    placeholder="Search criteria..."
    class="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 w-64"
    />

    <!-- AddCriteria component -->
    <AddCriteria :activeTab="activeTab" @save="handleNewCriteria"/>
  </div>
</div>

  
      <!-- Table Section -->
<section class="bg-gray-100 rounded-lg p-4 border border-gray-400 border-b-gray-400 border-b-4" v-for="criteria in filteredCriteria" :key="criteria.id">
  <div>
    <div class="flex items-center gap-2">
      <h2 class="text-md font-semibold">
        {{ criteria.number }}. {{ criteria.title }}
      </h2>
      <EditCriteria :criteriaId="criteria.id"
      :activeTab="activeTab"
      @save="(data) => handleCriteriaSave(criteria.id, data)"
  />
         <EditTags
        :initialTags="getTagsForCriteria(criteria)"
        :criteriaId="criteria.id"
        :activeTab="activeTab"
        @save="(tags) => handleTagsSave(criteria.id, tags)"
        />

        <IncOffice 
        :initialOffices="getOfficesForCriteria(criteria)"
        :criteriaId="criteria.id"
        :activeTab="activeTab"
        @save="(offices) => handleOfficesSave(criteria.id, offices)"
        />
                <DeleteCriteria 
        :criteriaId="criteria.id" 
         :activeTab="activeTab"
        @deleted="deleteItem" 
      />
        </div>

    <!-- Description -->
    <p class="text-sm text-gray-600 my-2" v-if="criteria.description">
      {{ criteria.description }}
    </p>

        <!-- Tags -->
      <div class="flex flex-col">
          <div v-if="getOfficesForCriteria(criteria).length" class="my-2 flex flex-wrap gap-2">
            <span
              v-for="office in getOfficesForCriteria(criteria)"
              :key="office"
              class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full border border-blue-500"
            >
              {{ office }}
            </span>
          </div>
          <div v-if="getTagsForCriteria(criteria).length" class="my-2 flex flex-wrap gap-2">
            <span
              v-for="tag in getTagsForCriteria(criteria)"
              :key="tag"
              class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full border border-blue-500"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

  <!-- Table -->
  <div class="overflow-x-auto">
    <table class="min-w-full text-sm text-left border border-gray-200">
      <thead class="bg-gray-100">
        <tr class="bg-gray-200 border border-gray-400 text-xs">
          <th class="px-4 py-2 border-b-blue-600 border-b-2 font-medium">Requirements</th>
          <th class="px-4 py-2 border-b-green-600 border-b-2 font-medium">Score</th>
          <th class="px-4 py-2 border-b-red-600 border-b-2 font-medium">Means of Verification</th>
        </tr>
      </thead>
      <tbody class="text-xs">
          <tr
            v-for="(requirement, reqIndex) in criteria.c_requirements"
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
</section>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import EditCriteria from '../Buttons/EditCriteria.vue'; 
  import AddCriteria from '../Buttons/AddCriteria.vue';
  import EditTags from '../Buttons/EditTags.vue';
  import DeleteCriteria from '../Buttons/DeleteCriteria.vue';
  import IncOffice from '../Buttons/IncOffice.vue';
  
  const { $api } = useNuxtApp()
  const { activeTab } = defineProps({
  activeTab: String
})


const mapCriteriaToTags = (criteria) => {
  const tags = []

  if (criteria.bro_small) tags.push('BRO - Small')
  if (criteria.bro_medium) tags.push('BRO - Medium')
  if (criteria.bro_large) tags.push('BRO - Large')
  if (criteria.gp_small) tags.push('GP - Small')
  if (criteria.gp_medium) tags.push('GP - Medium')
  if (criteria.gp_large) tags.push('GP - Large')
  if (criteria.bti_rtcstc) tags.push('BTI - RTC/STC')
  if (criteria.bti_ptcdtc) tags.push('BTI - PTC')
  if (criteria.bti_tas) tags.push('BTI - TAS')

  return tags
}

const mapCriteriaToOffices = (criteria) => {
  const offices = []

  if (criteria.as) offices.push('Administrative Service')
  if (criteria.legal) offices.push('Legal Division')
  if (criteria.co) offices.push('Certification Office')
  if (criteria.fms) offices.push('Financial and Management Service')
  if (criteria.nitesd) offices.push('National Institute for Technical Education and Skills Development')
  if (criteria.piad) offices.push('Public Information and Assistance Division')
  if (criteria.planning) offices.push('Planning Office')
  if (criteria.plo) offices.push('Partnership and Linkages Office')
  if (criteria.romo) offices.push('Regional Operations Management Office')
  if (criteria.icto) offices.push('Information and Communication Office')
  if (criteria.ws) offices.push('World Skills')

  return offices
}


const handleCriteriaSave = (criteriaId, updatedCriteria) => {
  // Find index in list
  const index = criteriaList.value.findIndex(c => c.id === criteriaId)
  if (index !== -1) {
    // Replace with new data
    criteriaList.value[index] = {
      ...criteriaList.value[index],
      ...updatedCriteria
    }
  }

  // Also update tags map if needed
  selectedTagsMap.value[criteriaId] = mapCriteriaToTags(updatedCriteria)
  selectedOfficesMap.value[criteriaId] = mapCriteriaToOffices(updatedCriteria)
}

const handleNewCriteria = (newCriteria) => {
  // ✅ Add to the list
  criteriaList.value.push(newCriteria)

  // ✅ Also prepare its tags
  selectedTagsMap.value[newCriteria.id] = mapCriteriaToTags(newCriteria)
  selectedOfficesMap.value[newCriteria.id] = mapCriteriaToOffices(newCriteria)
}


  const selectedTagsMap = ref([])
  const criteriaList = ref([])
  const selectedOfficesMap = ref({}) 

const getTagsForCriteria = (criteria) => {
  const tags = selectedTagsMap.value[criteria.id]
  return Array.isArray(tags) ? tags : []   // ✅ ensures it’s always an array
}

const getOfficesForCriteria = (criteria) => {
  const offices = selectedOfficesMap.value[criteria.id]
  return Array.isArray(offices) ? offices : []   // ✅ ensures it’s always an array
}


const handleTagsSave = (criteriaId, updatedCriteria) => {
  const index = criteriaList.value.findIndex(c => c.id === criteriaId)
  if (index !== -1) {
    // Merge instead of replace
    criteriaList.value[index] = {
      ...criteriaList.value[index],  // keep old fields (like e_requirements)
      ...updatedCriteria             // update only changed fields
    }
  }

  // update tags map
  selectedTagsMap.value[criteriaId] = mapCriteriaToTags({
    ...criteriaList.value[index],
    ...updatedCriteria
  })
}

const handleOfficesSave = (criteriaId, updatedCriteria) => {
  const index = criteriaList.value.findIndex(c => c.id === criteriaId)
  if (index !== -1) {
    // merge instead of replace
    criteriaList.value[index] = {
      ...criteriaList.value[index],   // keep old fields
      ...updatedCriteria         // update only offices
    }
  }

  // update offices map (so UI refreshes immediately)
  selectedOfficesMap.value[criteriaId] = mapCriteriaToOffices({
    ...criteriaList.value[index],
    ...updatedCriteria
  })
}

const searchQuery = ref("")

// computed filtered list
const filteredCriteria = computed(() => {
  if (!searchQuery.value) return criteriaList.value
  return criteriaList.value.filter(c =>
    c.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    c.number.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    (c.description && c.description.toLowerCase().includes(searchQuery.value.toLowerCase()))
  )
})

const fetchCriterias = async () => {
  try {
    const res = await $api.get('/get-all-c')
    if (res.data.status === 200) {
      criteriaList.value = res.data.data

            criteriaList.value.forEach(criteria => {
        if (!selectedTagsMap.value[criteria.id]) {
          selectedTagsMap.value[criteria.id] = mapCriteriaToTags(criteria)
                  }

        if (!selectedOfficesMap.value[criteria.id]) {
          selectedOfficesMap.value[criteria.id] = mapCriteriaToOffices(criteria)
                  }
      })
    }
  } catch (error) {
    console.error('Error fetching criteria:', error)
  }
}

onMounted(() => {
  fetchCriterias()
})

const showDeleteModal = ref(false)

const deleteItem = (id) => {
  criteriaList.value = criteriaList.value.filter(c => c.id !== id)
  console.log('Item deleted!')
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
  