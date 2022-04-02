import { createRouter, createWebHashHistory } from "vue-router";
import Welcome from '../views/Welcome.vue';
import Home from "../views/Home.vue";
import Stock from "../views/Stock.vue";
import Cart from "../views/Cart.vue";
import ProductDetail from "../views/ProductDetail.vue";
import PayForm from "../views/PayForm.vue";

const routes = [
  // {
  //   path: "/welcome",
  //   name: "Welcome",
  //   component: Welcome,
  // },
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
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    name: "Deatail",
    component: ProductDetail,
  },
  {
    path: "/cart/pay",
    name: "Pay",
    component: PayForm,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
});

export default router;
