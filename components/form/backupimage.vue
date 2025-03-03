<script setup lang="ts">
import dayjs from 'dayjs';

const fileInput = ref<HTMLInputElement | null>(null);

interface Image {
  name: string;
  base64: string;
}
const ImgList = ref<Image[]>([])
const selectImage = ref<string | null>(null);
function triggerFileInput() {
  fileInput.value?.click()
}
function handleFile(event: any) {
  const files = event.target.files
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const reader = new FileReader()
    reader.onload = async (e) => {
      const data = {
        name: dayjs().format('YYYYMMDD') + i,
        base64: (e.target as FileReader).result as string,
        success: false
      }
      await useReply('img', {
        method: "POST",
        body: data
      })
      ImgList.value.push(data)
    }
    reader.readAsDataURL(file);
  }
}


function remove(index: number) {
  ImgList.value.splice(index, 1)

}
const props = defineProps<{
  id?: string
  imglist?: string
}>();



</script>

<template>
  <div class="upload">
    <div class="item" v-if="ImgList.length" v-for="(item, index) in ImgList">
      <img :src="item.base64">
      <span class="img-name">{{ item.name }}</span>
      <span class="remove" @click="remove(index)">x</span>
    </div>
    <div class="item" @click="triggerFileInput">
      <img v-if="selectImage" :src="selectImage">
      <input ref="fileInput" type="file" @change="handleFile" style="display: none;" accept=".jpg,.jpeg,.png"
        multiple />
    </div>
  </div>
</template>

<style scoped>
.upload {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 10px;
}

.item {
  width: 100px;
  height: 100px;
  border-radius: 1em;
  border: 1px solid var(--theme);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.item:first-child {
  margin-left: 0;
}

.item::before {
  content: "+";
  z-index: -1;
  color: var(--theme);
  font-size: 2em;
  position: absolute;
  top: 38px;
  left: 38px;
}

.item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item .remove {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 10px 12px;
  border-radius: 0 0 0 12px;
  line-height: 0;
  opacity: .7;
  background-color: var(--theme);
  color: var(--magor);
  cursor: pointer;
  user-select: none;
}

.item .img-name {
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  background-color: var(--theme);
}
</style>