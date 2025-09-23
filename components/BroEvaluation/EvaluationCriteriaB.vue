<template>
  <section class="flex bg-white flex-col mb-4 mr-4 rounded-lg shadow-lg p-6">
    <div class="flex flex-col">
      <span class="text-md font-medium p-2">B. Implementation of TESD Programs</span>

      <!-- Loop over B criterias -->
      <!-- <div v-for="criteria in bCriterias" :key="criteria.id" class="mb-6"> -->
      <div v-for="criteria in filteredCriterias" :key="criteria.id" class="mb-6">

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
              <span class="text-sm font-light">Rubrics</span>
              <div class="flex flex-col gap-2 mt-2">
                <label v-for="requirement in criteria.b_requirements" :key="requirement.id" class="flex items-center gap-2">
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
            <div v-if="props.form[`B-${criteria.id}`]">
              <label class="text-sm font-light block mb-1">Select Score:</label>
              <select v-model="props.form[`B-${criteria.id}`].score" @change="submitScore(criteria)"  :disabled="isDone" class="w-full border rounded-md p-2 text-sm border-gray-300">
                <option value="">Choose...</option>
                <option v-for="requirement in criteria.b_requirements" :key="'score-'+requirement.id" :value="requirement.point_value">
                  {{ requirement.point_value }} - {{ requirement.requirement_description }}
                </option>
              </select>
            </div>

<label class="text-sm font-light block mb-1">Supporting Evidence</label>
  <!-- <div v-if="form[criteria.id].attachmentPath" class="text-sm text-blue-600 cursor-pointer hover:underline"
       @click="$refs.fileInput[criteria.id].click()">
    Choose another file
  </div> -->
<div v-if="props.form[`B-${criteria.id}`]" class="border border-gray-300 rounded-md p-4 bg-white shadow-sm flex flex-col gap-3">
  
  <!-- Upload + Filename + View button -->
  <div class="flex items-center gap-2 w-full">
    <!-- File input: show only if no file -->
  <label 
    v-if="!props.form[`B-${criteria.id}`].attachmentPath"
    class="flex-1 border border-gray-300 rounded-md p-2 text-sm text-gray-500 cursor-pointer flex items-center gap-2"
  >
    <!-- Attachment icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828L18 9.828a4 4 0 10-5.656-5.656l-6.586 6.586a6 6 0 108.486 8.486L20 12.828" />
    </svg>
    Attach file
    <input 
      type="file" 
      class="hidden" 
      :disabled="isDone"
      @change="(e) => { handleFileUpload(e, criteria.id); submitScore(criteria) }"
    />
  </label>

    <!-- File name -->
    <span v-if="props.form[`B-${criteria.id}`].attachmentName" class="text-sm font-medium text-gray-700 truncate flex-1">
      {{ props.form[`B-${criteria.id}`].attachmentName }}
    </span>

    <!-- View File button -->
<button 
  v-if="props.form[`B-${criteria.id}`].attachmentPath" 
  @click="openFilePopup(props.form[`B-${criteria.id}`].attachmentPath, props.form[`B-${criteria.id}`].attachmentType)" 
  class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium text-sm p-0 relative group"
>
  <!-- Eye SVG icon -->
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>

  <!-- Text -->
  <span>View</span>

  <!-- Tooltip showing full file name -->
  <span class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 transition-opacity">
    {{ props.form[`B-${criteria.id}`].attachmentName }}
  </span>
</button>

  </div>
</div>
        <!-- Evaluation Remarks -->
        <div v-if="props.form[`B-${criteria.id}`]">
          <label class="text-sm font-light block mb-1">Evaluation Remarks:</label>
          <textarea v-model="props.form[`B-${criteria.id}`].remarks" @blur="submitScore(criteria)"  :disabled="isDone" class="w-full border rounded-md p-2 text-sm border-gray-300" rows="3" placeholder="Enter remarks..."></textarea>
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
import { useRoute } from 'vue-router'
import { BASE_URL } from '~/utils/constants.js'

