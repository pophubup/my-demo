export default {
    setProducts(state, payload) {
        state.products = payload;
    },
    InsertProduct(state, payload) {
        state.products.concat(payload);
    }
}