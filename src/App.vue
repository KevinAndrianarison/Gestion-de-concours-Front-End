<script setup>
import WorkspaceAcceuil from "./components/WorkspaceAcceuil.vue";
import WorkspaceAdmin from "./components/WorkspaceAdmin.vue";
import { useShow } from "@/stores/Show";
import { onBeforeMount } from "vue";
import ModalComponent from "./components/ModalComponent.vue";
import SpinnerComponent from "./components/SpinnerComponent.vue";
import DeconnexionComponent from "./components/DeconnexionComponent.vue";
import MessageComponent from './components/MessageComponent.vue'

const show = useShow();

onBeforeMount(() => {
  if (localStorage.getItem("token")) {
    show.showAdmin = true;
  } else {
    show.showAdminAcceuil = true;
  }
});
</script>

<template>
  <WorkspaceAcceuil v-if="show.showAdminAcceuil"></WorkspaceAcceuil>
  <WorkspaceAdmin v-if="show.showAdmin"></WorkspaceAdmin>
  <Teleport to="body">
    <ModalComponent></ModalComponent>
  </Teleport>
  <Teleport to="body">
    <SpinnerComponent></SpinnerComponent>
  </Teleport>
  <Teleport to="body">
    <DeconnexionComponent></DeconnexionComponent>
  </Teleport>
  <Teleport to="body">
    <MessageComponent></MessageComponent>
  </Teleport>
</template>

<style scoped></style>
