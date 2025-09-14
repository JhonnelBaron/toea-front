<template>
  <div>
    <!-- The button to open the modal -->
    <button @click="openEdit(user.id)" class="px-3 py-1 text-sm text-blue-600 border border-blue-500 rounded-lg hover:bg-blue-50 transition">
      Edit Role
    </button>

    <!-- The Edit Role Modal component -->
    <EditRole :is-open="isModalOpen" :user-data="selectedUser" @close="handleCloseModal" @save="handleSave" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import EditRole from '../Modals/UserManagement/EditUser.vue'; // Corrected path
const { $api } = useNuxtApp()

// props to receive the user from parent
const props = defineProps({
  user: { type: Object, required: true }
})

// re-emit save to parent
const emit = defineEmits(['save'])

// A reactive variable to control the modal's visibility
const isModalOpen = ref(false);
const selectedUser = ref(null)
const openEdit = async (id) => {
  const res = await $api.get(`/users/${id}`) // GET /users/{id}
  selectedUser.value = res.data.data
  isModalOpen.value = true
}

// Function to handle the 'close' event from the modal
const handleCloseModal = () => {
  isModalOpen.value = false;
};

// Function to handle the 'save' event from the modal
// ✅ re-emit save to parent
const handleSave = (updatedUser) => {
  emit('save', updatedUser)
  isModalOpen.value = false
}
</script>

<style scoped>
/* You can add component-specific styles here if needed */
</style>
