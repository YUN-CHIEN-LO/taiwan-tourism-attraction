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
        name: "frontDashboard",
        component: () => import("@/views/FrontHome.vue"),
      },
    ],
  },
];

export default createRouter({ history, routes });
