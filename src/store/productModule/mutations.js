export default {
    setProducts(state, payload) {
        state.products = payload;
    },
    setResponse(state, payload) {
         console.log(payload)
        state.response.isSuccess = payload.isSuccess
        state.response.message = payload.message
    }
}