<script setup lang="ts">
import { onMounted } from "vue";
import dayjs from "dayjs";
const LoginName = ref<string | null | undefined>('')
const DateNow = ref('')
function init() {
  const name = useCookie('name')
  LoginName.value = name.value
}

function logout() {
  const name = useCookie('name')
  const token = useCookie('token')
  name.value = null
  token.value = null
  useRouter().push('/login')
}

onMounted(() => {
  init()
  setInterval(() => {
    DateNow.value = dayjs().format('HH:mm:ss YYYY/MM/DD')
  }, 1000);
})

</script>

<template>
  <NuxtLayout name="admin">
    <h1>👋 Hi, {{ LoginName }}</h1>
    <p>Current Time: {{ DateNow }}</p>
    <img src="/assets/banner.jpg" alt="">
    <button @click="logout">logout</button>
  </NuxtLayout>
</template>
