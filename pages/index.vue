<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const number = ref(0);
const data = ref([]); 

async function submit() {
  try {

    const response = await $fetch('/api/data', {
      method: 'POST',
      body: { test: 123, name: name.value, number: number.value },
    });
    
    console.log("Response from API:", response); 

    data.value = Array.isArray(response) ? response : [response];
    console.log("Updated data:", data.value); 
    await refreshNuxtData()
    
  } catch (error) {
    console.error("Error fetching data:", error);
    data.value = []; 
  }
}
</script>

<template>
  <input type="number" v-model.number="number" placeholder="Enter a number" />
  <input type="text" v-model.trim="name" placeholder="Enter a name" />
  <button @click="submit">Submit</button>
  
  <!-- Only render if `data.value` has items -->
  <div v-if="data && data.length > 0">
    <div v-for="(da, index) in data" :key="index">
      <p>{{ da.test || da }}</p>
      <p>{{ da.name || da }}</p>
    </div>
  </div>

  <div v-else>
    <p>No data available</p>
  </div>
</template>
