import { createRouter, createWebHistory } from "vue-router";
import main from "./components/pages/mainpage.vue";
import product from "./components/pages/productpage.vue";
import productInsert from './components/pages/productInsert.vue';
import productEdit from './components/pages/prdouctEdit.vue';
import NotFound from './components/NotFound.vue'
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: "/", redirect: "/main" },
        { path: "/main", component: main },
        { path: "/product", component: product },
        { path: "/productInsert", component: productInsert },
        { path: "/productEdit", component: productEdit },
        { path: "/:notFound(.*)", component: NotFound },
    ],
});

export default router;