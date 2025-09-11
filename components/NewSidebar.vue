<template>
  <!-- Sidebar -->
  <aside
    class="w-60 lg:w-72 h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-900 shadow-lg flex flex-col sticky top-0 left-0"
  >
    <!-- Logging Out Overlay -->
    <transition name="fade">
      <div
        v-if="isLoggingOut"
        class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div
          class="bg-white px-6 py-8 rounded-lg flex items-center gap-3 shadow-lg"
        >
          <svg
            class="animate-spin h-5 w-5 text-blue-500"
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
          <span class="text-gray-800 font-medium text-xs">Logging out...</span>
        </div>
      </div>
    </transition>

    <!-- Profile + Navigation -->
    <div class="p-4 flex flex-col h-full text-white">
      <!-- Profile -->
      <div class="flex flex-col items-center my-6">
        <img
          src="/images/profile.png"
          alt="Profile"
          class="w-24 h-24 rounded-full object-cover border-4 border-gray-300 mb-4"
        />
        <h2 class="text-sm font-bold">
          {{ user ? `${user.first_name} ${user.last_name}` : "Loading..." }}
        </h2>
        <p class="text-xs text-gray-200">{{ user?.designation }}</p>
        <p class="text-xs text-gray-300">{{ user?.office }}</p>
      </div>

      <!-- Navigation -->
      <nav class="flex flex-col gap-2">
        <!-- Dashboard -->
        <NuxtLink to="/criteria/BRO/dashboard">
          <button
            :class="[
              'w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-medium text-xs transition',
              isActive('/criteria/BRO/dashboard')
                ? 'bg-blue-500 text-white border-b-2 border-amber-400'
                : 'hover:bg-blue-600'
            ]"
          >
            <img src="/images/homeIcon.svg" alt="Dashboard" class="w-5 h-5" />
            Dashboard
          </button>
        </NuxtLink>

        <!-- Evaluation -->
        <NuxtLink to="/criteria/BRO/evaluate">
          <button
            :class="[
              'w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-medium text-xs transition',
              isActive('/criteria/BRO/evaluate')
                ? 'bg-blue-500 text-white border-b-2 border-amber-400'
                : 'hover:bg-blue-600'
            ]"
          >
            <img src="/images/homeIcon.svg" alt="Evaluation" class="w-5 h-5" />
            Evaluation
          </button>
        </NuxtLink>
      </nav>

      <!-- Spacer -->
      <div class="flex-grow"></div>

      <!-- Logout -->
      <button
        @click="handleLogout"
        class="w-24 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition duration-300 ease-in-out font-light text-sm flex items-center justify-center gap-2 mt-6 mx-auto"
      >
        Logout
      </button>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from "vue";
const router = useRouter();
const route = useRoute();
const { $api } = useNuxtApp();

const user = ref(null);
const isLoggingOut = ref(false);

const isActive = (path) => route.path === path;

const handleLogout = async () => {
  isLoggingOut.value = true;
  try {
    await $api.post("/logout");
    const authToken = useCookie("auth_token");
    authToken.value = null;
    await new Promise((resolve) => setTimeout(resolve, 1000)); // fake delay
    router.push("/login");
  } catch (error) {
    console.error("Logout failed:", error);
  } finally {
    isLoggingOut.value = false;
  }
};

onMounted(async () => {
  try {
    const { data } = await $api.get("/user");
    user.value = data;
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
