import getters from "./getters";
import actions from "./actions";
import mutations from './mutations';
const productModule = {
    namespaced: true,
    state: {
        products: []
    },
    getters: getters,
    actions: actions,
    mutations: mutations
};

export default productModule;