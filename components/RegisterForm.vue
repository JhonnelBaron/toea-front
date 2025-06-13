<template>
  <div class="gray-500 h-screen flex items-center justify-center flex-col relative">
    <!-- Logo -->
    <img
      src="/images/toeaLogo.png"
      alt="Logo"
      class="w-40 h-40 mb-[-80px] z-10 relative border-4 border-gray-200 rounded-full bg-gray-200"
    />

    <!-- Form container -->
    <div class="bg-gray-200 p-5 rounded-lg shadow-md w-4xl pt-20 relative z-0">
      <h2 class="text-2xl font-bold mb-6 text-center">Nominee Account Registration</h2>
      <form @submit.prevent="submitForm" class="space-y-6">

  <!-- Row 2: Award + Category + Region -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div>
      <label class="block text-sm font-medium text-gray-700">Award</label>
      <select v-model="form.award" required
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm">
        <option disabled value="">Select Award</option>
        <!-- <option value="Best Regional Office">Best Regional Office</option> -->
        <option value="Galing Probinsya">Galing Probinsya</option>
        <option value="Best Training Institution">Best Training Institution</option>
      </select>
    </div>

        <div>
      <label class="block text-sm font-medium text-gray-700">Category</label>
      <select v-model="form.category" required
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm">
        <option disabled value="">Select Category</option>
        <option v-if="form.award !== 'Best Training Institution'" value="Small">Small</option>
        <option v-if="form.award !== 'Best Training Institution'" value="Medium">Medium</option>
        <option v-if="form.award !== 'Best Training Institution'" value="Large">Large</option>
        <option v-if="form.award === 'Best Training Institution'" value="RTC/STC">RTC/STC</option>
        <option v-if="form.award === 'Best Training Institution'" value="PTC/DTC">PTC</option>
        <option v-if="form.award === 'Best Training Institution'" value="TAS">TAS</option>
      </select>
    </div>

    <div>
      <label class="block text-sm font-medium text-gray-700">Region</label>
      <select v-model="form.region" required
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm">
        <option disabled value="">Select Region</option>
        <option>Region I</option>
        <option>Region II</option>
        <option>Region III</option>
        <option>Region IV-A</option>
        <option>Region IV-B</option>
        <option>Region V</option>
        <option>Region VI</option>
        <option>Region VII</option>
        <option>Region VIII</option>
        <option>Region IX</option>
        <option>Region X</option>
        <option>Region XI</option>
        <option>Region XII</option>
        <option>CAR</option>
        <option>BARMM</option>
        <option>NCR</option>
      </select>
    </div>

  </div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <!-- Row 3: Name of Institution (only for Best Training Institution) -->
  <div v-if="form.award === 'Best Training Institution'">
  <label class="block text-sm font-medium text-gray-700">Province</label>
  <select
    v-model="form.province"
    :disabled="!availProvinces.length"
    required
    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
  >
    <option disabled value="">Select Province</option>
    <option v-for="province in availProvinces" :key="province" :value="province">
      {{ province }}
    </option>
  </select>
</div>
  
  <div v-if="form.award === 'Best Training Institution'">
    <label class="block text-sm font-medium text-gray-700">Name of Institution</label>
    <!-- <input
      type="text"
      v-model="form.institution"
      class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
      required
      placeholder="Select Institution"
    /> -->
    <select
    v-model="form.institution"
    :disabled="!availableInstitution.length"
    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
    required
  >
    <option disabled value="">Select Institution</option>
    <option v-for="inst in availableInstitution" :key="inst" :value="inst">
      {{ inst }}
    </option>
  </select>

  </div>
  </div>



  <!-- Row 1: Name + Email -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Row 4: Province (only for Galing Probinsya) -->
  <div v-if="form.award === 'Galing Probinsya'">
  <label class="block text-sm font-medium text-gray-700">Province</label>
  <select
    v-model="form.province"
    :disabled="!availableProvinces.length"
    required
    class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
  >
    <option disabled value="">Select Province</option>
    <option v-for="province in availableProvinces" :key="province" :value="province">
      {{ province }}
    </option>
  </select>
