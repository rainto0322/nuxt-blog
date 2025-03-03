<script setup lang="ts">

const props = defineProps({
  header: Object as PropType<string[]>,
  list: Object as PropType<string[]> | any,
})

const header = computed(() => {
  if (props.header) return props.header
  if (props.list.length > 0) {
    return Object.keys(props.list[0]);
  }
  return []
})

</script>

<template>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th v-for="key in header">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of list">
          <td v-for="data in item">{{ data }}</td>
          <slot />
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrap {
  max-width: 100%;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: var(--sub);
  font-size: 1.2em;
}
tbody{
  font-size: .9rem;
}
tr:nth-child(even){
  background-color: var(--sub);
}

th,
td {
  padding: 15px 20px;
  text-align: left;
}
</style>