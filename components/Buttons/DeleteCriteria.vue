<template>
  <button @click="showModal = true">
    <img src="/images/trashbin.svg" alt="Delete" class="w-7 h-7 pl-2" />
  </button>

  <DeleteModal 
    :isOpen="showModal"
    @close="showModal = false"
    @save="handleSave"
  />
</template>

<script setup>
import { ref } from 'vue'
import DeleteModal from '../Modals/DeleteModal.vue'

const props = defineProps({
  activeTab: {
    type: String,
    required: true
  },
  criteriaId: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['deleted'])
const showModal = ref(false)

const { $api } = useNuxtApp()

const handleSave = async () => {
  try {
    // 👇 build the endpoint dynamically
    const res = await $api.post(`/delete-${props.activeTab.toLowerCase()}/${props.criteriaId}`)

    if (res.data.status === 200) {
      emit('deleted', props.criteriaId)
    }
  } catch (err) {
    console.error("Delete failed:", err)
  } finally {
    showModal.value = false
  }
}
</script>
