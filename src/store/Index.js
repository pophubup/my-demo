import { createStore } from 'vuex';
import product from './productModule/index.js';
import group from './groupModule/index.js';

const store = createStore({
    modules: {
        product: product,
        group :group
    }
});

export default store;