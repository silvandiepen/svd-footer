// import styleSheet from "./index.scss";

import Vue from "vue";
import { SvdFooter } from "./src/Footer.vue";

export default {
  install(Vue, options = {}) {
    Vue.component("svd-footer", SvdFooter);
  }
};

export { SvdFooter };
