<script setup>
import { onBeforeMount } from "vue";
import { useInformation } from "@/stores/Information";
const infos = useInformation();

onBeforeMount(() => {
  infos.getInformations();
});
</script>

<template>
  <div class="container">
    <header>Enregister les informations du concour !</header>

    <form action="#">
      <div class="form first">
        <div class="details personal">
          <div class="fields">
            <div class="input-field">
              <label>Les Formations</label>
              <textarea
                class="form-control"
                placeholder="Entrer les formations"
                required
                v-model="infos.formations"
              ></textarea>
            </div>

            <div class="input-field">
              <label>Les conditions</label>
              <textarea
                class="form-control"
                placeholder="Entrer les conditions"
                v-model="infos.conditions"
                required
              ></textarea>
            </div>

            <div class="input-field">
              <label>Epreuves</label>
              <textarea
                class="form-control"
                placeholder="Entrer les épreuves"
                v-model="infos.epreuves"
                required
              ></textarea>
            </div>

            <div class="input-field">
              <label>Centres</label>
              <textarea
                placeholder="Entrer les centres"
                class="form-control"
                v-model="infos.centres"
                required
              ></textarea>
            </div>

            <div class="input-field">
              <label>Droits</label>
              <textarea
                placeholder="Les droits d'inscriptions"
                class="form-control"
                v-model="infos.droits"
                required
              ></textarea>
            </div>

            <div class="input-field">
              <label>Année</label>
              <input
                type="number"
                class="form-control"
                placeholder="Année du concours"
                v-model="infos.AU"
                required
              />
            </div>
          </div>
        </div>

        <div class="details ID">
          <div class="fields">
            <div class="input-field">
              <label>Date de debut</label>
              <input
                v-model="infos.date_debut"
                type="date"
                placeholder="Enter your issued date"
                required
              />
            </div>

            <div class="input-field">
              <label>Date de fin</label>
              <input
                v-model="infos.date_fin"
                type="date"
                placeholder="Enter expiry date"
                required
              />
            </div>

            <div @click="infos.putInfos" class="input-field fieldsBtn">
              <br>
              <button class="nextBtn">
                <span class="btnText">Valider</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped src="../styles/Information.css"></style>
