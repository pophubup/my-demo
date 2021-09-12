import { createRouter, createWebHistory } from "vue-router";
import main from "./components/pages/mainpage.vue";
import product from "./components/pages/products/productpage.vue";
import prdouctInsert from "./components/pages/products/prdouctInsert.vue";
import productEdit from "./components/pages/products/productEdit.vue";
import NotFound from "./components/NotFound.vue";
import contact from "./components/pages/contact.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", component: main },
    { path: "/product", component: product },
    { path: "/prdouctInsert", component: prdouctInsert },
    { path: "/productEdit", component: productEdit },
    { path: "/contact", component: contact },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
