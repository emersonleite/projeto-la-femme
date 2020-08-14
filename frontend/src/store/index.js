import Vue from "vue";
import Vuex from "vuex";
import { sumValuesObjectIntoArray as sum } from "@/functions/sumValuesObjectIntoArray.js";
import { saveToLocalStorage } from "@/functions/local.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    showLoginScreen: false,
    loggedUser: "",
    roleUser: "",
  },
  mutations: {
    UPDATE_CART(state, payload) {
      state.cart = payload;
    },
    SHOW_LOGIN_SCREEN(state) {
      state.showLoginScreen = !state.showLoginScreen;
    },
    UPDATE_USER(state, payload) {
      state.loggedUser = payload;
    },
    UPDATE_ROLE_USER(state, payload) {
      state.roleUser = payload;
    },
  },
  getters: {
    totalCart: (state) => {
      if (state.cart.length > 0) return sum(state.cart, "total");
      else return 0;
    },
  },
  actions: {
    LOGIN_PROCESS(context, user, roleUser) {
      context.commit("UPDATE_USER", user);
      context.commit("SHOW_LOGIN_SCREEN");
      context.commit("UPDATE_ROLE_USER", roleUser);
    },
    LOGOUT_PROCESS(context) {
      context.commit("UPDATE_USER", "");
      context.commit("UPDATE_ROLE_USER", "");
      saveToLocalStorage("token", "");
    },
  },
  modules: {},
});
