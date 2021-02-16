import vue from "vue";
import Router from "vue-router";

import Login from "../views/auth/Login.vue";
import Admin from "../layouts/Admin"
import Dashboard from "../views/admin/Dashboard.vue";
//member
import Members from "../components/Members/Members";
import DetailMember from "../components/Members/DetailMember"

//administrator
import Administrator from "../components/Administrator/Administrator"

//theme 
import Theme from "../components/Theme/Theme"


vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
      path: "/",
      redirect: "/members",
      component: Admin,
      children: [
        {
          path: "/dashboard",
          component: Dashboard,
        },
        // {
        //   path: "/settings",
        //   component: Settings,
        // },
        {
          path: "/members",
          name: "members",
          component: Members,
        },
        {
          path: "/members/detail/:id",
          name: "detailMember",
          component: DetailMember,
        },
        {
          path: "/admin",
          name: "admin",
          component: Administrator
        },
        {
          path: "/theme",
          name: "theme",
          component: Theme
        }
      ],
    },
  ],
});

export default router;
