<script setup lang="ts">
const toast = useToast()
const list = ref(toast.toasts)
function remove(id: string | number) {
  toast.remove(id)
}
</script>

<template>
  <div class="toast">
    <div v-for="item in list" class="item">
      <div class="cont">
        <div class="icon" v-if="item.icon">
          <img :src="item.icon" alt="">
        </div>
        <div class="box">
          <div class="meta">
            <div class="title" v-if="item.title">{{ item.title }}</div>
            <span style="margin-left: auto;" @click="remove(item.id)">
              <img src="/assets/icon/close.svg" alt="">
            </span>
          </div>
          <div class="msg">{{ item.msg }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes progress {
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
}

@keyframes closeToast {
  from {
    opacity: 1;
    top: 0;
  }

  to {
    opacity: 0;
    top: 1em;
  }
}

.toast {
  display: block;
  width: 250px;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
}

.item {
  margin: 1em;
  border-radius: 1em;
  background-color: var(--major);
  border: 1px solid var(--theme);
  /* user-select: none; */
  cursor: pointer;
  position: relative;
  animation: closeToast .5s 2s ease forwards;
  overflow: hidden;
}

.item::after {
  content: '';
  background-color: var(--theme);
  display: block;
  width: 100%;
  height: 3px;
  animation: progress 2s ease forwards;
}

.cont {
  display: flex;
  padding: 10px 8px;
  align-items: center;
}

.icon img {
  width: 30px;
  height: 30px;
  margin-right: 5px;
  vertical-align: middle;
}

.box {
  width: 100%;
}

.meta {
  display: flex;
  justify-content: space-between;
}

.title {
  font-weight: bold;
  text-transform: capitalize;
}
</style>