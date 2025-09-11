<script setup>
import { ref, watch } from 'vue'
import IncOfficeModal from '../Modals/IncOfficeModal.vue'

const props = defineProps({
  initialTags: Array,
  criteriaId: Number,       // 👈 link to criteria
  activeTab: String,        // 👈 tab reference
})

const emit = defineEmits(['save'])

const showModal = ref(false)
const tags = ref([])

watch(() => props.initialTags, (newTags) => {
  tags.value = Array.isArray(newTags) ? [...newTags] : []
}, { immediate: true })

const handleSave = (data) => {
  emit('save', data)
  showModal.value = false
}
</script>

<template>
  <!-- Button -->
  <button @click="showModal = true">
    <img src="/images/personedit.svg" alt="Office" class="w-8 h-8 pl-2" />
  </button>

  <!-- Modal -->
  <IncOfficeModal
    :isOpen="showModal"
    :criteriaId="criteriaId"
    :activeTab="activeTab"
    @close="showModal = false"
    @save="handleSave"
    :initialTags="tags"
  />
</template>
