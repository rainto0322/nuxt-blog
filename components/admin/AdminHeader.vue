<script setup lang="ts">

const menu = {
  'Dashboard': {
    'icon': 'tabler:calendar-heart',
    'path': '/',
  },
  'Article': {
    'icon': 'tabler:pencil-code',
    'path': '/article',
  },
  'Memo': {
    'icon': 'tabler:book',
    'path': '/memo',
  },
  'Album': {
    'icon': 'tabler:image-in-picture',
    'path': '/album',
  },
  'Comment': {
    'icon': 'tabler:message',
    'path': '/comment',
  },
  'Link': {
    'icon': 'tabler:plug-connected',
    'path': '/link',
  },
}

</script>

<template>
  <header class="menu">
    <NuxtLink class="link" activeClass="active" v-for="(value, key) in menu" :to="`/admin${value.path}`" >
      <Icon class="icon" :name="value.icon" />
      <span class="title">{{ key }}</span>
    </NuxtLink>
  </header>
</template>

<style scoped>
.menu {
  max-width: 100%;
  overflow: hidden;
  display: flex;
  background-color: var(--sub);
  border-radius: 1em;
}

.link {
  user-select: none;
  cursor: pointer;
  display: inline-block;
  padding: 1em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.link.active,
.link:hover {
  background-color: var(--theme);
  color: var(--major);
}

.link.active .icon,
.link:hover .icon {
  color: var(--major);
}

.title {
  padding-left: 8px;
  width: 100%;
  vertical-align: middle;
}

.icon {
  color: var(--theme);
  vertical-align: middle;
}

@media (min-width:480px) and (max-width:900px) {
  .link {
    text-align: center;
  }
}

@media (max-width:480px) {
  .menu{
    order: 2;
  }
  .link{
    width: 100%;
  }

  .icon {
    display: block;
    margin-inline: auto;
  }

  .title {
    display: none;
  }
}

@media (max-width:900px) {
  .icon {
    margin-inline: auto;
    display: block;
  }
}
</style>
