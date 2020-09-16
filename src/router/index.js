import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/inschrijven",
    name: "inschrijven",
    component: () =>
      import(/* webpackChunkName: "Inschrijven" */ "@/views/Inschrijven.vue"),
    meta: {
      visible: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;