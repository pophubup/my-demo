import { GetFirstDataFromEveryGroup, InsertProducts } from '../APIFunctions'

export default {
    async loadProducts(context, payload) {
        if (!payload.forceRefresh) {
            return;
        }
        const products = await GetFirstDataFromEveryGroup();
        console.log(products)
        context.commit('setProducts', products);
    },
    async insertProducts(context, payload) {
      for(const[key, value] of payload){
          console.log(`key:${key} value:${value}`);
       };
       const result = await InsertProducts(payload);
       context.commit('setResponse', result);

    }
}