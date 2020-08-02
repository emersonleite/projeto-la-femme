import Vue from "vue";
import Vuex from "vuex";
import { sumValuesObjectIntoArray as sum } from "@/functions/sumValuesObjectIntoArray.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    showLoginScreen: false,
  },
  mutations: {
    UPDATE_CART(state, payload) {
      state.cart = payload;
    },
    UPDATE_LOGIN(state) {
      state.showLoginScreen = !state.showLoginScreen;
    },
  },
  getters: {
    totalCart: (state) => {
      if (state.cart.length > 0) return sum(state.cart, "total");
      else return 0;
    },
  },
  actions: {},
  modules: {},
});
