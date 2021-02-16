import Vue from "vue";
import router from "./routes"
// import VueParticles from 'vue-particles'
// Vue.use(VueParticles)

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";


// app config

// Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
