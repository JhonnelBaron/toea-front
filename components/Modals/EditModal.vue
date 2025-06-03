<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

      <!-- Modal Wrapper -->
      <div class="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto p-6 space-y-4 relative">
        <!-- Close Button -->
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-400 hover:text-black text-2xl leading-none">
          &times;
        </button>

        <!-- Title -->
        <h2 class="text-xl font-bold">Edit Criteria</h2>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <!-- Annex: 1/3 width -->
          <div class="md:col-span-1">
            <label class="block text-sm font-medium text-gray-700">Annex</label>
            <input
              type="text"
              v-model="annex"
              class="mt-1 w-full border rounded px-3 py-2 text-sm"
              placeholder="Enter Annex..."
            />
          </div>

          <!-- Title: 2/3 width -->
          <div class="md:col-span-3">
            <label class="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              v-model="title"
              class="mt-1 w-full border rounded px-3 py-2 text-sm"
              placeholder="Enter Title..."
            />
          </div>
        </div>


        <!-- Description -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Description (Optional)</label>
          <textarea type="text" v-model="description" class="mt-1 w-full border rounded px-3 py-2 text-sm" placeholder="Enter description..."></textarea>
        </div>

        <!-- Requirements -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Requirements</label>
          <div v-for="(req, index) in requirements" :key="index" class="flex items-center gap-2 mb-2">
            <input type="text" v-model="req.name" class="flex-1 border px-3 py-2 rounded text-sm" placeholder="Requirement" />
            <input type="number" v-model="req.score" class="w-24 border px-3 py-2 rounded text-sm" placeholder="Score" />
            <button @click="removeRequirement(index)" class="text-red-500 hover:text-red-700">&times;</button>
          </div>
          <button @click="addRequirement" class="mt-2 text-blue-500 hover:underline text-sm">+ Add Requirement</button>
        </div>

        <!-- Means of Verification -->
        <div>
          <label class="block text-sm font-medium text-gray-700">Means of Verification</label>
          <textarea v-model="verification" class="mt-1 w-full border rounded px-3 py-2 text-sm" rows="3" placeholder="Enter verification..."></textarea>
        </div>

        <!-- Save Button -->
        <div class="text-right">
          <button @click="saveCriteria" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm">Save</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close', 'save'])

const description = ref('')
const requirements = ref([{ name: '', score: '' }])
const verification = ref('')

const closeModal = () => emit('close')

const addRequirement = () => {
  requirements.value.push({ name: '', score: '' })
}

const removeRequirement = (index) => {
  requirements.value.splice(index, 1)
}

const saveCriteria = () => {
  const payload = {
    description: description.value,
    requirements: requirements.value,
    verification: verification.value,
  }
  emit('save', payload)
  closeModal()
}
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
/* Optional scrollbar hide (WebKit browsers only) */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-thumb {
  background-color: rgba(100, 100, 100, 0.3);
  border-radius: 3px;
}
</style>
