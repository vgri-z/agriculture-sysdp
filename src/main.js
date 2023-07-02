import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import store from "./store";
import dataV from "@jiaminghi/data-view";

import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/index.less";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(dataV);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
