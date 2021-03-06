import Vue from "vue";
import App from "./App.vue";
import "@/config/axios";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "./assets/style.scss";
import "./assets/forms.scss";
import "animate.css/animate.min.css";
import Vuelidate from "vuelidate";
import Toasted from "vue-toasted";

Vue.config.productionTip = false;

import "@/directives/visible";

Vue.use(Vuelidate);
Vue.use(Toasted, {
  duration: 2000
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
