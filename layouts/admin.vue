<script setup lang="ts">
useHead({
  title: "Admin",
})

</script>

<template>
  <div class="admin" name="admin">
    <AdminHeader />
    <div class="content show">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.admin {
  display: grid;
  grid-template-rows: auto 1fr;
  padding: 10px;
  max-width: 1280px;
  margin-inline: auto;
  border-radius: 1em;
}

@media (max-width:480px) {
  .admin {
    grid-template-rows: 1fr auto;
  }

}

.content {
  margin-block: 2em 4em;
  width: 100%;
  overflow: hidden;
}
</style>