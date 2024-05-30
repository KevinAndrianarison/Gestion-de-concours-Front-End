<script setup>
import { ref, onBeforeMount } from "vue";
import { useShow } from "@/stores/Show";
import { useInformation } from "@/stores/Information";
import { useAU } from "@/stores/AU";
import { useCandidat } from "@/stores/Candidat";

const au = useAU();
const infos = useInformation();
const candidat = useCandidat();

onBeforeMount(() => {
  infos.getInformations();
  au.getAU();
});

const show = useShow();

const validiteRegex = ref(false);

function showmodalefunct() {
  show.showModale = true;
}

function regexEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  validiteRegex.value = emailRegex.test(candidat.email);
}
</script>

<template>
  <div class="head">
    <div class="logpEsP">
      <img src="../assets/logo_espa.png" alt="logo ESP" />
    </div>
    <h2>📝 Inscription</h2>
    <button @click="showmodalefunct" class="buttonlogin">👤 Connexion</button>
  </div>
  <div class="first">
    <div class="descri">
      <div class="mt-5">
        <p class="one">
          La pré-inscription pour le concours d'entrée
          <b class="CTCI">Première année</b> est maintenant ouverte !
        </p>
      </div>
      <div class="two mt-5">
        <h1 class="one">
          Pour l'année universitaire<b class="tree">{{ infos.AU }}</b
          >, Le concours débutera le
          <b class="tree">{{ infos.date_debut }}</b> et se terminera le
          <b class="tree">{{ infos.date_fin }} </b>.
        </h1>
      </div>
    </div>
    <div class="form">
      <h1 class="CANDIDATER mt-5">CANDIDATEZ dès maintenant !</h1>
      <div class="inputAll">
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-5"
            >Votre Nom complet</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            autocomplete="off"
            v-model="candidat.nomComplet"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-3"
            >Votre numéro de téléphone</label
          >
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            autocomplete="off"
            v-model="candidat.numeroPhone"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-3"
            >Votre e-mail (facultatif)</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputPassword1"
            autocomplete="off"
            @input="regexEmail"
            v-model="candidat.email"
          />
          <p v-if="!validiteRegex && candidat.email" class="invalide">
            Votre e-mail est invalide !
          </p>
        </div>
      </div>
      <button
        @click="candidat.postCandidats"
        type="button"
        class="btn btn-primary mt-4"
        :disabled="!candidat.numeroPhone || !candidat.nomComplet"
      >
        Je soummets ma candidature
      </button>
    </div>
  </div>
  <div class="second">
    <div class="comment">
      <p>Plus d'informations ?</p>
      <p class="reponse">Voici des détails supplémentaires</p>
    </div>
    <div class="question pb-5 accordion" id="accordionExample">
      <div class="accordion-item mt-5">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Quelles sont les offres de formations ?
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
          style=""
        >
          {{ infos.formations }}
        </div>
      </div>
      <div class="accordion-item mt-5">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Quelles sont les conditions d'accès ?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
          style=""
        >
          {{ infos.conditions }}
        </div>
      </div>
      <div class="accordion-item mt-5">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTree"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Où se situent les centres de concours ?
          </button>
        </h2>
        <div
          id="collapseTree"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
          style=""
        >
          {{ infos.centres }}
        </div>
      </div>
      <div class="accordion-item mt-5">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Quelles sont les épreuves ?
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
          style=""
        >
          {{ infos.epreuves }}
        </div>
      </div>
      <div class="accordion-item mt-5">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Combien coûte le droit de concours ?
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
          style=""
        >
          {{ infos.droits }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped src="../styles/Acceuil.css"></style>
