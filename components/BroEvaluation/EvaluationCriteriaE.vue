<template>
  <section class="flex bg-white flex-col mb-4 mr-4 rounded-lg shadow-lg p-6">
    <div class="flex flex-col">
      <span class="text-md font-medium p-2">E. Social Marketing and Advocacy</span>

      <!-- Loop over B criterias -->
      <div v-for="criteria in eCriterias" :key="criteria.id" class="mb-6">

        <!-- Header Card -->
        <div class="flex flex-row bg-blue-950 text-white p-4 rounded-t-md">
          <div class="text-sm font-semibold p-2">{{ criteria.number }}</div>
          <div class="text-sm font-semibold p-2">{{ criteria.title }}</div>
        </div>
        <div v-if="criteria.description" class="p-2 border-b border-gray-300">
  <p class="text-sm">{{ criteria.description }}</p>
</div>

        

        <!-- Content Card -->
        <div class="border border-gray-300 rounded-b-md p-4 flex flex-row gap-4">
          
          <!-- LEFT SIDE -->
          <div class="flex flex-col gap-3 w-2/3 rounded-md p-4">

            <!-- Means of Verification -->
            <div class="bg-gray-100 p-4 rounded-sm flex flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">s<path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" /></svg>
              <div class="flex flex-col px-2">
                <span class="text-sm font-light">Means of Verification:</span>
                <p class="text-sm">{{ criteria.means_of_verification || 'No instructions provided' }}</p>
              </div>
            </div>

            <!-- Scoring Options -->
            <div>
              <span class="text-sm font-light">Available Scoring Options:</span>
              <div class="flex flex-col gap-2 mt-2">
                <label v-for="requirement in criteria.e_requirements" :key="requirement.id" class="flex items-center gap-2">
                  <span class="text-sm border flex-1 p-2 border-gray-300">
                    {{ requirement.point_value }} - {{ requirement.requirement_description }}
                  </span>
                </label>
              </div>
            </div>

          </div>

          <!-- RIGHT SIDE -->
          <div class="bg-gray-100 p-4 rounded-md flex flex-col gap-4 w-85">

            <!-- Dropdown -->
            <div>
              <label class="text-sm font-light block mb-1">Select Score:</label>
              <select class="w-full border rounded-md p-2 text-sm border-gray-300">
                <option value="">Choose...</option>
                <option v-for="requirement in criteria.e_requirements" :key="'score-'+requirement.id">
                  {{ requirement.point_value }} - {{ requirement.requirement_description }}
                </option>
              </select>
            </div>

<label class="text-sm font-light block mb-1">Supporting Evidence</label>
<div class="border border-gray-300 rounded-md p-4 bg-white shadow-sm flex flex-col gap-3">

  <!-- Upload -->
  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <input 
      type="file" 
      @change="handleFileUpload" 
      class="text-sm border border-gray-300 rounded-md p-2 w-full sm:w-auto"
    />
    <span v-if="uploadedFileName" class="text-sm font-medium text-gray-700 truncate">
      {{ uploadedFileName }}
    </span>
  </div>

  <!-- View File Button -->
  <button 
    v-if="uploadedFileUrl" 
    @click="viewFile" 
    class="self-start bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md flex items-center gap-2"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.173 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
    View File
  </button>
</div>
        <!-- Evaluation Remarks -->
        <div>
          <label class="text-sm font-light block mb-1">Evaluation Remarks:</label>
          <textarea class="w-full border rounded-md p-2 text-sm border-gray-300" rows="3" placeholder="Enter remarks..."></textarea>
        </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const { $api } = useNuxtApp()

const eCriterias = ref([])

onMounted(async () => {
  try {
    const res = await $api.get('/criteria/e') // no need for Authorization header, cookie is sent automatically
    eCriterias.value = res.data.data
  } catch (err) {
    console.error('Failed to fetch B criteria:', err)
  }
})

const uploadedFileName = ref(null)
const uploadedFileUrl = ref(null)

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (!file) return

  uploadedFileName.value = file.name

  // Create a temporary URL for viewing
  uploadedFileUrl.value = URL.createObjectURL(file)

  // Optional: you can upload the file to the backend here via Axios
  // const formData = new FormData()
  // formData.append('file', file)
  // await axios.post('/upload', formData)
}

function viewFile() {
  if (uploadedFileUrl.value) {
    window.open(uploadedFileUrl.value, '_blank')
  }
}

</script>
