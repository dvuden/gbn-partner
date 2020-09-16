import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

import partners from "../store/modules/partners";


const debug = process.env.NODE_ENV !== "test";

Vue.use(Vuex);

export default new Vuex.Store({
  //  state: {},
  //  mutations: {},
  //  actions: {},
  modules: { partners },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

