<script setup lang="ts">
const page = useRoute().params.page
type memoItem = {
  date: string
  body: string
  img: Array<string>
}
const memoList = ref<memoItem[]>([])
const header = ["Date", "Body", "ImgList", "Edit"]

function skipAdd() {
  useRouter().push('/admin/memo/edit/')
}
</script>
<template>
  <NuxtLayout name="admin">
    <div class="fb ac">
      <h1>Memo</h1>
      <button @click="skipAdd">+</button>
    </div>
    <FormTable :header="header" :list="memoList">
      <td><span>编辑</span>|<span>删除</span></td>
    </FormTable>
  </NuxtLayout>
</template>

<style></style>