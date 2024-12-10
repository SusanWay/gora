<script setup lang="ts">
import { useStateStore } from '~/stores/state'

const state = useStateStore()

onMounted(() => {
  state.load()
})
</script>

<template>
  <FormLogin v-show="!state.isAuth" />
  <Content v-if="state.isAuth" />
</template>

<style scoped>

</style>
