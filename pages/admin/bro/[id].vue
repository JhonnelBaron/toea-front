<template>
  <div class="flex h-screen">
    <SidebarAdmin />


    <div class="flex-1 bg-blue-200 flex flex-col overflow-y-auto">
     <div class="flex flex-row items-stretch mt-4 mr-4 gap-4 rounded-lg">
  <!-- Best Regional Office Card -->

<div class="bg-white p-4 rounded-lg flex-1 flex flex-col shadow-md py-8">
  <p class="text-lg text-center font-light text-white bg-blue-600 rounded-lg p-2 mb-2">
    🏆 BEST REGIONAL OFFICE 
  </p>

  <div class="flex flex-row justify-between items-center">
    <!-- Left side -->
    <div class="flex flex-col text-start mt-2">
      <div class="font-light text-sm text-gray-700">You are Monitoring:</div>
      <div class="text-gray-600 text-xl font-semibold">
        TESDA {{ nominee?.nominee_name || 'Loading...' }}
      </div>
    </div>

    <!-- Right side button -->
    <div class="mt-2 flex flex-row">
      <NuxtLink to="/admin/regions">
      <button class="bg-blue-600 px-2 py-2 rounded-lg text-xs text-white flex items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            width="16" height="16" 
            fill="none" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
        Back to Dashboard
      </button>
      </NuxtLink>
    </div>

  </div>
</div>


  <!-- Overall Evaluation Completion Card -->
  <div class="bg-white relative overflow-hidden p-6 rounded-lg flex-1 flex flex-col justify-between shadow-md">
    <!-- Trophy background -->
    <img 
      src="/images/trophy.png" 
      alt="Trophy" 
      class="absolute right-8 -bottom-10 w-60 h-60 opacity-40 pointer-events-none select-none" 
    />

    <p class="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2 relative z-10">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3v1H6v2h3v1c0 1.657 1.343 3 3 3s3-1.343 3-3v-1h3v-2h-3v-1c0-1.657-1.343-3-3-3z" />
      </svg>
      Evaluation Completion
    </p>

    <!-- Progress Bar -->
    <div class="relative z-10">
      <div class="flex justify-between text-xs mb-1 text-gray-600">
        <span>Completion Rate</span>
          <span>{{ completionRate }}%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4">
  <div
    class="bg-green-500 h-4 rounded-full transition-all duration-500"
    :style="{ width: completionRate + '%' }"
  ></div>
      </div>
    </div>
    <div class="mt-4 relative z-10">
  <div class="flex justify-between text-sm text-gray-700">
    <span>Total Score</span>
    <span class="font-semibold">{{ totalScore }} / 1000</span>
  </div>
</div>

  </div>


  <!-- Mark as Done Card (smaller) -->
  <div class="bg-white relative overflow-hidden p-6 rounded-lg flex-[0.8] flex flex-col justify-center items-start shadow-md">
  <!-- Check background -->
  <img 
    src="/images/check.png" 
    alt="Check" 
    class="absolute -right-18 -bottom-10 w-60 h-60 opacity-30 pointer-events-none select-none object-contain" 
  />

<p v-if="!isDone" class="text-lg font-light mb-2 relative z-10">
  Done Evaluating?
</p>
<button
  disabled
  @click="confirmMarkAsDone"
  class="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 
         text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out
         relative z-10 disabled:opacity-50 disabled:cursor-not-allowed
         w-full text-center"
>
  ✅ {{ isDone ? 'Submitted' : 'Mark as Done' }}
</button>

</div>


</div>

<BRONavigator :availableCategories="availableCategories" @selectCategory="activeTab = $event" />

