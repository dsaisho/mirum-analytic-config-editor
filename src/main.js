import 'babel-polyfill'
import Vuetify from "vuetify";
import Vue from "vue";
import "vuetify/dist/vuetify.min.css";

import App from "./App.vue";
import router from "./router";
import { store } from "./store.js";

Vue.use(Vuetify);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
