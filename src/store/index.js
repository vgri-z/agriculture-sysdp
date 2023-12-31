import Vue from "vue";
import Vuex from "vuex";
import settings from "./settings";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  modules: {
    settings,
  },
});

export default store;
