import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

/* Criando um filtro global para apresentação de valores em REAL, BRL */
Vue.filter("toCurrencyBRL", (value) => {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
