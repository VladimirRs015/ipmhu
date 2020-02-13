import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//Reset Margin and Paddings
import "./assets/css/resetPadding.css";
import "./assets/css/colors.css";
import "./assets/css/generalStyles.css";
import session from 'vue-session'
import resources from 'vue-resource'
Vue.use(session)
Vue.use(resources)
//Libraries
//Aos
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;
new Vue({
  created() {
    AOS.init();
    
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