// const BASE_URL = 'http://localhost:8000/storage';
const bCriterias = ref([])
// const form = reactive({})   // ✅ make form reactive
const route = useRoute()
const props = defineProps({
  isDone: Boolean,
  form: Object,
  nominee: Object,
});
function openFilePopup(path, type) {
  if (!path) return

  // Set window size & position
  const width = 1000
  const height = 700
  const left = (window.screen.width - width) / 2
  const top = (window.screen.height - height) / 2

  // Open a new browser window
  const popup = window.open(
    '',                  // leave URL blank, we’ll write content dynamically
    '_blank',
    `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
  )

  // Write content inside the new window
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>File Viewer</title>
        <style>
          html, body { margin:0; padding:0; width:100%; height:100%; overflow:auto; display:flex; justify-content:center; align-items:center; background:#f9f9f9; }
          iframe, img { max-width: 100%; max-height: 100%; }
        </style>
      </head>
      <body>
        ${
          type?.includes('pdf')
            ? `<iframe src="${path}" width="100%" height="100%" style="border:none;"></iframe>`
            : type?.includes('image')
            ? `<img src="${path}" />`
            : `<p style="font-family:sans-serif;">Cannot preview this file type.</p>`
        }
      </body>
    </html>
  `

  popup.document.write(htmlContent)
  popup.document.close()
}

// 🔑 filter criterias by nominee category
const filteredCriterias = computed(() => {
  if (!props.nominee) return []
  const category = props.nominee.nominee_category
  return bCriterias.value.filter(c => {
    if (category === 'small') return c.bro_small === 1
    if (category === 'medium') return c.bro_medium === 1
    if (category === 'large') return c.bro_large === 1
    return false
  })
})


onMounted(async () => {
  try {
    const res = await $api.get('/criteria/b')
    bCriterias.value = res.data.data

    // ✅ initialize form after criterias are loaded
    filteredCriterias.value.forEach(c => {
      const key = `B-${c.id}`
      if (!props.form[key]) {
        props.form[key] = {
          score: '',
          remarks: '',
          attachment: null,
          attachmentName: '',
          attachmentPath: null,
          attachmentType: null,
          showFile: false
        }
      }
    })

     // 3. fetch saved scores for this nominee
    const scoresRes = await $api.get(`/scores/nominee/${route.params.id}`)
    const scores = scoresRes.data.data

    // 4. map saved scores into form (only A criteria)
    scores.forEach(s => {
      if (s.criteria_table === 'b_criterias') {
        const key = `B-${s.criteria_id}`
        props.form[key].score = s.score
        props.form[key].remarks = s.remarks || ''
        props.form[key].attachmentName = s.attachment_name || ''
        props.form[key].attachmentPath = s.attachment_path
          ? `${BASE_URL}/${s.attachment_path.replace(/\\/g, '/')}` // replace backslashes
          : null
        props.form[key].attachmentType = s.attachment_type || null
      }
    })
  } catch (err) {
    console.error('Failed to fetch B criteria:', err)
  }
})

function handleFileUpload(event, criteriaId) {
  const key = `B-${s.criteriaId}`
  const file = event.target.files[0]
  if (file) {
    props.form[key].attachment = file
    props.form[key].attachmentName = file.name

        // Immediately set a local path to show the View button
    props.form[key].attachmentPath = URL.createObjectURL(file)

    // Set MIME type
    props.form[key].attachmentType = file.type
  }
}

function viewFile(path) {
  if (path) window.open(path, '_blank')
}

async function submitScore(criteria) {
  const key = `B-${criteria.id}`
  const fd = new FormData()
  fd.append('nominee_id', route.params.id)
  fd.append('criteria_table', 'b_criterias')
  fd.append('criteria_id', criteria.id)
  fd.append('score', props.form[key].score)
  fd.append('remarks', props.form[key].remarks)
  if (props.form[key].attachment) {
    fd.append('attachment', props.form[key].attachment)
  }

  await $api.post('/score', fd, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

</script>
