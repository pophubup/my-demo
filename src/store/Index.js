import { createStore } from 'vuex';
import product from './productModule/index.js';


const store = createStore({
    modules: {
        product: product,

    }
});

export default store;