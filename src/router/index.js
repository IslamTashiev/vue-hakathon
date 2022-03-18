import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Stock from "../views/Stock.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stock",
    name: "Stock",
    component: Stock,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
