<template>
  <div class="body">
    <div class="head">
      <select id="select" @change="candidat.getCandidat(candidat.idannee)" v-model="candidat.idannee" name="select" required>
        <option disabledselected >Choisissez l'année</option>
        <option :key="i" v-for="(annee, i) in au.AU" :value="annee.idAU">
          {{ annee.AU }}
        </option>
      </select>
      <div class="second">
        <input
          type="number"
          class="form-control"
          placeholder="Nouvelle année"
          required
          v-model="au.newAU"
        />
        <button @click="au.postAU" :disabled="!au.newAU" class="nextBtn">
          <span class="btnText">Valider</span>
        </button>
      </div>
    </div>
    <div class="table mt-5">
    <div class="find">
      <input
        type="text"
        @input="candidat.filterInput(Search)"
        v-model="Search"
        class="recherche form-control"
        id=""
        aria-describedby="emailHelp"
        placeholder="Rechercher un nom ici..."
      />
      <button @click="candidat.filtrer(Search)" class="fnd"> Rechercher</button>
    </div>
      <div class="listtitle mt-4">
        <h5>Liste des candidats :</h5>
        <div class="array mask d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12">
                <div class="table-responsive bg-white">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Nom complet</th>
                        <th scope="col">Téléphone</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr :key="i" v-for="(cd, i) in candidat.listeCandidat">
                        <th class="scope" scope="row" style="color: #666666">{{ cd.nom_candidat }}</th>
                        <td class="scope">0{{ cd.telephone_candidat }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useAU } from "@/stores/AU";
import { useCandidat } from "@/stores/Candidat";

const au = useAU();
const candidat = useCandidat()
const Search = ref("")


onBeforeMount(() => {
  candidat.idannee = "Choisissez l'année"
  au.getAU();
});
</script>

<style scoped src="../styles/Liste.css"></style>
