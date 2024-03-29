import HomePage from "../pages/HomePage.vue";
import AProposPage from "../pages/AProposPage.vue";
import ParcoursPage from "../pages/ParcoursPage.vue";
import RealisationsPage from "../pages/RealisationsPage.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: HomePage },
  { path: "/APropos", component: AProposPage },
  { path: "/Parcours", component: ParcoursPage },
  { path: "/Realisations", component: RealisationsPage },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
