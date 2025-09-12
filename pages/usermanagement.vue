<template>
  <div class="flex h-screen bg-blue-200">
    <SidebarAdmin />

    <div class="flex-1 bg-blue-200 mt-4 mr-4 mb-4 flex">
      <section class="flex-1 bg-gray-100 rounded-lg shadow-lg flex flex-col p-4 pt-10 border-b-4 border-blue-600">
        <div class="flex flex-col pl-4">
          <span class="text-2xl">User Management</span>
          <span class="text-lg font-light pb-4">Manage user roles, edit information, reset passwords here.</span>
        </div>
        <div class="flex justify-between items-center mb-4">
          <AddUser />
        </div>
        
        <section class="flex-1 bg-white flex flex-col rounded-2xl shadow-lg overflow-y-auto border-b-2 border-green-600">
          <div class="p-4">
            
            <div class="flex items-center p-4 bg-white border border-gray-300 rounded-xl shadow-md w-full space-x-4">
              <img src="/images/profile.png" alt="User" class="w-16 h-16 rounded-full object-cover border" />

              <div class="flex-1">
                <h2 class="text-lg font-semibold">John Doe</h2>
                <p class="text-sm text-gray-500">Frontend Developer</p>
              </div>

              <div class="flex items-center space-x-2">
                <EditUser />
                <DeleteUser />
              </div>
            </div>

            <div
              v-for="i in 12"
              :key="i"
              class="bg-white text-gray-800 p-6 rounded-xl shadow-md my-2 border-1 border-gray-400"
            >
              
            </div>

          </div>
        </section>

      </section>
    </div>
  </div>
</template>

<script setup>
import SidebarAdmin from '~/components/SidebarAdmin.vue'
import AddUser from '~/components/Buttons/AddUser.vue'
import DeleteUser from '~/components/Buttons/DeleteUser.vue'
import EditUser from '~/components/Buttons/EditUser.vue'
</script>