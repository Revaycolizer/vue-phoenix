<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const number = ref('albinuslucas@gmail.com');
const data = ref([]); 

async function submit() {
  try {

    const response = await $fetch('http://localhost:4000/api/v1/users', {
      method: 'POST',
      body: { name: name.value, email: number.value },
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
async function deleteUser() {
  try {

    const response = await $fetch('http://localhost:4000/api/v1/users/5', {
      method: 'DELETE',
      body: { name: name.value, email: number.value },
    });
    
    console.log("Response from API:", response); 


    await refreshNuxtData()
    
  } catch (error) {
    console.error("Error fetching data:", error);
    data.value = []; 
  }
}

async function updateUser() {
  try {

    const response = await $fetch('http://localhost:4000/api/v1/users/6', {
      method: 'PATCH',
      body: { name: name.value, email: number.value },
    });
    
    console.log("Response from API:", response); 


    await refreshNuxtData()
    
  } catch (error) {
    console.error("Error fetching data:", error);
    data.value = []; 
  }
}
</script>

<template>
  <input type="email" v-model.number="number" placeholder="Enter a number" />
  <input type="text" v-model.trim="name" placeholder="Enter a name" />
  <button @click="submit">Submit</button>
  <button @click="deleteUser">Delete</button>
  <button @click="updateUser">Update</button>
  
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
