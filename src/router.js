import { createRouter, createWebHistory } from "vue-router";
import main from "./components/pages/mainpage.vue";
import product from "./components/pages/productpage.vue";
import NotFound from './components/NotFound.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/main" },
        { path: "/main", component: main },
        { path: "/product", component: product },
        { path: "/:notFound(.*)", component: NotFound },
    ],
});

export default router;