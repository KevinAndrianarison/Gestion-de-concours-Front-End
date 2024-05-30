import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useUrl } from "@/stores/Url";
import { useAU } from "./AU";
import { useInformation } from "./Information";
import { useMessages } from "@/stores/Messages";
import { useShow } from "@/stores/Show";

export const useCandidat = defineStore("Candidat", () => {
  const Messages = useMessages();
  const show = useShow();
  const URL = useUrl().url;
  const au = useAU();
  const infos = useInformation();
  const nomComplet = ref("");
  const numeroPhone = ref(null);
  const email = ref("");
  const listeCandidat = ref([]);
  const listeCandidatRecherche = ref([]);
  const idannee = ref(null);

  function postCandidats() {
    show.showSpinner = true;
    let index = au.AU.map((au) => {
      return au.AU;
    }).indexOf(infos.AU);

    let formData = {
      nom: nomComplet.value,
      telephone: numeroPhone.value,
      email: email.value,
      idAU: au.AU[index].idAU,
    };
    axios
      .post(`${URL}/api/candidat`, formData)
      .then(() => {
        show.closeSpinner();
        Messages.messageSucces = "Inscription effectuée !";
        setTimeout(() => {
          Messages.messageSucces = "";
        }, 3000);
      })
      .catch((error) => {
        console.error("Erreur de POST : ", error);
        show.closeSpinner();
        Messages.messageError = "Inscription echoué !";
        setTimeout(() => {
          Messages.messageError = "";
        }, 3000);
      });

    numeroPhone.value = null;
    nomComplet.value = "";
    email.value = "";
  }

  function filterInput(Search) {
    if (!Search) {
      getCandidat(idannee.value);
    }
  }

  function filtrer(Search) {
    listeCandidat.value = listeCandidat.value.filter((list) => {
      return list.nom_candidat.match(Search);
    });

    if (!Search) {
      getCandidat(idannee.value);
    }
  }

  function getCandidat(id) {
    show.showSpinner = true;
    axios
      .get(`${URL}/api/candidat/${id}`)
      .then((response) => {
        listeCandidat.value = response.data.data;
        console.log(response.data.data);
        show.closeSpinner();
      })
      .catch((error) => {
        console.error("Erreur de GET AU : ", error);
        show.closeSpinner();
      });
  }

  return {
    postCandidats,
    getCandidat,
    filtrer,
    filterInput,
    nomComplet,
    numeroPhone,
    email,
    listeCandidatRecherche,
    listeCandidat,
    idannee,
  };
});
