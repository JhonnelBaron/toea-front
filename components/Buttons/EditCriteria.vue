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

const emit = defineEmits(['save'])
const showModal = ref(false)

const handleSave = (data) => {
  console.log('Saved data:', data)
  emit('save', data)
  showModal.value = false
}
</script>