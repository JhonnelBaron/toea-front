<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="w-full max-w-4xl space-y-4 rounded-lg bg-white p-4 shadow-lg">
        <h2 class="text-lg font-bold">Edit Executive Offices</h2>

        <div class="grid grid-cols-2 gap-4">
          <div>
            <h3 class="mb-2 font-medium">Available Offices</h3>
            <draggable
              v-model="availableOffices"
              itemKey="element"
              group="offices"
              class="min-h-[150px] space-y-2 rounded border bg-blue-200 p-3"
            >
              <template #item="{ element }">
                <div
                  :class="[
                    'cursor-pointer select-none rounded border p-2 text-sm',
                    selectedLeftOffices.includes(element)
                      ? 'border-blue-800 bg-blue-400'
                      : 'bg-white hover:bg-gray-100',
                  ]"
                  @click="toggleLeftOffice(element)"
                >
                  {{ element }}
                </div>
              </template>
            </draggable>
          </div>

          <div>
            <h3 class="mb-2 font-medium">Selected Offices</h3>
            <draggable
              v-model="selectedOffices"
              group="offices"
              itemKey="element"
              class="min-h-[150px] space-y-2 rounded border bg-green-200 p-3"
            >
              <template #item="{ element }">
                <div
                  :class="[
                    'cursor-pointer select-none rounded border p-2',
                    selectedRightOffices.includes(element)
                      ? 'border-blue-400 bg-blue-100'
                      : 'bg-white hover:bg-gray-100',
                  ]"
                  @click="toggleRightOffice(element)"
                >
                  {{ element }}
                </div>
              </template>
            </draggable>
          </div>
        </div>

        <div class="flex items-center justify-center gap-4">
          <button
            @click="moveSelectedToRight"
            class="rounded bg-green-500 px-3 py-1 text-sm text-white hover:bg-green-600"
          >
            Move →
          </button>
          <button
            @click="moveSelectedToLeft"
            class="rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
          >
            ← Move
          </button>
        </div>

      <!-- Save Button -->
      <div class="text-right pt-4">
        <button @click="saveOffices" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
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
  initialOffices: Array,
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

const officesToFieldMap = {
  'Administrative Service' : 'as',
  'Legal Division' : 'legal',
  'Certification Office' : 'co',
  'Financial and Management Service' : 'fms',
  'National Institute for Technical Education and Skills Development' : 'nitesd',
  'Public Information and Assistance Division' : 'piad',
  'Planning Office': 'planning',
  'Partnership and Linkages Office' : 'plo',
  'Regional Operations Management Office' : 'romo',
  'Information and Communication Office' : 'icto',
  'World Skills' : 'ws',
}

const allOffices = [
  'Administrative Service',
  'Legal Division',
  'Certification Office',
  'Financial and Management Service',
  'National Institute for Technical Education and Skills Development',
  'Public Information and Assistance Division',
  'Planning Office',
  'Partnership and Linkages Office',
  'Regional Operations Management Office',
  'Information and Communication Office',
  'World Skills',
]

const availableOffices = ref([...allOffices])
const selectedOffices = ref([])

// Watch for changes in initialOffices prop to populate the lists
watch(
  () => props.initialOffices,
  (newVal) => {
    selectedOffices.value = [...(newVal || [])]
    availableOffices.value = allOffices.filter(
      (office) => !selectedOffices.value.includes(office),
    )
  },
  { immediate: true },
)

const selectedLeftOffices = ref([])
const selectedRightOffices = ref([])

const toggleLeftOffice = (office) => {
  if (selectedLeftOffices.value.includes(office)) {
    selectedLeftOffices.value = selectedLeftOffices.value.filter((o) => o !== office)
  } else {
    selectedLeftOffices.value.push(office)
  }
}

const toggleRightOffice = (office) => {
  if (selectedRightOffices.value.includes(office)) {
    selectedRightOffices.value = selectedRightOffices.value.filter((o) => o !== office)
  } else {
    selectedRightOffices.value.push(office)
  }
}

const moveSelectedToRight = () => {
  selectedOffices.value.push(...selectedLeftOffices.value)
  availableOffices.value = availableOffices.value.filter(
    (office) => !selectedLeftOffices.value.includes(office),
  )
  selectedLeftOffices.value = []
}

const moveSelectedToLeft = () => {
  availableOffices.value.push(...selectedRightOffices.value)
  selectedOffices.value = selectedOffices.value.filter(
    (office) => !selectedRightOffices.value.includes(office),
  )
  selectedRightOffices.value = []
}

const closeModal = () => emit('close')
const getOfficesApiEndpoint = (id) => {
  switch (props.activeTab) {
    case 'A':
      return `/execute-a/${id}`
    case 'B':
      return `/execute-b/${id}`
    case 'C':
      return `/execute-c/${id}`
    case 'D':
      return `/execute-d/${id}`
    case 'E':
      return `/execute-e/${id}`
    default:
      return `/execute-a/${id}` // fallback
  }
}
const isSavingOffices = ref(false)

const saveOffices = async () => {
  isSavingOffices.value = true
  try {
    // Map selected tags to DB fields
    const fields = selectedOffices.value.map(tag => officesToFieldMap[tag]).filter(Boolean)

    // Get correct API endpoint based on activeTab
    const endpoint = getOfficesApiEndpoint(props.criteriaId)

    const response = await $api.post(endpoint, { fields })

    console.log('Executive Offices assigned updated successfully:', response.data)

    emit('save', response.data.data)

    // ✅ Close modal after short delay
    setTimeout(() => {
      closeModal()
    }, 500)
  } catch (error) {
    console.error('Failed to save offices:', error)
  } finally {
    isSavingOffices.value = false
  }
}



// const saveOffices = () => {
//   emit('save', selectedOffices.value)
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