import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Datepicker from "vuejs-datepicker";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

Vue.config.productionTip = false;

config.autoAddCss = false;
library.add(fas);

Vue.component("DatePicker", Datepicker);
Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
