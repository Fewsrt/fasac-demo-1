import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMqtt from "vue-mqtt";
import vuetify from "./plugins/vuetify";

Vue.use(VueMqtt, "ws://192.168.88.221:9001"), { username: "", password: "" };

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
