import Vue from "vue";
import VueRouter from "vue-router";

//Views
import Home from "../views/Home.vue";
import TeachersView from "../views/teachersView.vue";
import Developers from "../views/develpers.vue";
import News from "../views/news.vue";
import Login from "../views/loginView.vue";
import Promotions from "../views/promotions.vue";
import academicDatails from "../views/academicDetails.vue";
// import Developers from "../views/develpers.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/teachers",
    name: "teachers",
    component: TeachersView
  },
  {
    path: "/developers",
    name: "developers",
    component: Developers
  },
  {
    path: "/news",
    name: "news",
    component: News
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/promotions",
    name: "promotions",
    component: Promotions
  },
  {
    path: "/develpers",
    name: "develpers",
    component: Developers
  },
  {
    path: "/academicDetails/:id",
    name: "academicDatails",
    component: academicDatails
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