</div>
    <div v-if="form.award === 'Galing Probinsya'">
      <label class="block text-sm font-medium text-gray-700">Name</label>
      <input
        type="text"
        v-model="form.name"
          :readonly="form.award === 'Galing Probinsya'"
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
        required
        placeholder="Office"
      />
    </div>

  </div>
      <div>
      <label class="block text-sm font-medium text-gray-700">Email</label>
      <input
        type="email"
        v-model="form.email"
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
        required
        placeholder="juandelacruz@gmail.com"
      />
    </div>

  <!-- Row 5: Password + Confirm Password -->
 <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <!-- Password Field -->
  <div>
    <label class="block text-sm font-medium text-gray-700">Password</label>
    <div class="relative">
      <input
        :type="showPassword ? 'text' : 'password'"
        v-model="form.password"
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
        required
        placeholder="********"
      />
    </div>
  </div>

  <!-- Confirm Password Field -->
  <div>
    <label class="block text-sm font-medium text-gray-700">Confirm Password</label>
    <div class="relative">
      <input
        :type="showPassword ? 'text' : 'password'"
        v-model="form.password_confirmation"
        class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 text-sm"
        required
        placeholder="********"
      />
    </div>
  </div>

  <!-- Show Password Toggle -->
  <div class="col-span-2">
    <label class="inline-flex items-center">
      <input
        type="checkbox"
        v-model="showPassword"
        class="form-checkbox h-4 w-4 text-blue-600"
      />
      <span class="ml-2 text-sm text-gray-600">Show Password</span>
    </label>
  </div>
</div>

  <!-- Submit -->
  <div>
    <button type="submit"
      class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">
      Register
    </button>
    <p class="text-sm text-gray-600 flex items-center justify-center pt-5">
      Already have an account?
      <NuxtLink class="text-blue-600 hover:underline ml-1" to="/login">Log in</NuxtLink>

    </p>
  </div>
</form>


    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
const { $api } = useNuxtApp();
import { useRouter } from 'vue-router'
const router = useRouter()


// async function register() {
//   try {
//     const response = await $api.post('/register', form.value);
//     console.log('Registration success:', response.data);

//     // Save token to localStorage for future requests
//     localStorage.setItem('auth_token', response.data.access_token);

//     // Redirect or update UI accordingly
//   } catch (error) {
//     console.error('Registration error:', error.response?.data || error.message);
//   }
// }
async function register() {
  try {
    const response = await $api.post('/register', form.value)
    console.log('Registration success:', response.data)

    // Only access localStorage on client
    if (process.client) {
      localStorage.setItem('verify_email', form.value.email)
    }

    // Redirect to verify page
    router.push('/verify')

  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message)
    alert('Registration failed: ' + (error.response?.data.message || error.message))
  }
}
const form = ref({
  user_type: 'nominee',
  name: '',
  email: '',
  award: '',
  category: '',
  region: '',
  province: '',
  institution: '',
  password: '',
  password_confirmation: ''
})

const showCategory = computed(() => {
  return form.value.award !== ''
})

const submitForm = () => {
  if (form.value.password !== form.value.password_confirmation) {
    alert('Passwords do not match')
    return
  }

  register()  // <-- call register here to actually submit the data

  console.log('Form submitted:', form.value)
}

const showPassword = ref(false);


