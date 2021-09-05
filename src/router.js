import { createRouter, createWebHistory } from "vue-router";
import main from "./components/pages/mainpage.vue";
import product from "./components/pages/productpage.vue";
import prdouctInsert from './components/pages/prdouctInsert.vue';
import NotFound from './components/NotFound.vue'
import contact from './components/pages/contact.vue';
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: "/", redirect: "/main" },
        { path: "/main", component: main },
        { path: "/product", component: product },
        { path: "/prdouctInsert", component: prdouctInsert },
        { path: "/contact", component: contact },
         { path: "/:notFound(.*)", component: NotFound }
    ],
});

export default router;