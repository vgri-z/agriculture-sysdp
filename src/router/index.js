import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("../views/login/login.vue"),
  },
  {
    path: "/index",
    component: () => import("../views/index/index.vue"),
  },
  {
    path: "/data-summary",
    component: () => import("../views/data-summary/data-summary.vue"),
  },
  {
    path: "/area-manage",
    component: () => import("../views/area-manage/area-manage.vue"),
  },
  {
    path: "/always-monitor",
    component: () => import("../views/always-monitor/always-monitor.vue"),
  },
  {
    path: "/machine-monitor",
    component: () => import("../views/machine-monitor/machine-monitor.vue"),
  },
  {
    path: "/weather-station",
    component: () => import("../views/weather-station/weather-station.vue"),
  },
  {
    path: "/car-use",
    component: () => import("../views/car-use/car-use.vue"),
  },
  {
    path: "/real-time-monitor",
    component: () => import("../views/real-time-monitor/real-time-monitor.vue"),
  },
  {
    path: "/farming-waste",
    component: () => import("../views/farming-waste/farming-waste.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
