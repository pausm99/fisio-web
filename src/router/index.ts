import {
  type RouteRecordRaw,
  createRouter,
  createWebHistory,
} from "vue-router";
import ServicesLayout from "@/layouts/ServicesLayout.vue";
import HomeLayout from "@/layouts/HomeLayout.vue";
import ArticleLayout from "@/layouts/ArticleLayout.vue";

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
    children: [
      {
        path: "/articulo-1",
        component: ArticleLayout,
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
