import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Maps from "@/pages/Maps.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/maps",
    name: "Maps",
    component: Maps,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
