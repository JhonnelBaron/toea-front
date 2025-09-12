<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <!-- Modal Wrapper -->
      <div class="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto p-6 space-y-4 relative">
        <transition name="fade">
          <div
            v-if="showSuccess"
            class="absolute inset-0 bg-white/90 flex flex-col items-center justify-center rounded-lg z-10"
          >
            <div class="flex flex-col items-center space-y-2">
              <!-- Green Circle with Check -->
              <div class="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl shadow-md">
                ✓
              </div>
              <p class="text-green-700 text-lg font-semibold">User Added Successfully!</p>
            </div>
          </div>
        </transition>
        
        <!-- Close Button -->
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-400 hover:text-black text-2xl leading-none">
          &times;
        </button>

        <!-- Title -->
        <h2 class="text-xl font-bold">Add User</h2>

        <!-- First Name & Last Name -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-800">First Name</label>
            <input
              type="text"
              v-model="firstName"
              class="mt-1 w-full border rounded px-3 py-2 text-sm border-gray-300"
              placeholder="Enter first name..."
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-800">Last Name</label>
            <input
              type="text"
              v-model="lastName"
              class="mt-1 w-full border rounded px-3 py-2 text-sm border-gray-300"
              placeholder="Enter last name..."
            />
          </div>
        </div>

        <!-- Role -->
        <div>
          <label class="block text-sm font-medium text-gray-800">Role</label>
          <select v-model="role" class="mt-1 w-full border rounded px-3 py-2 text-sm border-gray-300" placeholder="Select a role...">
            <option disabled value="">Select a role...</option>
            <option>Admin</option>
            <option>Secretariat</option>
            <option>External Validator</option>
            <option>Executive Office Focal</option>
            <option>Nominee</option>
            <option>Regional Office</option>
          </select>
        </div>

        <!-- Office & Designation -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-800">Office</label>
            <input
              type="text"
              v-model="office"
              class="mt-1 w-full border rounded px-3 py-2 text-sm border-gray-300"
              placeholder="Enter office..."
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-800">Designation</label>
            <input
              type="text"
              v-model="designation"
              class="mt-1 w-full border rounded px-3 py-2 text-sm border-gray-300"
              placeholder="Enter designation..."
            />
          </div>
        </div>

        <!-- Email -->
        <div>
          <label class="block text-sm font-medium text-gray-800">Email</label>
          <input
            type="email"
            v-model="email"
            class="mt-1 w-full border rounded px-3 py-2 text-sm border-gray-300"
            placeholder="Enter email..."
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm font-medium text-gray-800">Password</label>
          <input
            type="password"
            v-model="password"
            class="mt-1 w-full border rounded px-3 py-2 text-sm border-gray-300"
            placeholder="Enter password..."
          />
        </div>

        <!-- Save Button -->
        <div class="text-right">
          <button
            @click="saveUser"
            :disabled="isSaving || !isFormValid"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <svg
              v-if="isSaving"
              class="animate-spin h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              />
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span>{{ isSaving ? 'Saving...' : 'Save' }}</span>
          </button>
        </div>

      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['close', 'save']);

// Form field state
const firstName = ref('');
const lastName = ref('');
const role = ref('nominee');
const office = ref('');
const designation = ref('');
const email = ref('');
const password = ref('');

const isSaving = ref(false);
const showSuccess = ref(false);

// Closes the modal and resets the form
const closeModal = () => {
  resetForm();
  emit('close');
};

// Resets all form fields to their initial state
const resetForm = () => {
  firstName.value = '';
  lastName.value = '';
  role.value = 'nominee'; // Set default role
  office.value = '';
  designation.value = '';
  email.value = '';
  password.value = '';
};

// Computed property to check if the form is valid before enabling the save button
const isFormValid = computed(() => {
  return (
    firstName.value.trim() !== '' &&
    lastName.value.trim() !== '' &&
    role.value.trim() !== '' &&
    office.value.trim() !== '' &&
    designation.value.trim() !== '' &&
    email.value.trim() !== '' &&
    password.value.trim() !== ''
  );
});

// Simulates a save action for a frontend-only application
const saveUser = async () => {
  isSaving.value = true;
  try {
    // Log the user data to the console instead of making an API call
    const userData = {
      firstName: firstName.value,
      lastName: lastName.value,
      role: role.value,
      office: office.value,
      designation: designation.value,
      email: email.value,
      password: password.value,
    };
    console.log('User data to be saved:', userData);

    // Simulate a successful save
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show the success message
    showSuccess.value = true;

    // Wait 1.5 seconds, then hide the message and close the modal
    setTimeout(() => {
      showSuccess.value = false;
      closeModal();
    }, 1500);

  } catch (error) {
    console.error('Failed to save user:', error);
  } finally {
    isSaving.value = false;
  }
};
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
