import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Homepage",
    meta: { title: "Spatial4D" },
    component: () => import("@/views/homepage.vue"),
  },
  {
    path: "/test",
    name: "范例",
    meta: { title: "fanli" },
    component: () => import("@/views/test.vue"),
  },
  {
    path: "/:cathAll(.*)",
    name: "404NotFound",
    meta: { title: "404 Not Found" },
    component: () => import("@/views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_PATH),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("Navigating from:", from.path, "to:", to.path);
  next(); // 别忘了调用 next()
});

export default router;
