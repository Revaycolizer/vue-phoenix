<script setup lang="ts">

interface User {
    id: number;
    name: string;
    email: string;
    }
const { data: datas, error } = await useFetch<User[]>('http://localhost:4000/api/v1/users')

if(error.value){
  console.error("Error fetching data:", error.value);
}

</script>

<template>
<div v-if="datas && datas.length >0">
<div v-for="data in datas" :key="data.id">
<p>{{data.id}} {{data.name}}</p>
</div>
</div>
</template>