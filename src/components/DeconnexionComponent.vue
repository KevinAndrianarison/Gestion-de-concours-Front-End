<script setup>
import { useShow } from "@/stores/Show";
const show = useShow();

function closemodale() {
  show.showDeconnexion = false;
}

function logout() {
  localStorage.removeItem("token");
  show.showAdminAcceuil = true;
  show.showAdmin = false;
  show.showDeconnexion = false;
}
</script>

<template>
  <Transition>
    <div class="showModal" v-if="show.showDeconnexion">
      <div class="formModal">
        <h6 class="login">Voulez-vous vraiment vous deconnecter !</h6>
        <div class="valider">
          <button
            type="submit"
            @click="logout"
            class="Modifier btn btn-primary mt-5"
          >
            OUI
          </button>
          <button
            @click="closemodale"
            type="button"
            class="Annuller btn btn-primary mt-5"
          >
            NON
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped src="../styles/Deconnexion.css"></style>
