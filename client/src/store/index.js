import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numPage: 1
  },
  mutations: {
    nextPage: state => {
      return state.numPage++;
    },
    backPage: state => {
      if (state.numPage <= 1) {
        return;
      }
      state.numPage--;
    }
  },
  actions: {},
  modules: {}
});
