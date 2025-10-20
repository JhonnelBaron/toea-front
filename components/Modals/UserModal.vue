<template>
  <div class="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
    <!-- Modal container with blue background -->
    <div class="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl shadow-2xl p-6 w-full max-w-6xl">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6 border-b border-blue-300 pb-2">
        <h2 class="text-lg font-semibold text-white">{{ title }}</h2>
        <button 
          @click="$emit('close')" 
          class="text-white hover:text-gray-200 text-2xl leading-none"
        >
          &times;
        </button>
      </div>

      <!-- Grid Cards (4 per row on xl screens) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-h-[70vh] overflow-y-auto">
        <div 
          v-for="user in users" 
          :key="user.id" 
          class="p-4 bg-white rounded-lg shadow hover:shadow-lg transition"
          @click="goToUserDashboard(user.id)"
        >
          <p class="text-sm font-semibold text-gray-800">
            {{ user.first_name }} {{ user.last_name }}
          </p>
          <div class="flex justify-between items-center mt-2">
            <!-- Example percentage field -->
            <p class="text-sm font-medium text-blue-600">
              {{ user.overall_completion_rate ?? '0.00' }}%
            </p>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <p v-if="users.length === 0" class="text-sm text-blue-100 text-center mt-4">
        No users found.
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const goToUserDashboard = (id) => {
  router.push(`/admin/${id}`)
}

defineProps({
  title: String,
  users: {
    type: Array,
    default: () => []
  }
})

defineEmits(['close'])
</script>
