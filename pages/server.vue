<script setup lang="ts">
const { videos } = useApi();
const { data, error } = await videos.get404Server();
</script>
<template>
  <div>
    data: '{{ data }}'<br >
    error: '{{ error }}'<br >
  </div>
</template>
