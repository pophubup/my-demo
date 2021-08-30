export default {
    setProducts(state, payload) {
        state.products = payload;
    },
    InsertProduct(state, payload) {
        state.products.push(payload);
    }
}