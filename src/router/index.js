import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Control from "../views/Control.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Test from "../views/Test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mqtt",
    name: "mqtt",
    component: Control
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/test",
    name: "test",
    component: Test
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
