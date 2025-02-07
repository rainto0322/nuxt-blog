<script setup lang="ts">

useSeoMeta({
  ogImage: '/favicon.png'
})
function toast(){
  const toast=useToast()
  toast.warn({
    title:"123",
    msg:'456'
  })
}
</script>

<template>
  <div>
    <NuxtPage />
    <button @click="toast"> 123</button>
    <Toast />
  </div>
</template>

<style>
@import '~/assets/css/base.css';
</style>