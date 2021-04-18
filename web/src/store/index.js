import Vue from 'vue'
import Vuex from 'vuex'
import users from "./users"
import posts from "./posts"
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    posts
  },
  plugins: [createPersistedState()]
})