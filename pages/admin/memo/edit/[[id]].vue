<script setup lang="ts">
import dayjs from "dayjs";
import { } from "module";
const id = useRoute().params.id
const form = ref({
  date: '',
  body: '',
  img: null
})

async function getMemo() {
  const { data } = await useReply(`memo/${id}`)
  const { body, date, img } = data
  form.value.date = dayjs(data.date).format('YYYY-MM-DDTHH:mm')
}

if (id) {
  getMemo()
} else {
  form.value.date = dayjs().format('YYYY-MM-DDTHH:mm')
}

async function submit() {
  if (id) {

  } else {
    console.log(form.value);
    
    const data = await useReply('memo', {
      method: 'POST',
      body: form.value
    })
    console.log(data);
  }
}
</script>
<template>
  <NuxtLayout name="admin">
    <h1>Memo</h1>
    <form class="grid" @submit.prevent="submit">
      <div style="margin-top: 1em;">
        <FormImageUpload :imglist="form.img"/>
      </div>
      <div class="form" style="text-align: right;">
        <input type="datetime-local" v-model="form.date">
        <textarea spellcheck="false" maxlength="1000" class="body" rows="10" v-model="form.body"></textarea>
        <button style="text-align: right;">submit</button>
      </div>
    </form>
  </NuxtLayout>
</template>

<style>
.grid {
  grid-template-columns: 330px 1fr;
  gap: 1em;
}

@media (min-width:480px) and (max-width:900px) {
  .grid {
    grid-template-columns: 220px 1fr;
  }
}

@media (max-width:480px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>