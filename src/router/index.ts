import Article1 from "@/components/articles/article-1.vue";
import ArticlesLayout from "@/layouts/ArticlesLayout.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";
import ServicesLayout from "@/layouts/ServicesLayout.vue";
import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";

const routes: RouteRecordRaw[] = [
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
    component: null,
    children: [
      {
        path: "",
        component: ArticlesLayout,
      },
      {
        path: "5-errores-comunes-dolores-cervicales-como-evitar",
        component: Article1,
      },
    ],
  },

  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
