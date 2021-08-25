import { createRouter, createWebHistory } from "vue-router";
import main from "./components/pages/mainpage.vue";
import NotFound from './components/NotFound.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/main" },
        { path: "/main", component: main },
        { path: "/:notFound(.*)", component: NotFound },
    ],
});

export default router;