<!-- Conditionally render each EvaluationCriteria -->
<MonitoringCriteriaA v-if="activeTab === 'A'" :isDone="isDone" :form="form" :criterias="criterias.A" @score-updated="updateAggregates"/>
<MonitoringCriteriaB v-else-if="activeTab === 'B'" :isDone="isDone" :form="form" :nominee="nominee" :criterias="criterias.B" @score-updated="updateAggregates"/>
<MonitoringCriteriaC v-else-if="activeTab === 'C'" :isDone="isDone" :form="form" :criterias="criterias.C" @score-updated="updateAggregates"/>
<MonitoringCriteriaD v-else-if="activeTab === 'D'" :isDone="isDone" :form="form" :criterias="criterias.D"  :allScores="allScores" @score-updated="updateAggregates"/>
<MonitoringCriteriaE v-else-if="activeTab === 'E'" :isDone="isDone" :form="form" :criterias="criterias.E" @score-updated="updateAggregates"/>


    </div>
  </div>
  <!-- <pre>{{ form }}</pre> -->
</template>

<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import MonitoringCriteriaA from '~/components/BroEvaluation/MonitoringCriteriaA.vue';
import MonitoringCriteriaB from '~/components/BroEvaluation/MonitoringCriteriaB.vue';
import MonitoringCriteriaC from '~/components/BroEvaluation/MonitoringCriteriaC.vue';
import MonitoringCriteriaD from '~/components/BroEvaluation/MonitoringCriteriaD.vue';
import MonitoringCriteriaE from '~/components/BroEvaluation/MonitoringCriteriaE.vue';
import BRONavigator from '~/components/BRONavigator.vue';
import SidebarAdmin from '~/components/SidebarAdmin.vue';
// import SampleEvaluationCriteria from '~/components/SampleEvaluationCriteria.vue';
const activeTab = ref('')
const { $api } = useNuxtApp()
const route = useRoute();
const nominee = ref(null)
const form = reactive({});
const allScores = ref([])

// Track which categories are available
const availableCategories = ref({
  A: false,
  B: false,
  C: false,
  D: false,
  E: false,
})

const criterias = reactive({
  A: [],
  B: [],
  C: [],
  D: [],
  E: []
})


const isDone = ref(false) // ✅ new state

const fetchNominee = async () => {
  try {
    const res = await $api.get(`/nominee/${route.params.id}`)
    if (res.data.status === 200) {
      nominee.value = res.data.data
    } else {
      console.warn('Nominee not found or API error')
    }
  } catch (error) {
    console.error('Error fetching nominee:', error)
  }
}

