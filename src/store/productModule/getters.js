export default {
    getProducts(state) {
        return state.products;
    },
    getMessageFromApi(state) {
        return state.response;
    }
};