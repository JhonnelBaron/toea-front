<!-- components/Buttons/EditCriteria.vue -->
<template>
  <button @click="showModal = true">
    <img src="/images/editIcon.svg" alt="Office" class="w-6 h-6 pl-2" />
  </button>

  <EditModal
    :isOpen="showModal"
    :activeTab="activeTab"
    :criteriaId="criteriaId"
    @close="showModal = false"
    @save="handleSave"
  />
</template>

<script setup>
import { ref } from 'vue'
import EditModal from '../Modals/EditModal.vue'

const props = defineProps({
  activeTab: String,
  criteriaId: Number
})

const showModal = ref(false)

const handleSave = (data) => {
  console.log('Saved data:', data)
  showModal.value = false
}
</script>

<!-- 
<template>
  <div>
    <button @click="showModal = true" class="p-2 bg-blue-500 text-white rounded-full flex items-center text-sm hover:bg-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
      </svg>
      Add Criteria
    </button>

    <AddModal :isOpen="showModal" @close="showModal = false" @save="handleSave" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AddModal from '../Modals/AddModal.vue'

const showModal = ref(false)

const handleSave = (data) => {
  console.log('Saved data:', data)
}
</script> -->
