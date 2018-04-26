import Vue from "vue";
import svdFooter from "./svd-footer/index.vue";

module.exports = {
  install: function(Vue, options) {
    Vue.component("svd-footer", svdFooter);
  }
};
