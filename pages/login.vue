<script setup lang="ts">
import { onMounted } from "vue";
const toast = useToast()
const router = useRouter()
const signupMode = ref(false)
const loading = ref(false)
let form = ref({
  name: 'admin',
  password: '12345678',
  email: 'rainto0322@foxmail.com'
})

function toogleMod() {
  signupMode.value = !signupMode.value;
}

function submit() {
  signupMode.value ? signup() : login()
}

async function login() {
  loading.value = true
  await $fetch<{
    user: {
      name: string,
      group: string
    },
    ok: boolean,
    msg: string
  }>('/api/user/login', {
    method: 'POST',
    body: form.value
  }).then((data) => {
    if (data.ok) {
      toast.add({ title: data.msg, icon: "/favicon.png" })
      setTimeout(() => {
        router.push('/admin')
      }, 1000);
    }
  }).catch((err) => {
    toast.add({ title: err.message, icon: "/favicon.png" })
  })


  setTimeout(() => {
    loading.value = false
  }, 2000);
}


async function signup() {
  console.log(form.value.name);
  const data = await $fetch<{
    ok: boolean,
    msg: string
  }>('/api/user/signup', {
    method: 'POST',
    body: form.value
  })

  setTimeout(() => {
    loading.value = false
  }, 500);
}

onMounted(() => {
  const user = useCookie('name').value
  const token = useCookie('token').value
  const { searchParams } = new URL(window.location.href)
  if (searchParams.get("t") === "s") signupMode.value = true

  if (user && token) login()
})

</script>

<template>
  <NuxtLayout name="login"></NuxtLayout>
  <form class="form w-300px mb-a" style="margin-top: 20vh; transition: margin-top .2s;" @submit.prevent="submit">
    <div class="fb ac">
      <h1 class="show" v-if="signupMode">Signup</h1>
      <h1 class="show" v-else>Login</h1>
      <div class="ml-auto cursor-pointer" @click="toogleMod">
        <span>Login</span>
        <span class="toggle" v-bind:class="signupMode ? 'on' : ''"></span>
        <span>Signup</span>
      </div>
    </div>
    <div style="min-height: 185px;">
      <input placeholder="username" type="text" minlength="2" maxlength="10" v-model="form.name">
      <input placeholder="password" type="password" minlength="8" maxlength="20" v-model="form.password">
      <input class="show" placeholder="email" type="email" v-if="signupMode" v-model="form.email">
    </div>
    <button class="w-100% p-15px" :disabled="loading">Submit</button>
  </form>
</template>
<style scoped>
/* toggle button */
.toggle {
  position: relative;
  height: 24px;
  width: 44px;
  border-radius: 1.5em;
  display: inline-block;
  margin-inline: 5px;
  padding: 5px;
  border: 2px solid var(--theme);
  vertical-align: middle;
  user-select: none;
}

.toggle::before {
  content: '';
  position: absolute;
  top: 0;
  left: -1px;
  right: 0;
  width: 20px;
  height: 20px;
  border: 1px solid var(--theme);
  background: var(--theme);
  border-radius: 50%;
  transition: all .2s;
}

.toggle.on::before {
  left: 21px;
}
</style>