import Vue from "vue";
import Vuex from "vuex";
import api from "@/services/api";

Vue.use(Vuex);

//認証情報
const authModule = {
  namespaced: true,
  state: {
    username: "",
    isLoggedIn: false,
  },
  mutations: {
    set(state, payload) {
      state.username = payload.user.username;
      state.isLoggedIn = true;
    },
    clear(state) {
      state.username = "";
      state.isLoggedIn = false;
    },
  },
  actions: {
    login(context, payload) {
      return api
        .post("/auth/jwt/create/", {
          username: payload.username,
          password: payload.password,
        })
        .then((response) => {
          localStorage.setItem("access", response.data.access);
          return context.dispatch("renew");
        });
    },
    logout(context) {
      localStorage.removeItem("access");
      context.commit("clear");
    },
    renew(context) {
      return api.get("/auth/users/me/").then((response) => {
        const user = response.data;
        context.commit("set", { user });
      });
    },
  },
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
