<script setup lang="ts">

</script>
<template>
  <NuxtLayout name="admin">
    <button @click="useRouter().push('/admin/memo/add/')">
      <Icon name="tabler:plus" />
    </button>
  </NuxtLayout>
</template>