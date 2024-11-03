<script setup lang="ts">

interface DataItem {
  id: number;
  name: string;
}

const { data: datas, error } = await useFetch<DataItem[]>('/api/mydata');

if (error.value) {
  console.error("Error fetching data:", error.value);
}
</script>

<template>
  <div v-if="datas && datas.length > 0">
    <p>yoo</p>
    <div v-for="data in datas" :key="data.id">
      <h1>{{ data.id }} {{ data.name }}</h1>
    </div>
  </div>
 <div v-else>
 <p>Nothing </p>
 </div>
</template>
