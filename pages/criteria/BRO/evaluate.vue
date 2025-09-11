<template>
  <div class="flex h-screen">
    <NewSidebar />

    <main class="flex-1 bg-gray-100 flex flex-col overflow-y-auto p-4">
    <div class="flex-1 bg-gray-100 flex flex-col pl-4">
     <div class="flex flex-row items-stretch mt-4 mr-4 gap-4 rounded-lg">
  <!-- Best Regional Office Card -->

<div class="bg-white p-4 rounded-lg flex-1 flex flex-col shadow-md py-8">
  <p class="text-lg text-center font-light text-white bg-blue-600 rounded-lg p-2 mb-2">
    🏆 BEST REGIONAL OFFICE - A. Good Governance
  </p>

  <div class="flex flex-row justify-between items-center">
    <!-- Left side -->
    <div class="flex flex-col text-start mt-2">
      <div class="font-light text-sm text-gray-700">You are Evaluating:</div>
      <div class="text-gray-600 text-xl font-semibold">
        TESDA Regional Office III
      </div>
    </div>

    <!-- Right side button -->
    <div class="mt-2 flex flex-row">
      <NuxtLink to="/criteria/BRO/dashboard">
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
      class="absolute right-8 bottom-2 w-28 h-34 opacity-40 pointer-events-none select-none" 
    />

    <p class="text-base font-semibold text-gray-800 mb-4 flex items-center gap-2 relative z-10">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 1.343-3 3v1H6v2h3v1c0 1.657 1.343 3 3 3s3-1.343 3-3v-1h3v-2h-3v-1c0-1.657-1.343-3-3-3z" />
      </svg>
      Evaluation Completion Percentage
    </p>

    <!-- Progress Bar -->
    <div class="relative z-10">
      <div class="flex justify-between text-xs mb-1 text-gray-600">
        <span>Completion Rate</span>
        <span>75%</span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-4">
        <div
          class="bg-green-500 h-4 rounded-full transition-all duration-500"
          style="width: 75%"
        ></div>
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

  <p class="text-lg font-light mb-2 relative z-10">Done Evaluating?</p>
  <button
    class="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 ease-in-out relative z-10"
  >
    ✅ Mark as Done
  </button>
</div>


</div>


      <!-- Grid Section -->
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
      class="bg-gray-50 p-4 rounded-lg shadow-md flex items-center justify-between flex-1 min-w-[200px] cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50"
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
      class="bg-gray-50 p-4 rounded-lg shadow-md flex items-center justify-between flex-1 min-w-[200px] cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50"
    >
      <div>
        <h3 class="text-sm font-light text-gray-700">Category B</h3>
        <p class="text-sm font-semibold text-gray-700">TESD Programs</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    <!-- Card C -->
    <div
      class="bg-gray-50 p-4 rounded-lg shadow-md flex items-center justify-between flex-1 min-w-[200px] cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50"
    >
      <div>
        <h3 class="text-sm font-light text-gray-700">Category C</h3>
        <p class="text-sm font-semibold text-gray-700">Admin Support</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    <!-- Card D -->
    <div
      class="bg-gray-50 p-4 rounded-lg shadow-md flex items-center justify-between flex-1 min-w-[200px] cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50"
    >
      <div>
        <h3 class="text-sm font-light text-gray-700">Category D</h3>
        <p class="text-sm font-semibold text-gray-700">Reporting</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    <!-- Card E -->
    <div
      class="bg-gray-50 p-4 rounded-lg shadow-md flex items-center justify-between flex-1 min-w-[200px] cursor-pointer transform transition duration-300 hover:scale-105 hover:bg-blue-50"
    >
      <div>
        <h3 class="text-sm font-light text-gray-700">Category E</h3>
        <p class="text-sm font-semibold text-gray-700">Social Marketing</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:translate-x-1"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</section>

<section class="flex bg-white flex-col mb-4 mr-4 rounded-lg shadow-lg p-6">
  <div class="flex flex-col">
    <!-- Section Title -->
    <span class="text-md font-medium p-2">B. Implementation of TESD Programs</span>

    <!-- Header Card -->
    <div class="flex flex-row bg-blue-950 text-white p-4 rounded-t-md">
      <div class="text-sm font-semibold p-2">B.1</div>
      <div class="text-sm font-semibold p-2">Program Coverage and Reach</div>
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
              <p class="text-sm">Upload or provide supporting documents</p>
            </div>
        </div>

        <!-- Scoring Options -->
        <div>
          <span class="text-sm font-light">Available Scoring Options:</span>
          <div class="flex flex-col gap-2 mt-2">
            <label class="flex items-center gap-2">
              <span class="text-sm border flex-1 p-2 border-gray-300">Option 1 - Excellent Coverage</span>
            </label>
            <label class="flex items-center gap-2">
              <span class="text-sm border flex-1 p-2 border-gray-300">Option 2 - Good Coverage</span>
            </label>
            <label class="flex items-center gap-2">
              <span class="text-sm border flex-1 p-2 border-gray-300">Option 3 - Fair Coverage</span>
            </label>
            <label class="flex items-center gap-2">
              <span class="text-sm border flex-1 p-2 border-gray-300">Option 4 - Poor Coverage</span>
            </label>
          </div>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="bg-gray-100 p-4 rounded-md flex flex-col flex-1 gap-4">
        
        <!-- Dropdown -->
        <div>
          <label class="text-sm font-light block mb-1">Select Score:</label>
          <select class="w-full border rounded-md p-2 text-sm">
            <option value="">Choose...</option>
            <option>5 - Excellent</option>
            <option>4 - Very Good</option>
            <option>3 - Good</option>
            <option>2 - Fair</option>
            <option>1 - Poor</option>
          </select>
        </div>

    <!-- File Preview -->
    <label class="text-sm font-light block mb-1">Supporting Evidence</label>
    <div class="border border-gray-300 rounded-md p-2 text-sm bg-white shadow-sm flex flex-row justify-between items-center">
      <div class="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        <span class="ml-2">PDF File Name</span>
      </div>
        <span class="flex items-center p-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye mr-2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.173 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
          </svg>
          <span>View File</span>
        </span>
    </div>

        <!-- Evaluation Remarks -->
        <div>
          <label class="text-sm font-light block mb-1">Evaluation Remarks:</label>
          <textarea class="w-full border rounded-md p-2 text-sm" rows="3" placeholder="Enter remarks..."></textarea>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activeTab = ref('A')
</script>
