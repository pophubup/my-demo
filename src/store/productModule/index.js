import getters from "./getters";
import actions from "./actions";
import mutations from './mutations';
const productModule = {
    namespaced: true,
    state: {
        products: [],
        response: {
            isSuccess: false,
            message: ""
        }
    },
    getters: getters,
    actions: actions,
    mutations: mutations
};

export default productModule;