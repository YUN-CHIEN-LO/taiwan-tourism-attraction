import { createRouter, createWebHistory } from "vue-router";
import FrontLayout from "@/components/FrontLayout.vue";

let history = createWebHistory();
let routes = [
  {
    path: "/",
    name: "frontDashboard",
    redirect: "/home",
    component: FrontLayout,
    children: [
      {
        path: "home",
        name: "frontHome",
        component: () => import("@/views/FrontIndex.vue"),
      },
      {
        path: "result",
        name: "frontResult",
        component: () => import("@/views/FrontResult.vue"),
      },
    ],
  },
];

export default createRouter({ history, routes });
