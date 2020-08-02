import Vue from "vue";
import VueRouter from "vue-router";
/* Import pages */
import Home from "../pages/Home.vue";
import Products from "../pages/Products.vue";
import CartItems from "../pages/CartItems.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import SignupPage from "../pages/SignupPage.vue";
import CadastroProdutos from "../pages/CadastroProdutos.vue";
import PageLogIn from "../pages/PageLogIn.vue";

/* import GetData from "../components/get_data/GetData.vue"; */
/* import pagePrototype from "../pages/pagePrototype.vue"; */

Vue.use(VueRouter);

/* const arrayRoutes = ["teste", "teste2"]; */

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
  { path: "/login", name: "login", component: PageLogIn },
  /* {
    path: "/getdata",
    name: "getdata",
    component: GetData,
  }, */
  /* {
    path: "/page",
    name: "page",
    component: pagePrototype,
  }, */
  {
    path: "/cadastro",
    name: "cadastro",
    component: CadastroProdutos,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
