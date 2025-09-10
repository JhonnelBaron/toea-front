<template>
  <!-- Floating Sidebar -->
  <div class="w-60 h-screen bg-blue-200 shadow-lg p-4 flex flex-col justify-between">
    <!-- Logging Out Overlay -->
<transition name="fade">
  <div
    v-if="isLoggingOut"
    class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
  >
    <div class="bg-white px-6 py-4 rounded-lg flex items-center gap-3 shadow-lg">
      <svg
        class="animate-spin h-5 w-5 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
      <span class="text-gray-800 font-medium', text-xs">Logging out...</span>
    </div>
  </div>
</transition>

    <!-- Top Section (Profile) -->
    <div class="bg-white rounded-2xl shadow-lg p-3 flex flex-col items-center border-b-4 border-blue-600">
      <img
        src="/images/profile.png"
        alt="Profile"
        class="w-24 h-24 rounded-full object-cover border-4 border-gray-300 mb-4"
      />
      <h2 class="text-xm font-bold text-gray-800 font-sans">   {{ user ? `${user.first_name} ${user.last_name}` : 'Loading...' }}</h2>
      <p class="text-xs text-gray-500">{{ user?.designation }}</p>
      <p class="text-xs text-gray-600">{{ user?.office }}</p>
    </div>

    <!-- Bottom Section (Tabs + Logout) -->
    <div class="bg-white rounded-2xl shadow-lg p-3 flex flex-col h-full flex-grow mt-4 border-b-4 border-blue-600">
      <div class="flex flex-col gap-3 mt-3">
        <!-- Home -->
        <NuxtLink to="/">
          <button
            :class="[
              'w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-medium text-xs',
              isActive('/') ? 'bg-blue-100 text-gray-800 border-b-3 border-amber-600' : 'hover:bg-blue-200 text-gray-700'
            ]"
          >
            <img src="/images/usermanagementIcon.svg" alt="Users" class="w-5 h-5" />
            Home
          </button>
        </NuxtLink>

        <!-- TOEA Criteria -->
        <NuxtLink to="/criteria">
          <button
            :class="[
              'w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-medium text-xs',
              isActive('/criteria') ? 'bg-blue-100 text-gray-800 border-b-3 border-amber-600' : 'hover:bg-blue-200 text-gray-700'
            ]"
          >
            <img src="/images/homeIcon.svg" alt="TOEA" class="w-5 h-5" />
            TOEA Criteria
          </button>
        </NuxtLink>

        <!-- Sub-tabs -->
        <div class="flex flex-col gap-2 pl-6">
          <NuxtLink to="/criteria/BRO">
            <button
              :class="[
                'w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-medium text-xs',
                isActive('/criteria/BRO') ? 'bg-blue-100 text-gray-800 border-b-3 border-amber-600' : 'hover:bg-blue-200 text-gray-700'
              ]"
            >
              <img src="/images/broIcon.svg" alt="Office" class="w-4 h-4" />
              Best Regional Office
            </button>
          </NuxtLink>

          <NuxtLink to="/criteria/GP">
            <button
              :class="[
                'w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-medium text-xs',
                isActive('/criteria/GP') ? 'bg-blue-100 text-gray-800 border-b-3 border-amber-600' : 'hover:bg-blue-200 text-gray-700'
              ]"
            >
              <img src="/images/gpIcon.svg" alt="Office" class="w-4 h-4" />
              Galing Probinsya
            </button>
          </NuxtLink>

          <NuxtLink to="/criteria/BTI">
            <button
              :class="[
                'w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-medium text-xs',
                isActive('/criteria/BTI') ? 'bg-blue-100 text-gray-800 border-b-3 border-amber-600' : 'hover:bg-blue-200 text-gray-700'
              ]"
            >
              <img src="/images/bestIcon.svg" alt="Office" class="w-4 h-4" />
              Best Training Institution
            </button>
          </NuxtLink>  

        </div>

        <!-- User Management -->
        <NuxtLink to="/usermanagement">
          <button
            :class="[
              'w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-medium text-xs',
              isActive('/usermanagement') ? 'bg-blue-100 text-gray-800 border-b-3 border-amber-600' : 'hover:bg-blue-200 text-gray-700'
            ]"
          >
            <img src="/images/usermanagementIcon.svg" alt="Users" class="w-5 h-5" />
            User Management
          </button>
        </NuxtLink>

        <!-- Settings -->
        <NuxtLink to="/settings">
          <button
            :class="[
              'w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-medium text-xs',
              isActive('/settings') ? 'bg-blue-100 text-gray-800 border-b-3 border-amber-600' : 'hover:bg-blue-200 text-gray-700'
            ]"
          >
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
        class="w-24 text-center px-4 py-1 rounded-lg bg-blue-600 text-white hover:bg-red-600 hover:text-white font-medium', text-xs flex items-center justify-center gap-2 mt-4 mx-auto"
      >
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()
const route = useRoute()

// 🔄 Check for exact match now
const isActive = (path) => route.path === path

const { $api } = useNuxtApp()

import { ref, onMounted } from 'vue'
const user = ref(null)
const isLoggingOut = ref(false)

const handleLogout = async () => {
  isLoggingOut.value = true
  try {
    await $api.post('/logout')
    const authToken = useCookie('auth_token')
    authToken.value = null
    await new Promise(resolve => setTimeout(resolve, 1000)) // optional fake delay
    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  } finally {
    isLoggingOut.value = false
  }
}

onMounted(async () => {
  try {
    const { data } = await $api.get('/user') // token is auto-injected
    user.value = data
  } catch (error) {
    console.error('Failed to fetch user:', error)
  }
})

</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>