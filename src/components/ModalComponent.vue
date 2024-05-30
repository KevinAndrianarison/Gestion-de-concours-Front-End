<script setup>
import { useShow } from "@/stores/Show";
import { useUrl } from "@/stores/Url";
import axios from "axios";
import { ref } from "vue";
const show = useShow();
const URL = useUrl().url;

const username = ref("");
const mdp = ref(null);

function closemodale() {
  show.showModale = false;
  show.showErrorLogin = false;
}

function login() {
  const formData = {
    username: username.value,
    mdp: mdp.value,
  };
  axios
    .post(`${URL}/api/login`, formData)
    .then((response) => {
      if (response.data.status === "error") {
        show.showErrorLogin = true;
      } else {
        let token = response.data;
        localStorage.setItem("token", token);
        if (parseJWT().identifiant_admin === "admin") {
          show.showModale = false;
          show.showAdminAcceuil = false;
          show.showAdmin = true;
          show.showErrorLogin = false;
        }
      }
    })
    .catch((error) => {
      console.error("Erreur de POST : ", error);
      show.showErrorLogin = true;
    });
  username.value = "";
  mdp.value = null;
}

function parseJWT() {
  let tokenfromstorage = localStorage.getItem("token");
  let base64Payload = tokenfromstorage.split(".")[1];
  return JSON.parse(window.atob(base64Payload));
}
</script>

<template>
  <Transition>
    <div class="showModal" v-if="show.showModale">
      <div class="formModal">
        <div class="divbtn">
          <button @click="closemodale" type="button" class="Annuller">X</button>
        </div>

        <h1 class="login">🔐 Connexion !</h1>
        <label for="task" class="form-label mt-4">Identifiant : </label>
        <input
          type="text"
          class="form-control"
          id=""
          aria-describedby=""
          v-model="username"
        />
        <div class="form-group">
          <label for="exampleTextarea" class="form-label mt-4"
            >Mot de passe :</label
          >
          <input
            type="password"
            class="form-control"
            id=""
            aria-describedby=""
            v-model="mdp"
          />
        </div>
        <p v-if="show.showErrorLogin" class="erreur mt-1">
          Veuillez vérifier vos information
        </p>
        <div class="valider">
          <button
            type="submit"
            @click="login"
            class="Modifier btn btn-primary mt-4"
          >
            Connexion
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped src="../styles/Modale.css"></style>
