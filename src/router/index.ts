import Article1 from "@/components/articles/article-1.vue";
import ArticlesLayout from "@/layouts/ArticlesLayout.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";
import ServicesLayout from "@/layouts/ServicesLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    component: HomeLayout,
  },
  {
    path: "/servicios",
    component: ServicesLayout,
  },
  {
    path: "/blog",
    component: ArticlesLayout,
  },
  {
    path: "/blog/5-errores-comunes-dolores-cervicales-como-evitar",
    component: Article1,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

// Si aún quieres crear el router, lo puedes hacer
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
