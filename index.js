// import styleSheet from "./index.scss";

import Vue from "vue";
import SvdFooter from "./src/Footer.vue";
// import Logo from "./src/components/Logo.vue";

export default {
  install(Vue, options) {
    // Vue.component("logo", Logo);
    Vue.component("svd-footer", SvdFooter);
  }
};
