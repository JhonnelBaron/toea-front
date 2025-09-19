<template>
<section class="flex bg-white flex-col mt-4 mb-4 mr-4 rounded-2xl shadow-lg p-6">
  <!-- Header -->
  <div class="flex items-start gap-3 mb-4">
  <!-- Icon -->
  <svg xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 24 24"
       width="18" height="18"
       fill="none"
       stroke="currentColor"
       stroke-width="2"
       stroke-linecap="round"
       stroke-linejoin="round"
       class="text-gray-600 mt-1">
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>

  <!-- Title + Subtitle -->
  <div class="flex flex-col leading-tight">
    <h2 class="text-sm font-light text-gray-800">Evaluation Category</h2>
    <span class="text-xs font-light text-gray-500">
      Navigate between evaluation categories
    </span>
  </div>
</div>



  <!-- Cards Row -->
  <div class="flex flex-row gap-4">
    <!-- Card A -->
    <div
      @click="handleClick('A')"
              class="relative group"
 :class="[
          'p-4 rounded-lg shadow-md flex items-center justify-between flex-1 min-w-[200px] transition duration-300',
          availableCategories.A
            ? 'cursor-pointer bg-gray-50 hover:scale-105 hover:bg-blue-50'
            : 'cursor-not-allowed bg-gray-200 opacity-50'
        ]"
      >
      <div class="flex items-center gap-3">
        <!-- Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" 
            viewBox="0 0 24 24" stroke-width="1.5" 
            stroke="currentColor" class="w-6 h-6 text-gray-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
        </svg>

        <!-- Text block -->
        <div class="flex flex-col leading-tight">
          <h3 class="text-sm font-light text-gray-700">Category A</h3>
          <p class="text-sm font-semibold text-gray-700">Good Governance</p>
        </div>
           <!-- Tooltip only for disabled -->
        <span
          v-if="!props.availableCategories.A"
          class="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
        >
          Your office has no criteria to evaluate in this category
        </span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    <!-- Card B -->
    <div
      @click="handleClick('B')"
              class="relative group"
 :class="[
          'p-4 rounded-lg shadow-md flex items-center justify-between flex-1 min-w-[200px] transition duration-300',
          availableCategories.B
            ? 'cursor-pointer bg-gray-50 hover:scale-105 hover:bg-blue-50'
            : 'cursor-not-allowed bg-gray-200 opacity-50'
        ]"
      >
      <div class="flex items-center gap-3">
        <!-- Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>


        <!-- Text block -->
        <div class="flex flex-col leading-tight">
          <h3 class="text-sm font-light text-gray-700">Category B</h3>
          <p class="text-sm font-semibold text-gray-700">TESD Programs</p>
        </div>
           <!-- Tooltip only for disabled -->
        <span
          v-if="!props.availableCategories.B"
          class="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
        >
          Your office has no criteria to evaluate in this category
        </span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    <!-- Card C -->
    <div
      @click="handleClick('C')"
              class="relative group"
 :class="[
          'p-4 rounded-lg shadow-md flex items-center justify-between flex-1 min-w-[200px] transition duration-300',
          availableCategories.C
            ? 'cursor-pointer bg-gray-50 hover:scale-105 hover:bg-blue-50'
            : 'cursor-not-allowed bg-gray-200 opacity-50'
        ]"
      >
      <div class="flex items-center gap-3">
        <!-- Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>



        <!-- Text block -->
        <div class="flex flex-col leading-tight">
          <h3 class="text-sm font-light text-gray-700">Category C</h3>
          <p class="text-sm font-semibold text-gray-700">Admin Support</p>
        </div>
           <!-- Tooltip only for disabled -->
        <span
          v-if="!props.availableCategories.C"
          class="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
        >
          Your office has no criteria to evaluate in this category
        </span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    <!-- Card D -->
    <div
      @click="handleClick('D')"
              class="relative group"
 :class="[
          'p-4 rounded-lg shadow-md flex items-center justify-between flex-1 min-w-[200px] transition duration-300',
          availableCategories.D
            ? 'cursor-pointer bg-gray-50 hover:scale-105 hover:bg-blue-50'
            : 'cursor-not-allowed bg-gray-200 opacity-50'
        ]"
      >
      <div class="flex items-center gap-3">
        <!-- Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
        </svg>


        <!-- Text block -->
        <div class="flex flex-col leading-tight">
          <h3 class="text-sm font-light text-gray-700">Category D</h3>
          <p class="text-sm font-semibold text-gray-700">Reporting</p>
        </div>
           <!-- Tooltip only for disabled -->
        <span
          v-if="!props.availableCategories.D"
          class="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
        >
          Your office has no criteria to evaluate in this category
        </span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    <!-- Card E -->
    <div
      @click="handleClick('E')"
              class="relative group"
 :class="[
          'p-4 rounded-lg shadow-md flex items-center justify-between flex-1 min-w-[200px] transition duration-300',
          availableCategories.E
            ? 'cursor-pointer bg-gray-50 hover:scale-105 hover:bg-blue-50'
            : 'cursor-not-allowed bg-gray-200 opacity-50'
        ]"
      >
      <div class="flex items-center gap-3">
        <!-- Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>

        <!-- Text block -->
        <div class="flex flex-col leading-tight">
          <h3 class="text-sm font-light text-gray-700">Category E</h3>
          <p class="text-sm font-semibold text-gray-700">Social Marketing</p>
        </div>
           <!-- Tooltip only for disabled -->
        <span
          v-if="!props.availableCategories.E"
          class="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
        >
          Your office has no criteria to evaluate in this category
        </span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>

  </div>
</section>
</template>

<script setup>
// import { defineEmits } from 'vue'

// const emit = defineEmits(['selectCategory'])

// function handleClick(category) {
//   emit('selectCategory', category)
// }
import { defineEmits, defineProps } from 'vue'

const props = defineProps({
  availableCategories: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['selectCategory'])

function handleClick(category) {
  if (props.availableCategories[category]) {
    emit('selectCategory', category)
  }
}
</script>
