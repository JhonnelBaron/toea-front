<template>
  <!-- Main container for the button and modal -->
  <div class="p-2 flex items-center justify-center">
    <!-- The button that opens the modal -->
    <button
      @click="isModalOpen = true"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
    >
      + Add User
    </button>

    <!-- The AddUserModal component.
         `isOpen` is controlled by `isModalOpen`.
         `@close` and `@save` events are handled by functions in this component.
    -->
    <AddUserModal :isOpen="isModalOpen" @close="handleCloseModal" @save="handleSave" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Corrected import path
import AddUserModal from '../Modals/UserManagement/AddUser.vue'; 

// A reactive variable to control the modal's visibility
const isModalOpen = ref(false);

// Function to handle the close event from the modal
const handleCloseModal = () => {
  isModalOpen.value = false;
};

// Function to handle the save event from the modal.
// The `userData` parameter contains the user data that was "saved."
const handleSave = (userData) => {
  console.log('User data received from modal:', userData);
  // Dito mo ilalagay ang logic para mag-update ng user list o iba pang actions
};
</script>

