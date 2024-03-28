import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import { useUrl } from "@/stores/Url";
import { useMessages } from "./Messages";
import { useShow } from "./Show";

export const useAU = defineStore("AU", () => {
  const URL = useUrl().url;
  const AU = ref([]);
  const idAU = ref(null)
  const newAU = ref(null)
  const Messages = useMessages()
  const show = useShow()

  function getAU() {
    axios
      .get(`${URL}/api/AU`)
      .then((response) => {
        AU.value = response.data.data;
      })
      .catch((error) => {
        console.error("Erreur de GET AU : ", error);
      });
  }

  function postAU(){

    show.showSpinner = true
    axios
    .post(`${URL}/api/AU`, {
      au : newAU.value
    })
    .then(() => {
      getAU()
      show.closeSpinner()
      Messages.messageSucces = "Nouvelle année ajoutée ! "
      setTimeout(() => {
        Messages.messageSucces = "";
      }, 3000);

    })
    .catch((error) => {
      console.error("Erreur de POST : ", error);
      show.closeSpinner()
      Messages.messageError = "Erreur d'ajout ! "
      setTimeout(() => {
        Messages.messageError = "";
      }, 3000);
    })
    newAU.value = ""
  }

  return {
    getAU,
    postAU,
    AU,
    idAU,
    newAU
    
  };
});
