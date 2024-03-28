<script setup>
import { defineProps } from "vue";
defineProps(["deconnexion"]);
</script>

<template>
  <nav>
    <div class="logo">Admin - Dash</div>
    <div>
      <input type="checkbox" id="checkbox" />
      <label for="checkbox" id="icon">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <ul>
        <li class="li"><router-link to="/">Informations</router-link></li>
        <li class="li"><router-link to="/liste">Listes</router-link></li>
        <li>
          <button @click="deconnexion" class="buttonlogin">Déconnexion</button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped src="../styles/Navigation.css">
</style>
