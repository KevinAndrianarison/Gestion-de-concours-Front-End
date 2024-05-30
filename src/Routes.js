import WorkspaceInformation from "./components/WorkspaceInformation";
import WorkSpaceListeEtudinat from "./components/WorkSpaceListeEtudinat";
import WorkspaceProfil from "./components/WorkspaceProfil.vue";

export default [
  { path: "/", component: WorkspaceInformation },
  { path: "/liste", component: WorkSpaceListeEtudinat },
  { path: "/profil", component: WorkspaceProfil },
];
