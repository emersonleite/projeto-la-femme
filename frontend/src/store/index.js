import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    ADD_PRODUCT_TO_CART(state, payload) {
      state.cart.push(payload);
    },
  },
  actions: {},
  modules: {},
});
