import { defineStore } from "pinia";
import { ref } from "vue";

export const useShow = defineStore("Show", () => {
  const showAdmin = ref(false);
  const showAdminAcceuil = ref(false);
  const showModale = ref(false)
  const showSpinner = ref(false)
  const showDeconnexion = ref(false)
  const showErrorLogin = ref(false)

  function closeSpinner(){
    setTimeout(() => {
      showSpinner.value = false;
    }, 1000);
  }

  return {
    showAdmin,
    showAdminAcceuil,
    showModale,
    showSpinner,
    showDeconnexion,
    showErrorLogin,
    closeSpinner
  };
});
