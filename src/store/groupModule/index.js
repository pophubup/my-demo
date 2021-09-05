import getters from "./getters";
import actions from "./actions";
import mutations from './mutations';
const groupModule = {
    namespaced: true,
    state: {
        groups: []
    },
    getters: getters,
    actions: actions,
    mutations: mutations
};

export default groupModule;