<script setup>
import { ref, watch } from 'vue'
import CategoryTags from '../Modals/CategoryTags.vue'

const props = defineProps({
  initialTags: Array,
})

const emit = defineEmits(['save'])

const showModal = ref(false)
const tags = ref([])

watch(() => props.initialTags, (newTags) => {
  tags.value = [...newTags]
}, { immediate: true })

const handleSave = (data) => {
  emit('save', data)
  showModal.value = false
}
</script>

<template>
  <button @click="showModal = true">
    <img src="/images/tagsIcon.svg" alt="Office" class="w-8 h-8 pl-2" />
  </button>

  <CategoryTags
    :isOpen="showModal"
    @close="showModal = false"
    @save="handleSave"
    :initialTags="tags"
  />
</template>
