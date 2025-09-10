<template>
  <transition name="fade">
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div class="bg-white w-full max-w-4xl rounded-lg p-4 shadow-lg space-y-4">
      <h2 class="text-lg font-bold">Edit Tags</h2>

      <div class="grid grid-cols-2 gap-4">
        <!-- Available Tags -->
        <div>
          <h3 class="font-medium mb-2">Available Tags</h3>
          <draggable v-model="availableTags" itemKey="element" group="tags" class="min-h-[150px] border p-3 rounded bg-blue-200 space-y-2">
            <template #item="{ element }">
              <div
                :class="[
                  'p-2 border rounded cursor-pointer select-none text-sm',
                  selectedLeftTags.includes(element) ? 'bg-blue-400 border-blue-800' : 'bg-white hover:bg-gray-100'
                ]"
                @click="toggleLeftTag(element)"
              >
                {{ element }}
              </div>
            </template>
          </draggable>
        </div>

        <!-- Selected Tags -->
        <div>
          <h3 class="font-medium mb-2">Selected Tags</h3>
          <draggable v-model="selectedTags" group="tags" itemKey="element" class="min-h-[150px] border p-3 rounded bg-green-200 space-y-2">
            <template #item="{ element }">
              <div
                :class="[
                  'p-2 border rounded cursor-pointer select-none',
                  selectedRightTags.includes(element) ? 'bg-blue-100 border-blue-400' : 'bg-white hover:bg-gray-100'
                ]"
                @click="toggleRightTag(element)"
              >
                {{ element }}
              </div>
            </template>
          </draggable>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex justify-center items-center gap-4">
        <button
          @click="moveSelectedToRight"
          class="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded text-sm"
        >
          Move →
        </button>
        <button
          @click="moveSelectedToLeft"
          class="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-sm"
        >
          ← Move
        </button>
      </div>

      <!-- Save Button -->
      <div class="text-right pt-4">
        <button @click="saveTags" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Save
        </button>
      </div>
    </div>
  </div>
</transition>
</template>

<script setup>
import { ref, watch } from 'vue'
import draggable from 'vuedraggable'
const { $api } = useNuxtApp()

const props = defineProps({
  isOpen: Boolean,
  initialTags: Array,
    activeTab: {
    type: String,
    required: true
  },
  criteriaId: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['close', 'save'])

const tagToFieldMap = {
  'BRO - Small': 'bro_small',
  'BRO - Medium': 'bro_medium',
  'BRO - Large': 'bro_large',
  'GP - Small': 'gp_small',
  'GP - Medium': 'gp_medium',
  'GP - Large': 'gp_large',
  'BTI - RTC/STC': 'bti_rtcstc',
  'BTI - PTC': 'bti_ptcdtc',
  'BTI - TAS': 'bti_tas',
}

const availableTags = ref([
  'BRO - Small',
  'BRO - Medium',
  'BRO - Large',
  'GP - Small',
  'GP - Medium',
  'GP - Large',
  'BTI - RTC/STC',
  'BTI - PTC',
  'BTI - TAS',
])

const selectedTags = ref([])
watch(
  () => props.initialTags,
  (newVal) => {
    selectedTags.value = [...newVal]
    availableTags.value = availableTags.value.filter(tag => !newVal.includes(tag))
  },
  { immediate: true }
)

const selectedLeftTags = ref([])
const selectedRightTags = ref([])

const toggleLeftTag = (tag) => {
  selectedLeftTags.value.includes(tag)
    ? selectedLeftTags.value = selectedLeftTags.value.filter(t => t !== tag)
    : selectedLeftTags.value.push(tag)
}

const toggleRightTag = (tag) => {
  selectedRightTags.value.includes(tag)
    ? selectedRightTags.value = selectedRightTags.value.filter(t => t !== tag)
    : selectedRightTags.value.push(tag)
}

const moveSelectedToRight = () => {
  selectedTags.value.push(...selectedLeftTags.value)
  availableTags.value = availableTags.value.filter(tag => !selectedLeftTags.value.includes(tag))
  selectedLeftTags.value = []
}

const moveSelectedToLeft = () => {
  availableTags.value.push(...selectedRightTags.value)
  selectedTags.value = selectedTags.value.filter(tag => !selectedRightTags.value.includes(tag))
  selectedRightTags.value = []
}

const closeModal = () => emit('close')
const getTagApiEndpoint = (id) => {
  switch (props.activeTab) {
    case 'A':
      return `/tags-a/${id}`
    case 'B':
      return `/tags-b/${id}`
    case 'C':
      return `/tags-c/${id}`
    case 'D':
      return `/tags-d/${id}`
    case 'E':
      return `/tags-e/${id}`
    default:
      return `/tags-a/${id}` // fallback
  }
}
const isSavingTags = ref(false)

const saveTags = async () => {
  isSavingTags.value = true
  try {
    // Map selected tags to DB fields
    const fields = selectedTags.value.map(tag => tagToFieldMap[tag]).filter(Boolean)

    // Get correct API endpoint based on activeTab
    const endpoint = getTagApiEndpoint(props.criteriaId)

    const response = await $api.post(endpoint, { fields })

    console.log('Tags updated successfully:', response.data)

    emit('save', response.data.data)

    // ✅ Close modal after short delay
    setTimeout(() => {
      closeModal()
    }, 500)
  } catch (error) {
    console.error('Failed to save tags:', error)
  } finally {
    isSavingTags.value = false
  }
}

// const saveTags = () => {
//   emit('save', selectedTags.value)
//   closeModal()
// }
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
