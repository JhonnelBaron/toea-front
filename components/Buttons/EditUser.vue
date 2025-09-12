<template>
  <div>
    <!-- The button to open the modal -->
    <button @click="isModalOpen = true" class="px-3 py-1 text-sm text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-50 transition">
      Edit Role
    </button>

    <!-- The Edit Role Modal component -->
    <EditRole :is-open="isModalOpen" @close="handleCloseModal" @save="handleSave" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EditRole from '../Modals/UserManagement/EditUser.vue'; // Corrected path

// A reactive variable to control the modal's visibility
const isModalOpen = ref(false);

// Function to handle the 'close' event from the modal
const handleCloseModal = () => {
  isModalOpen.value = false;
};

// Function to handle the 'save' event from the modal
const handleSave = (userData) => {
  console.log('Role saved successfully:', userData);
  // Add your logic here to update the user data or perform other actions
  isModalOpen.value = false; // Close the modal after a successful save
};
</script>

<style scoped>
/* You can add component-specific styles here if needed */
</style>
