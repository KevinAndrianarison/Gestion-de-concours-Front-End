<script setup>
import NavigationBar from "./NavigationBar.vue";
import { useShow } from "@/stores/Show";

const show = useShow();

function deconnexion() {
  show.showDeconnexion = true
}
</script>

<template>
  <div class="main">
    <NavigationBar :deconnexion="deconnexion" />
    <router-view></router-view>
  </div>
</template>

<style scoped>
.main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
