import { getProducts, InsertPircture } from '../firebase';

export default {
    async loadProducts(context, payload) {

        if (!payload.forceRefresh) {
            return;
        }

        const products = await getProducts();
        console.log(products)
        context.commit('setProducts', products);
    },
    async insertProducts(context, payload) {
        let data = [];
        console.log(payload)
        payload.forEach(g => {
            data.push({
                id: '0',
                name: g.name,
                file: g
            });

        });
        await InsertPircture(data);
        // await InsertProducts(data)
    }
}