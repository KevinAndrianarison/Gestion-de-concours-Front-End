<!-- :class="{ hover: status ? true : false }" -->

<template>
  <div class="main">
    <h1 class="titles">Modifier {{ titre }} !</h1>
    <div class="content">
      <div class="title">
        <li :class="{ hover: !status ? true : false }"  @click="toggletoLeft">🔄 Informations</li>
        <li :class="{ hover: status ? true : false }"  @click="toggletoRight">🔑 Mot de passe</li>
      </div>
      <div v-if="ongletleft" class="bottom">
        <div class="input">
          <label for="nom">🏷️ Votre nouveau nom : </label>
          <input class="nom" type="text" />
        </div>
        <div class="input">
          <label for="pseudo">👥 Votre nouveau pseudo :</label>
          <input class="pseudo" type="text" />
        </div>
        <div class="input">
          <label for="mdp">🛡️ Confirmer avec votre mot de passe : </label>
          <input class="mdp" type="password" />
        </div>
        <button class="btn">Modifier</button>
      </div>
      <div v-if="ongletright" class="bottom">
        <div class="input">
          <label for="nom">🔚 Ancien mot de passe : </label>
          <input class="nom" type="text" />
        </div>
        <div class="input">
          <label for="pseudo">🛡️ Nouveau mot de passe :</label>
          <input class="pseudo" type="text" />
        </div>
        <div class="input">
          <label for="mdp">🛡️ Confirmer votre nouveau mot de passe : </label>
          <input class="mdp" type="password" />
        </div>
        <button class="btn">Modifier</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const ongletleft = ref(true);
const titre = ref("vos informations");
const ongletright = ref(false);
const status = ref(false)

function toggletoLeft() {
  ongletleft.value = true;
  ongletright.value = false;
  status.value = false
  titre.value = "vos informations";
}

function toggletoRight() {
  ongletleft.value = false;
  status.value = true
  ongletright.value = true;
  titre.value = "votre mot de passe";
}
</script>

<style scoped src="../styles/Profil.css"></style>
