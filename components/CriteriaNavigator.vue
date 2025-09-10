<template>
  <div class="bg-white text-white p-3 rounded-lg shadow-md flex flex-row gap-4 mt-4 mr-4 border-b-4 border-blue-500">
    <div
      v-for="tab in tabs"
      :key="tab.name"
      :class="[ 'flex-1 text-center rounded-md p-1 font-bold cursor-pointer', activeTab === tab.name ? 'bg-blue-500' : 'bg-gray-400 hover:bg-blue-400' ]"
      @click="$emit('tab-change', tab.name)"
    >
      {{ tab.label }}
    </div>
  </div>
</template>

<script setup>
const tabs = [
  { name: 'A', label: 'A' },
  { name: 'B', label: 'B' },
  { name: 'C', label: 'C' },
  { name: 'D', label: 'D' },
  { name: 'E', label: 'E' },
]
defineProps(['activeTab'])
defineEmits(['tab-change'])
</script>
