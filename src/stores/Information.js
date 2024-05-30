import { defineStore } from "pinia";
import { ref } from "vue";
import { useUrl } from "@/stores/Url";
import axios from "axios";
import { useShow } from "@/stores/Show";
import { useMessages } from "./Messages";

export const useInformation = defineStore("Information", () => {
  const show = useShow();
  const Messages = useMessages();
  const AU = ref(null);
  const centres = ref("");
  const conditions = ref("");
  const date_debut = ref(null);
  const date_fin = ref(null);
  const droits = ref("");
  const epreuves = ref("");
  const formations = ref("");
  const URL = useUrl().url;

  function putInfos() {
    const formData = {
      AU: AU.value,
      centres: centres.value,
      date_debut: date_debut.value,
      date_fin: date_fin.value,
      conditions: conditions.value,
      droits: droits.value,
      epreuves: epreuves.value,
      formations: formations.value,
    };
    axios
      .put(`${URL}/api/informations/1`, formData)
      .then(() => {
        getInformations();
        Messages.messageSucces = "Modification effectuée !";
        setTimeout(() => {
          Messages.messageSucces = "";
        }, 3000);
      })
      .catch((error) => {
        console.error("Erreur de PUT : ", error);
        Messages.messageError = "Modification echoué !";
        setTimeout(() => {
          Messages.messageError = "";
        }, 3000);
      });
    AU.value = null;
    centres.value = "";
    date_debut.value = null;
    date_fin.value = null;
    conditions.value = "";
    droits.value = "";
    epreuves.value = "";
    formations.value = "";
  }

  function getInformations() {
    show.showSpinner = true;
    axios
      .get(`${URL}/api/informations`)
      .then((response) => {
        let infos = response.data.data;
        AU.value = infos.AU;
        centres.value = infos.centres;
        conditions.value = infos.conditions;
        date_debut.value = infos.date_debut.split("-").reverse().join("/");
        date_fin.value = infos.date_fin.split("-").reverse().join("/");
        droits.value = infos.droits;
        epreuves.value = infos.epreuves;
        formations.value = infos.formations;
        show.closeSpinner();
      })
      .catch((error) => {
        show.closeSpinner();
        console.error("Erreur de GET infos : ", error);
      });
  }

  return {
    getInformations,
    AU,
    centres,
    conditions,
    date_debut,
    date_fin,
    droits,
    epreuves,
    formations,
    putInfos,
  };
});
