import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//Reset Margin and Paddings
import "./assets/css/resetPadding.css";
import "./assets/css/colors.css";
import "./assets/css/generalStyles.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
