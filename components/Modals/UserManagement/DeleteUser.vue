<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm relative">
        <!-- Close Button -->
        <button @click="$emit('close')" class="absolute top-2 right-2 text-gray-400 hover:text-black text-2xl leading-none">
          &times;
        </button>

        <!-- Title and Message -->
        <div class="text-center">
          <svg
            class="mx-auto h-12 w-12 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.382 17c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <h3 class="mt-2 text-lg font-medium text-gray-900">Are you sure?</h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">
              Are you sure to delete this user? This action cannot be undone.
            </p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-5 sm:mt-6 flex justify-end space-x-2">
          <button
            @click="$emit('confirm')"
            class="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none sm:w-auto sm:text-sm"
          >
            Delete
          </button>
          <button
            @click="$emit('close')"
            class="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:w-auto sm:text-sm"
          >
          Cancel
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['close', 'confirm']);
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
