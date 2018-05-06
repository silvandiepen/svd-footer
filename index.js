import Vue from "vue";
import { SvdFooter } from "./src/main.js";

export default {
  install(Vue, options = {}) {
    Vue.component("svd-footer", SvdFooter);
  }
};

export { SvdFooter };
