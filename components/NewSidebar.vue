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
        <!-- <p class="text-xs text-gray-200">{{ user?.designation }}</p>
        <p class="text-xs text-gray-300">{{ user?.office }}</p> -->
      </div>

      <!-- Navigation -->
      <nav class="flex flex-col gap-2">
        <!-- Dashboard -->
        <NuxtLink to="/executive">
          <button
            :class="[
              'w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-medium text-xs transition',
              isActive('/executive')
                ? 'bg-blue-500 text-white border-b-2 border-amber-400'
                : 'hover:bg-blue-600'
            ]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
</svg>

            Dashboard
          </button>
        </NuxtLink>

        <!-- Evaluation -->
        <NuxtLink to="/executive/evaluate">
          <button
            :class="[
              'w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 font-medium text-xs transition',
              isActive('/executive/evaluate')
                ? 'bg-blue-500 text-white border-b-2 border-amber-400'
                : 'hover:bg-blue-600'
            ]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
</svg>

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
