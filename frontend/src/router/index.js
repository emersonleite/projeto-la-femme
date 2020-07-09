import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import CartItems from "../views/CartItems.vue";
import ProductDetail from "../views/ProductDetail.vue";
import SignupPage from "../views/SignupPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/cartitems",
    name: "cartitems",
    component: CartItems,
  },
  {
    path: "/products/",
    name: "products",
    component: Products,
  },
  {
    path: "/products/:id",
    name: "product",
    component: ProductDetail,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