const provinceData = {
  'NCR': {
    Medium: ['Pasay-Makati'],
    Large: ['CaMaNaVa', 'Manila', 'MuntiParLasTaPat', 'PaMaMaRiSan', 'Quezon City']
  },
  'CAR': {
    Small: ['Abra', 'Apayao', 'Ifugao', 'Kalinga', 'Mt. Province'],
    Medium: ['Benguet']
  },
  'Region I': {
    Medium: ['Ilocos Norte', 'Ilocos Sur', 'La Union'],
    Large: ['Pangasinan']
  },
  'Region II': {
    Small: ['Batanes', 'Nueva Vizcaya', 'Quirino'],
    Medium: ['Cagayan', 'Isabela']
  },
  'Region III': {
    Small: ['Aurora', 'Bataan', 'Zambales'],
    Medium: ['Pampanga', 'Tarlac'],
    Large: ['Bulacan', 'Nueva Ecija']
  },
  'Region IV-A': {
    Large: ['Batangas', 'Cavite', 'Laguna', 'Quezon', 'Rizal']
  },
  'Region IV-B': {
    Small: ['Marinduque', 'Occidental Mindoro', 'Romblon'],
    Medium: ['Oriental Mindoro', 'Palawan']
  },
  'Region V': {
    Small: ['Camarines Norte', 'Catanduanes', 'Masbate', 'Sorsogon'],
    Medium: ['Albay', 'Camarines Sur']
  },
  'Region VI': {
    Small: ['Aklan', 'Antique', 'Capiz', 'Guimaras'],
    Medium: ['Iloilo'],
    Large: ['Negros Occidental']
  },
  'Region VII': {
    Small: ['Siquijor'],
    Medium: ['Bohol', 'Negros Oriental'],
    Large: ['Cebu']
  },
  'Region VIII': {
    Small: ['Biliran', 'Eastern Samar', 'Northern Samar', 'Samar', 'Southern Leyte'],
    Large: ['Leyte']
  },
  'Region IX': {
    Small: ['Zamboanga Sibugay'],
    Medium: ['Zamboanga Del Norte', 'Zamboanga Del Sur']
  },
  'Region X': {
    Small: ['Camiguin', 'Misamis Occidental'],
    Medium: ['Bukidnon', 'Lanao del Norte'],
    Large: ['Misamis Oriental']
  },
  'Region XI': {
    Small: ['Compostela Valley/ Davao de Oro', 'Davao del Norte', 'Davao Oriental'],
    Large: ['Davao City/ Davao del Sur']
  },
  'Region XII': {
    Medium: ['North Cotabato', 'Sarangani', 'South Cotabato', 'Sultan Kudarat']
  },
  'Caraga': {
    Small: ['Agusan del Norte', 'Agusan del Sur', 'Dinagat Island Surigao del Norte'],
    Medium: ['Surigao del Sur']
  }
}

