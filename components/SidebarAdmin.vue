<template>
 <!-- Floating Sidebar -->
 <div class="w-72 h-screen bg-blue-200 shadow-lg p-4 flex flex-col justify-between">
  <!-- Top Section (Profile) -->
  <div class="bg-white rounded-2xl shadow-lg p-3 flex flex-col items-center">
    <img
      src="/images/profile.png"
      alt="Profile"
      class="w-24 h-24 rounded-full object-cover border-4 border-gray-300 mb-4"
    />
    <h2 class="text-xl font-bold text-gray-800">George A. Nuñez</h2>
    <p class="text-sm text-gray-600">Project Support Staff II</p>
    <p class="text-xs text-gray-500">TESDA Central Office</p>
  </div>

  <!-- Bottom Section (Tabs + Logout) -->
  <div class="bg-white rounded-2xl shadow-lg p-4 flex flex-col h-full flex-grow mt-4">
    <div class="flex flex-col gap-3 mt-6">
      <NuxtLink to="/">
        <button class="w-full text-left px-4 py-2 rounded-lg bg-blue-100 text-gray-700 font-medium flex items-center gap-3">
          <img src="/images/usermanagementIcon.svg" alt="Users" class="w-5 h-5" />
          Home
        </button>
      </NuxtLink>
  <!-- Main Tab -->
   <NuxtLink to="/criteria">
    <button class="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-100 text-gray-700 font-medium flex items-center gap-3">
      <img src="/images/homeIcon.svg" alt="TOEA" class="w-5 h-5" />
      TOEA Criteria
    </button>
  </NuxtLink>
  <!-- Sub-tabs -->
  <div class="flex flex-col gap-2 pl-6">
    <button class="text-left px-3 py-2 rounded-md hover:bg-gray-300 text-gray-600 text-sm flex items-center gap-2">
      <img src="/images/broIcon.svg" alt="Office" class="w-4 h-4" />
      Best Regional Office
    </button>
    <button class="text-left px-3 py-2 rounded-md hover:bg-gray-300 text-gray-600 text-sm flex items-center gap-2">
      <img src="/images/gpIcon.svg" alt="Province" class="w-4 h-4" />
      Galing Probinsya
    </button>
    <button class="text-left px-3 py-2 rounded-md hover:bg-gray-300 text-gray-600 text-sm flex items-center gap-2">
      <img src="/images/bestIcon.svg" alt="Training" class="w-4 h-4" />
      Best Training Institution
    </button>
  </div>

  <!-- Other Main Tabs -->
  <NuxtLink to="usermanagement">
    <button class="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-100 text-gray-700 font-medium flex items-center gap-3">
      <img src="/images/usermanagementIcon.svg" alt="Users" class="w-5 h-5" />
      User Management
    </button>
  </NuxtLink>
  
  <NuxtLink to="settings">
    <button class="w-full text-left px-4 py-2 rounded-lg hover:bg-blue-100 text-gray-700 font-medium flex items-center gap-3">
      <img src="/images/settingsIcon.svg" alt="Settings" class="w-5 h-5" />
      Settings
    </button>
  </NuxtLink>
</div>



    <!-- Spacer pushes logout to the bottom -->
    <div class="flex-grow"></div>

    <!-- Logout -->
  <button
    @click="handleLogout"
    class="w-24 text-center px-4 py-1 rounded-lg bg-blue-600 text-white hover:bg-red-600 hover:text-white font-medium"
  >
    Logout
  </button>
  </div>

</div>

</template>

<script setup>
const router = useRouter()
const { $api } = useNuxtApp()

const handleLogout = async () => {
  try {
    await $api.post('/logout') // Assumes Axios baseURL is set
    localStorage.removeItem('auth_token') // or any auth data you store
    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>

<style>

</style>