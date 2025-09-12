<template>
  <div>
    <!-- Button to open the delete confirmation modal -->
    <button @click="isModalOpen = true" class="px-3 py-1 text-sm text-red-600 border border-red-500 rounded-lg hover:bg-red-50 transition">
      Delete
    </button>

    <!-- The Confirmation Modal -->
    <!-- Tiyakin na ang pangalan dito ay tumutugma sa imported component -->
    <DeleteUser
      :is-open="isModalOpen"
      @close="isModalOpen = false"
      @confirm="handleDelete"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
// Ang import name ay dapat magtugma sa pangalan ng file.
// Import the modal from its location, which is also named DeleteUser.vue.
import DeleteUser from '../Modals/UserManagement/DeleteUser.vue'; 

const isModalOpen = ref(false);

const handleDelete = () => {
  // Replace this with your actual delete logic
  console.log('User deletion confirmed!');
  isModalOpen.value = false;
};
</script>
