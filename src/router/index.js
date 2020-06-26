import Vue from "vue";
import VueRouter from "vue-router";
import BeanCreate from "../views/BeanCreate.vue";
import BeanCreateAdvert from "../views/BeanCreateAdvert.vue";
import Landing from "../views/Landing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/admin",
    name: "Admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
    children: [
      {
        path: "beancreate",
        component: BeanCreate,
      },
      {
        path: "createad",
        component: BeanCreateAdvert,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
