<template>
<div class="overlay" v-if="show.showSpinner">
    <div class="spinner-4"></div>
  </div>
</template>

<script setup>
import { useShow } from '@/stores/Show';
const show = useShow()

</script>

<style scoped src="../styles/Spinner.css">

</style>