const institutionData = {
  'NCR': {
    'PTC/DTC': [
      'TESDA Navotas Training Institute',
      'TESDA Manila District Training and Assessment Center (TMDTAC)',
      'MuntiParLasTaPat District Training and Assessment Center',
      'TESDA PAMAMARISAN Training and Assessment Center',
      'Pasay-Makati District Training and Assessment Center',
      'Quezon City Lingkod Bayan Skills Development Center (QCLBSDC)'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — NCR'
    ],
    'TAS': []
  },
  'CAR': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Apayao',
      'Provincial Training Center (FTC) — Benguet'
    ],
    'RTC/STC': [],
    'TAS': [
      'Cordillera State Institute of Technical Education (CSITE)'
    ]
  },
  'Region I': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Banna, Ilocos Norte',
      'Provincial Training Center (PTC) — Candon City',
      'Provincial Training Center (PTC) — La Union',
      'Provincial Training Center (PTC) — Lingayen, Pangasinan',
      'Provincial Training Center (PTC) — Urdaneta City'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — La Union'
    ],
    'TAS': [
      'Bangui Institute of Technology (BIT)',
      'Marcos Agro-Industrial School (MAIS)',
      'Luciano Milian Memorial School of Arts and Trades (LMMSAT)',
      'Pangasinan School of Arts and Trades (PSAT)',
      'Pangasinan Technological Institute (PTI)'
    ]
  },
  'Region II': {
    'PTC/DTC': [
      'Provincial Training Center (FTC) — Batanes',
      'Provincial Training Center (PTC) — Cagayan',
      'Provincial Training Center (PTC) — Isabela',
      'Provincial Center for Skills Enhancement and Productivity (Nueva Vizcaya)',
      'Provincial Training Center (FTC) — Quirino'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — Tuguegarao'
    ],
    'TAS': [
      'Aparri Polytechnic Institute (API)',
      'Lasam Institute of Technology (LIT)',
      'Isabela School of Arts and Trades (ISAT)',
      'Southern Isabela College of Arts and Trades (SICAT)',
      'Nueva Vizcaya Polytechnic Institute (NVPI)'
    ]
  },
  'Region III': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Baler',
      'Provincial Training Center (FTC) — Bataan (Orion)',
      'Provincial Training Center (PTC) — Calumpit',
      'Provincial Training Center (PTC) — Palayan City',
      'Provincial Training Center (FTC) — Guagua',
      'Provincial Training Center (PTC) — Tarlac',
      'Provincial Training Center (FTC) — Iba, Zambales'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) Central Luzon — Mariveles',
      'RTC Central Luzon — Guiguinto',
      'TESDA Korea-Philippines Information Technology Center'
    ],
    'TAS': [
      'Gonzalo Puyat School of Arts and Trades (GPSAT)',
      'Concepcion Vocational School (CVS)'
    ]
  },
  'Region IV-A': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Lipa',
      'TESDA Provincial Training Center (PTC) — Paliparan',
      'TESDA Provincial Training Center (FTC) — Rosario',
      'TESDA — Laguna Lake Development Authority (LLDA) Provincial Training Center',
      'Provincial Training Center (PTC) — San Antonio',
      'Rizal Provincial Technical Education and Skills Development Center (RPTESDC) — Binangonan',
      'Rizal Provincial Technical Education and Skills Development Center (RPTESDC) — Cainta',
      'Provincial Technical Education and Skills Development Center (PTESDC) — Taytay'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — CaLaBaRZon'
    ],
    'TAS': [
      'Jacobo Z. Gonzales Memorial School of Arts and Trades (JZGMSAT)',
      'Bondoc Peninsula Technological Institute (BPTI)',
      'Quezon National Agricultural School (QNAS)'
    ]
  },
  'Region IV-B': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Boac',
      'Provincial Training Center (PTC) — Occidental Mindoro',
      'Provincial Training Center (PTC) — San Teodoro',
      'Provincial Training Center (PTC) — Palawan',
      'Provincial Training Center (PTC) — Romblon'
    ],
    'RTC/STC': [],
    'TAS': [
      'Buyabod School of Arts and Trades (BSAT)',
      'Torrijos Poblacion School of Arts and Trades (TPSAT)',
      'Rizal Occidental Mindoro TESDA Training and Accreditation Center (ROMTTAC)',
      'Simeon Suan Vocational and Technical College (SSVTC)',
      'Puerto Princesa School of Arts and Trades (PPSAT)',
      'Romblon National Institute of Technology (RNIT)'
    ]
  },
  'Region V': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Malilipot',
      'Provincial Training Center (PTC) — Guinobatan',
      'Provincial Training Center (FTC) — Labo',
      'Provincial Training Center (PTC) — Libmanan',
      'Provincial Training Center (FTC) — Catanduanes',
      'Provincial Training Center (FTC) — Masbate',
      'Provincial Training Center (PTC) — Sorsogon'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — Pili'
    ],
    'TAS': [
      'San Francisco Institute of Science and Technology (SFIST)',
      'Camarines Sur Institute of Fisheries and Marine Sciences (CaSIFMaS)',
      'Ragay Polytechnic Skills Institute (RPSI)',
      'Cabugao School of Handicraft and Cottage Industries (CSHCI)',
      'Masbate Institute of Fisheries and Technology (MIFT)',
      'Bulusan National Vocational Technical School (BNVTS)',
      'Sorsogon National Agricultural School (SNAS)'
    ]
  },
  'Region VI': {
    'PTC/DTC': [
      'Provincial Training Center (FTC) — Aklan',
      'Provincial Training Center (PTC) — Antique',
      'Provincial Training Center (PTC) — Capiz',
      'Provincial Training Center (FTC) — Guimaras',
      'Provincial Training Center (PTC) — Iloilo',
      'Provincial Training Center (PTC) — Cadiz',
      'Provincial Training Center (PTC) — Kabankalan'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — Iloilo',
      'Regional Training Center (RTC) — Talisay'
    ],
    'TAS': [
      'Dumalag Vocational Technical School (DVTS)',
      'Leon Ganzon Polytechnic College (LGPC)',
      'New Lucena Polytechnic College (NLPC)',
      'Passi Trade School (PTS)'
    ]
  },
  'Region VII': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Bilar',
      'Provincial Training Center (PTC) — Inabanga',
      'Provincial Training Center (PTC) — Jagna',
      'Provincial Training Center (PTC) — Pilar',
      'Provincial Training Center (PTC) — Tubigon',
      'Provincial Training Center (PTC) — Carmen',
      'Provincial Training Center (PTC) — Daanbantayan',
      'Provincial Training Center (PTC) — Minglanilla',
      'Provincial Training Center (PTC) — Samboan',
      'Provincial Training Center (PTC) — Toledo',
      'Provincial Training Center (PTC) — Dumaguete',
      'Provincial Training Center (PTC) — Siquijor'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — Cebu'
    ],
    'TAS': [
      'Lazi Technical Institute (LTI)'
    ]
  },
  'Region VIII': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Biliran',
      'Provincial Training Center (PTC) — Eastern Samar',
      'Provincial Training Center (FTC) — Leyte',
      'Provincial Training Center (PTC) — Northern Samar',
      'Provincial Training Center (PTC) — Samar',
      'Provincial Training Center (FTC) — Southern Leyte'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — Tacloban'
    ],
    'TAS': [
      'Cabucgayan National School of Arts and Trades (CSNSAT)',
      'Arteche National Agricultural School (ANAS)',
      'Balangiga National Agricultural School (BNAS)',
      'Samar National School of Arts and Trades (SNSAT)',
      'Calubian National Vocational School (CNVS)',
      'Balicuatro College of Arts and Trades (BCAT)',
      'Las Navas Agro-Industrial School (LNAIS)'
    ]
  },
  'Region IX': {
    'PTC/DTC': [
      'Provincial Training Center — Zamboanga City',
      'Provincial Training Center (PTC) — Sindangan',
      'Provincial Training Center (PTC) — Pagadian',
      'Provincial Training Center (PTC) — Zamboanga Sibugay'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — Zamboanga'
    ],
    'TAS': [
      'Zamboanga City State Polytechnic College (ZCSPC)',
      'Sindangan National Agricultural School (SNAS)',
      'Kabasalan Institute of Technology (KIT)',
      'Zamboanga Sibugay Polytechnic Institute (ZSPI)'
    ]
  },
  'Region X': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Bukidnon',
      'Provincial Training Center (PTC) — Camiguin',
      'Provincial Training Center (PTC) — Misamis Occidental',
      'Provincial Training Center (PTC) — Misamis Oriental'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — Cagayan de Oro'
    ],
    'TAS': [
      'Kinoguitan National Agricultural School (KNAS)',
      'Lugait National Vocational School (LNVS)',
      'Talisayan National High School and Training Center (TNHSTC)',
      'Opol National Secondary Technical School (ONSTS)'
    ]
  },
  'Region XI': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Davao del Norte',
      'Provincial Training Center (PTC) — Davao del Sur',
      'Provincial Training Center (PTC) — Davao Occidental',
      'Provincial Training Center (PTC) — Davao Oriental'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — Davao'
    ],
    'TAS': [
      'Carmen National High School and Training Center',
      'Digos Technical Vocational High School',
      'Lupon School of Fisheries',
      'Kapalong College of Agriculture, Sciences and Technology'
    ]
  },
  'Region XII': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Cotabato',
      'Provincial Training Center (PTC) — Sarangani',
      'Provincial Training Center (PTC) — Sultan Kudarat'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — Koronadal'
    ],
    'TAS': [
      'Technical Education and Skills Development Center — Cotabato',
      'Sultan Kudarat Technical Institute',
      'Alabel National High School Training Center'
    ]
  },
  'CARAGA': {
    'PTC/DTC': [
      'Provincial Training Center (PTC) — Agusan del Norte',
      'Provincial Training Center (PTC) — Agusan del Sur',
      'Provincial Training Center (PTC) — Surigao del Norte',
      'Provincial Training Center (PTC) — Surigao del Sur'
    ],
    'RTC/STC': [
      'Regional Training Center (RTC) — Butuan'
    ],
    'TAS': [
      'Agusan del Sur School of Arts and Trades (ASSAT)',
      'Hinatuan Southern College of Trades and Technology',
      'Surigao del Norte College of Agriculture and Technology',
      'Surigao del Sur Institute of Technology'
    ]
  },
};

const availableProvinces = computed(() => {
  if (form.value.award !== 'Galing Probinsya') return []

  const region = form.value.region
  const category = form.value.category

  if (!region || !category) return []

  const provincesByCategory = provinceData[region]?.[category]
  return provincesByCategory || []
})

const availProvinces = computed(() => {
  if (form.value.award !== 'Best Training Institution') return []

  const region = form.value.region
  if (!region) return []

  const provincesObj = provinceData[region]
  return Object.values(provincesObj || {}).flat()
})



const availableInstitution = computed(() => {
  if (form.value.award !== 'Best Training Institution') return []

  const region = form.value.region
  const category = form.value.category

  if (!region || !category) return []

  const institutionByCategory = institutionData[region]?.[category]
  return institutionByCategory || []
})


watch(
  () => [form.value.region, form.value.province, form.value.award],
  ([region, province, award]) => {
    if (award === 'Galing Probinsya' && region && province) {
      const prefix = region === 'NCR' ? 'DO' : 'PO'
      form.value.name = `${prefix} - ${province}`
    }
  }
)

watch(
  () => [form.value.award, form.value.category, form.value.region],
  () => {
    form.value.name = ''
  }
)

</script>

<style scoped>

</style>
