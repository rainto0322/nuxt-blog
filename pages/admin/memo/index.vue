<script setup lang="ts">
import SearchInput from '~/components/form/SearchInput.vue';
import dayjs from 'dayjs'
const body = ref({
  date:''
})
const date=computed(()=>{ return  })
function addMemo() {

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
        <input type="text" :value="Date.now()">
        <textarea rows="10" spellcheck="false"></textarea>
        <input type="file">
        <div style="text-align: right;">
          <button>submit</button>
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

@media (max-width:480px) {
  .grid {
    grid-template-columns: 100px 1fr;
  }
}
</style>