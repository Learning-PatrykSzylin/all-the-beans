import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Datepicker from "vuejs-datepicker";

Vue.config.productionTip = false;

Vue.component("DatePicker", Datepicker);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
