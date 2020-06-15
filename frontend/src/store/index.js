import Vue from "vue";
import Vuex from "vuex";
import { sumValuesObjectIntoArray as sum } from "@/functions/sumValuesObjectIntoArray.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    ADD_PRODUCT_TO_CART(state, payload) {
      state.cart = payload;
    },
  },
  getters: {
    total: (state) => {
      if (state.cart.length > 0) return sum(state.cart, "total");
      else return 0;
    },
  },
  actions: {},
  modules: {},
});
