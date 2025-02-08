<script setup lang="ts">
const fileInput = ref<HTMLInputElement | null>(null);
const filename = ref('');
const selectImage = ref<string | null>(null);
function triggerFileInput() {
  fileInput.value?.click()
}
function handleFile(event: any) {
  const file = event.target.files
  filename.value = file.toString()
  console.log(file);

  // const reader = new FileReader();
  // reader.onload = (e) => {
  //   selectImage.value = (e.target as FileReader).result as string;
  //   // console.log(selectImage.value);
  // };
  // reader.readAsDataURL(file);
}
</script>

<template>
  <div class="image" @click="triggerFileInput">
    <img v-if="selectImage" :src="selectImage">
    <input ref="fileInput" type="file" @change="handleFile" style="display: none;" accept=".jpg,.jpeg,.png" multiple />
    <p>{{ filename }}</p>
  </div>
</template>

<style scoped>
.image {
  width: 100px;
  height: 100px;
  border-radius: 1em;
  border: 1px solid var(--theme);
  position: relative;
  cursor: pointer;
}

.image::before {
  content: "+";
  z-index: -1;
  color: var(--theme);
  font-size: 2em;
  position: absolute;
  top: 38px;
  left: 38px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>