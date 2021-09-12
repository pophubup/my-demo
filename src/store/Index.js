import { createStore } from "vuex";
import product from "./productModule/index.js";
import group from "./groupModule/index.js";
import label from "./labelModule/index";
const store = createStore({
  modules: {
    product: product,
    group: group,
    label: label,
  },
});

export default store;
