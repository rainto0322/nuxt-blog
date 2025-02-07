<script setup lang="ts">
import SearchInput from '~/components/form/SearchInput.vue';
import dayjs from 'dayjs'
const loading = ref(false)
const form = ref({
  date: '',
  body: '',
  img: ''
})

async function addMemo() {
  try {
  //   await useFeh('user/login', {
  //   method: 'POST',
  //   body: {
  //     name: 'admin',
  //     password: '12345678',
  //     email: 'rainto0322@foxmail.com'
  //   }
  // })
  console.log(`${Date.now()}-${Math.random().toString(36).slice(2, 9)}`);
  
  } catch (error) {
    console.log(error);
  }
  // await $fetch<{
  //   ok: boolean,
  //   msg: string
  // }>('/api/memo', {
  //   method: 'POST',
  //   body: form.value
  // }).then((data) => {
  //   console.log(data);
  // }).catch((err) => {
  //   console.log(err);
  // })
}
onMounted(() => {
  form.value.date = dayjs().format('YYYY-MM-DDTHH:mm')
})

function uploadFile(event: any) {
  const file = event.target.files[0]
  console.log(file);
}

</script>
<template>
  <NuxtLayout name="admin">
    <h1>Memo</h1>
    <div class="grid">
      <div class="list">
        <SearchInput />
        <div>
          list
        </div>
      </div>
      <div class="wrap">
        <input type="datetime-local" :value="form.date">
        <textarea rows="10" spellcheck="false" :value="form.body"></textarea>
        <input type="file" @change="uploadFile">
        <div style="text-align: right;">
          <button @click="addMemo" :disabled="loading">submit</button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
.grid {
  width: 100%;
  grid-template-columns: 300px 1fr;
}

.wrap {
  padding-left: 1em;
}

@media (min-width:480px) and (max-width:900px) {
  .grid {
    grid-template-columns: 150px 1fr;
  }
}

@media (max-width:480px) {
  .grid {
    grid-template-columns: 100px 1fr;
  }
}
</style>