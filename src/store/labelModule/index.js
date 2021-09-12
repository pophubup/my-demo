import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
const labelModule = {
  namespaced: true,
  state: {
    labels: [],
  },
  getters: getters,
  actions: actions,
  mutations: mutations,
};

export default labelModule;
