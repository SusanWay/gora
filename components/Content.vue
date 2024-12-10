<script setup lang="ts">
import { useStateStore } from '~/stores/state'

const state = useStateStore()
</script>

<template>
  <section class="absolute inset-0 sm:inset-auto bg-white px-5 py-7 text-center sm:left-1/2 sm:top-1/2 sm:mx-auto sm:max-h-max sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl ">
    <h1 class="text-[26px] font-extrabold"> Какой я сегодня программист: </h1>
    <p class="text-[18px]">
      Невдупленыш
    </p>
    <iframe src="https://giphy.com/embed/3oKIPnAiaMCws8nOsE" width="350" height="350" style="" frameBorder="0" class="mx-auto my-5" allowFullScreen />
    <Button class="rounded-xl border" @click="state.logout()">
      Выйти
    </Button>
  </section>
</template>

<style scoped>

</style>