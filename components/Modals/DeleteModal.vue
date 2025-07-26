<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl w-full max-w-sm p-6 text-center space-y-4">
        <h2 class="text-lg font-semibold text-gray-800">Are you sure you want to delete this?</h2>
        
        <div class="flex justify-center gap-4 mt-6">
          <button
            @click="$emit('save')"
            class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Yes
          </button>
          <button
            @click="$emit('close')"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

defineEmits(['close', 'save'])
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