const fetchCriteriasWithScores = async (letter, criteriaUrl, scoresUrl) => {
  try {
    // 1️⃣ Fetch all criterias (definitions)
    const resCriteria = await $api.get(criteriaUrl)
    criterias[letter] = resCriteria.data.data || []
    availableCategories.value[letter] = criterias[letter].length > 0

    // Initialize blank form per criteria
    criterias[letter].forEach(c => {
      const key = `${letter}-${c.id}`
      if (!form[key]) {
        form[key] = {
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

    // 2️⃣ Fetch saved scores for that category
    const resScores = await $api.get(scoresUrl)
    const scores = resScores.data.data || []

    scores.forEach(s => {
      const key = `${letter}-${s.criteria_id}`
      if (form[key]) {
        form[key].score = s.score ?? ''
        form[key].remarks = s.remarks ?? ''
        form[key].attachmentName = s.attachment_name ?? ''
        form[key].attachmentPath = s.attachment_path
          ? `${BASE_URL}/${s.attachment_path.replace(/\\/g, '/')}`
          : null
        form[key].attachmentType = s.attachment_type ?? null
        form[key].showFile = !!s.attachment_path
      }
    })
  } catch (err) {
    console.error(`Error fetching ${letter} criterias/scores:`, err)
  }
}

// === Fetch all categories ===
const fetchCriterias = async () => {
  await Promise.all([
    fetchCriteriasWithScores('A', `all/criteria/a?nominee_id=${route.params.id}`, `/scores/a/${route.params.id}`),
    fetchCriteriasWithScores('B', `all/criteria/b?nominee_id=${route.params.id}`, `/scores/b/${route.params.id}`),
    fetchCriteriasWithScores('C', `all/criteria/c?nominee_id=${route.params.id}`, `/scores/c/${route.params.id}`),
    fetchCriteriasWithScores('D', `all/criteria/d?nominee_id=${route.params.id}`, `/scores/d/${route.params.id}`),
    fetchCriteriasWithScores('E', `all/criteria/e?nominee_id=${route.params.id}`, `/scores/e/${route.params.id}`)
  ])

  const firstAvailable = Object.keys(availableCategories.value).find(k => availableCategories.value[k])
  if (firstAvailable) activeTab.value = firstAvailable
}
const fetchAllScores = async () => {
  try {
    const res = await $api.get(`/scores/d/${route.params.id}`)
    // adjust URL if your endpoint is different, e.g. `/scores/d/all/${id}`
    if (res.data.status === 200) {
      allScores.value = res.data.data || []
      console.log('All scores loaded ✅', allScores.value)
    } else {
      allScores.value = []
      console.warn('No allScores data found')
    }
  } catch (err) {
    console.error('Error fetching allScores:', err)
  }
}

const fetchDoneStatus = async () => {
  try {
    const res = await $api.get(`/scores-done/nominee/${route.params.id}`)
    if (res.data.status === 200) {
      isDone.value = res.data.data.status === 'done'
    }
  } catch (err) {
    console.error('Error fetching done status:', err)
  }
}

onMounted(async () => {
  await fetchNominee()
  await fetchCriterias()
  await fetchDoneStatus() 
  await fetchAllScores() 
})

const markAsDone = async () => {
  try {
    const res = await $api.post(`/scores-done/nominee/${route.params.id}`)
    if (res.data.status === 200) {
      isDone.value = true
      console.log(res.data.message) // Scores marked as done
    }
  } catch (err) {
    console.error('Error marking as done:', err)
  }
}

const confirmMarkAsDone = async () => {
  if (isDone.value) return;

  // 1. Check if any criteria are not scored
  const incomplete = Object.values(form).some(f => !f.score);
  if (incomplete) {
    alert("You cannot submit yet. Some criteria are not scored.");
    return;
  }

  // 2. Ask for confirmation
  const confirmed = window.confirm(
    "Once submitted, you will not be able to modify your scores. Are you sure you want to submit?"
  );
  if (!confirmed) return;

  // 3. Submit scores as done
  try {
    const res = await $api.post(`/scores-done/nominee/${route.params.id}`);
    if (res.data.status === 200) {
      isDone.value = true;
      console.log(res.data.message);
    }
  } catch (err) {
    console.error('Error marking as done:', err);
  }
};
const completionRate = computed(() => {
  const all = Object.values(form)
  if (all.length === 0) return 0

  const completed = all.filter(f => f.score !== null && f.score !== undefined && f.score !== '').length
  return Math.round((completed / all.length) * 100)
})

const totalScore = computed(() => {
  return Object.values(form).reduce((sum, f) => {
    const score = parseFloat(f.score)
    return sum + (isNaN(score) ? 0 : score)
  }, 0)
})

const maxScore = computed(() => {
  let total = 0
  // loop through each category (A–E)
  Object.values(criterias).forEach(category => {
    category.forEach(c => {
      if (c.a_requirements && c.a_requirements.length > 0) {
        // take the max point_value from its requirements
        const max = Math.max(...c.a_requirements.map(r => r.point_value))
        total += max
      } else if (c.b_requirements && c.b_requirements.length > 0) {
        const max = Math.max(...c.b_requirements.map(r => r.point_value))
        total += max
      } else if (c.c_requirements && c.c_requirements.length > 0) {
        const max = Math.max(...c.c_requirements.map(r => r.point_value))
        total += max
      } else if (c.d_requirements && c.d_requirements.length > 0) {
        const max = Math.max(...c.d_requirements.map(r => r.point_value))
        total += max
      } else if (c.e_requirements && c.e_requirements.length > 0) {
        const max = Math.max(...c.e_requirements.map(r => r.point_value))
        total += max
      }
    })
  })
  return total
})
async function updateAggregates() {
  // compute fresh values (already have completionRate, totalScore, maxScore)
  const payload = {
    nominee_id: route.params.id,
    completion_rate: completionRate.value,
    total_score: totalScore.value,
    max_score: maxScore.value
  }

  try {
    await $api.post('/scores/aggregate', payload)
    console.log('Aggregates stored ✅', payload)
  } catch (err) {
    console.error('Error saving aggregates:', err)
  }
}


</script>
