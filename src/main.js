import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMqtt from "vue-mqtt";

Vue.use(VueMqtt, "ws://fasacserver.ddns.net:1883"),
  { username: "fasac", password: "Fasac050800" };

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
