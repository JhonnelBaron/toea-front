<!-- components/Buttons/EditCriteria.vue -->
<template>
  <button @click="showModal = true">
    <img src="/images/trashbin.svg" alt="Office" class="w-7 h-7 pl-2" />
  </button>

  <DeleteModal 
   :isOpen="showModal"
    @close="showModal = false"
    @save="handleSave"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DeleteModal from '../Modals/DeleteModal.vue'

const showModal = ref(false)

const handleSave = () => {
  console.log()
  showModal.value = false
}
</script>
