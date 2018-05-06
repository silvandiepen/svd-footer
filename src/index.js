import Vue from "vue";
import svdFooter from "./components/svd-footer.vue";

export default {
  install(Vue, options = {}) {
    Vue.component("svd-footer", svdFooter);
  }
};

export { svdFooter };
