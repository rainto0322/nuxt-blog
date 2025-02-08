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
  console.log(form.value);
  await useReply('memo', {
    method: 'POST',
    body: form.value
  })
}
onMounted(() => {
  form.value.date = dayjs().format('YYYY-MM-DDTHH:mm')
})

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
        <input type="datetime-local" v-model="form.date">
        <textarea rows="10" spellcheck="false" v-model="form.body"></textarea>
        <FormImageUpload/>
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