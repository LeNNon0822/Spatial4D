import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Homepage",
    meta: { title: "Spatial4D" },
    component: () => import("@/views/homepage.vue"),
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
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return new Promise((resolve) => {
      // 给生产环境更长时间
      setTimeout(() => {
        resolve({ top: 0, behavior: "auto" });
      }, 100);
    });
  },
});

router.beforeEach((to, from, next) => {
  console.log("Navigating from:", from.path, "to:", to.path);
  next(); // 别忘了调用 next()
});

export default router;
