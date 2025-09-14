<template>
  <div class="flex h-screen bg-blue-200">
    <SidebarAdmin />

    <div class="flex-1 bg-blue-200 mt-4 mr-4 mb-4 flex">
      <section class="flex-1 bg-gray-100 rounded-lg shadow-lg flex flex-col p-4 pt-10 border-b-4 border-blue-600">
         <!-- Header -->
        <div class="flex items-center justify-between mb-4">
          <div>
            <h1 class="text-xl font-semibold text-gray-800">User Management</h1>
            <p class="text-sm text-gray-500">
              Manage user roles, edit information, reset passwords here.
            </p>
          </div>
          <AddUser />
        </div>

        <!-- Filters -->
<div class="flex flex-wrap gap-4 mb-6 items-end">
  <!-- Search -->
  <div class="flex flex-col flex-1">
    <label class="text-xs font-medium text-gray-500 mb-1">Search</label>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Search by name or email..."
      class="px-3 py-2 rounded-xl text-sm border border-gray-200 bg-gray-50 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
    />
  </div>

  <!-- User type -->
  <div class="flex flex-col w-44">
    <label class="text-xs font-medium text-gray-500 mb-1">User Type</label>
    <select
      v-model="filters.user_type"
      class="px-3 py-2 rounded-xl text-sm border border-gray-200 bg-gray-50 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
    >
      <option value="">All</option>
      <option value="admin">Admin</option>
      <option value="staff">Staff</option>
      <option value="nominee">Nominee</option>
    </select>
  </div>

  <!-- Nominee type -->
  <div class="flex flex-col w-44">
    <label class="text-xs font-medium text-gray-500 mb-1">Nominee Type</label>
    <select
      v-model="filters.nominee_type"
      class="px-3 py-2 rounded-xl text-sm border border-gray-200 bg-gray-50 focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
    >
      <option value="">All</option>
      <option value="BRO">BRO</option>
      <option value="GP">GP</option>
      <option value="BTI">BTI</option>
    </select>
  </div>

  <!-- Nominee category -->
  <div class="flex flex-col w-48">
    <label class="text-xs font-medium text-gray-500 mb-1">Category</label>
    <select
      v-model="filters.nominee_category"
      class="px-3 py-2 rounded-xl text-sm border border-gray-200 bg-gray-50 focus:border-blue-500 focus:ring focus:ring-blue-200 transition disabled:bg-gray-100 disabled:text-gray-400"
      :disabled="!filters.nominee_type"
    >
      <option value="">All</option>
      <option
        v-for="opt in categoryOptions"
        :key="opt.value"
        :value="opt.value"
      >
        {{ opt.label }}
      </option>
    </select>
  </div>
</div>

        <section class="flex-1 bg-white flex flex-col rounded-2xl shadow-lg overflow-y-auto border-b-2 border-green-600">
          <div class="p-4">

            <!-- Loop users -->
            <div
              v-for="user in filteredUsers"
              :key="user.id"
              class="flex items-center p-4 bg-white border border-gray-300 rounded-xl shadow-md w-full space-x-4 mb-2"
            >
              <img src="/images/profile.png" alt="User" class="w-16 h-16 rounded-full object-cover border" />

              <div class="flex-1">
                <h2 class="text-lg font-semibold">{{ user.first_name }} {{ user.last_name }}</h2>
                  <!-- Show role -->


                <p class="text-sm text-gray-500 flex flex-wrap items-center gap-1">
                  {{ user.designation }} • 
                  <span class="capitalize">{{ user.user_type }}</span>

                  <!-- Show nominee badges if nominee -->
                  <template v-if="user.user_type === 'nominee' && user.nominee">
                    <span
                      class="ml-2 px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-medium"
                    >
                      {{ user.nominee.nominee_type }} ({{ user.nominee.nominee_category }})
                    </span>
                  </template>
                </p>
                <p class="text-sm text-gray-400 italic">{{ user.email }}</p>
              </div>
              <!-- <div class="flex items-center space-x-2">
                <span class="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                  {{ user.user_type }}
                </span>
              </div> -->

              <div class="flex items-center space-x-2">
                <EditUser :user="user" @save="fetchUsers"/>
                <button
                  @click="openDeleteModal(user.id)"
                  class="px-3 py-1 text-sm text-red-600 border border-red-500 rounded-lg hover:bg-red-50 transition"
                >
                  Delete
                </button>

              </div>
            </div>

          </div>
        </section>
<DeleteUser
  :is-open="isDeleteOpen"
  :user-id="selectedUserId"
  @close="isDeleteOpen = false"
  @confirm="fetchUsers"
/>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SidebarAdmin from '~/components/SidebarAdmin.vue'
import AddUser from '~/components/Buttons/AddUser.vue'
import DeleteUser from '~/components/Modals/UserManagement/DeleteUser.vue'
import EditUser from '~/components/Buttons/EditUser.vue'

const users = ref([])
const searchQuery = ref("");
const filters = ref({
  user_type: "",
  nominee_type: "",
  nominee_category: "",
});
const isDeleteOpen = ref(false)
const selectedUserId = ref(null)
const openDeleteModal = (id) => {
  selectedUserId.value = id
  isDeleteOpen.value = true
}


const { $api } = useNuxtApp();
const fetchUsers = async () => {
  try {
    const res = await $api.get('/users') // ✅ Nuxt auto proxy (if backend is connected)
    users.value = res.data.data // adjust based on your API response
  } catch (err) {
    console.error('Failed to fetch users:', err)
  }
}

const categoryOptions = computed(() => {
  if (filters.value.nominee_type === "GP" || filters.value.nominee_type === "BRO") {
    return [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ];
  } else if (filters.value.nominee_type === "BTI") {
    return [
      { value: "ptc-dtc", label: "PTC-DTC" },
      { value: "rtc-stc", label: "RTC-STC" },
      { value: "tas", label: "TAS" },
    ];
  } else {
    return [];
  }
});


// Computed filter
const filteredUsers = computed(() => {
  return users.value.filter((user) => {
    const query = searchQuery.value.toLowerCase().trim();

    // Combine full name
    const fullName = `${user.first_name || ""} ${user.last_name || ""}`.toLowerCase();
    // Search by name/email
    const matchesSearch =
      fullName.includes(query) ||
      user.first_name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.last_name?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchQuery.value.toLowerCase());

    // User type filter
    const matchesUserType =
      !filters.value.user_type || user.user_type === filters.value.user_type;

    // Nominee type filter
    const matchesNomineeType =
      !filters.value.nominee_type ||
      (user.nominee && user.nominee.nominee_type === filters.value.nominee_type);

    // Nominee category filter
    const matchesNomineeCategory =
      !filters.value.nominee_category ||
      (user.nominee && user.nominee.nominee_category === filters.value.nominee_category);

    return (
      matchesSearch && matchesUserType && matchesNomineeType && matchesNomineeCategory
    );
  });
});
const openEdit = async (id) => {
  const { data } = await $api.get(`/users/${id}`);
  selectedUser.value = data;   // this triggers the watch
  isModalOpen.value = true;
};

// load on mount
onMounted(() => {
  fetchUsers()
})
</script>