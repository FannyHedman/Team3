// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
      },
      {
        path: "/dam",
        name: "Dam",
        component: () => import("@/views/DamView.vue"),
      },
      {
        path: "/herr",
        name: "Herr",
        component: () => import("@/views/HerrView.vue"),
      },
      {
        path: "/barn",
        name: "Barn",
        component: () => import("@/views/BarnView.vue"),
      },
      {
        path: "/about",
        name: "About",
        component: () => import("@/views/AboutView.vue"),
      },
      {
        path: "/kontakt",
        name: "Kontakt",
        component: () => import("@/views/KontaktView.vue"),
      },
      {
        path: "/varukorg",
        name: "Varukorg",
        component: () => import("@/views/VarukorgView.vue"),
      },
      {
        path: '/product',
        name: 'Product',
        component: () => import('@/views/ProductView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
