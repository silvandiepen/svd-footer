import { mergeSettings } from "./settings";
//
import { Row, Column } from "./components/grid";
import { MenuContainer, MenuItem, MenuGroup, MenuTrigger } from "./components/menu";

export default {
  install(Vue, options = {}) {
    mergeSettings(options);
    Vue.component("row", Row);
    Vue.component("column", Column);
    Vue.component("menu-container", MenuContainer);
    Vue.component("menu-item", MenuItem);
    Vue.component("menu-group", MenuGroup);
    Vue.component("menu-trigger", MenuTrigger);
  },

  settings(settings) {
    mergeSettings(settings);
  }
};

export { Row, Column, MenuContainer, MenuItem, MenuGroup, MenuTrigger };
