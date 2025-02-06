<script setup lang="ts">

async function searchInput(event: any) {
  setTimeout(() => {
    
  }, 1000);
}
</script>

<template>
  <div class="search-input">
    <input type="text" @input="searchInput">
  </div>
</template>

<style scoped>
.search {
  padding: 10px;
}
</style>