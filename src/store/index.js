import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result: {},
  },
  mutations: {
    setResult(state, payload) {
      state.result = payload.result
    },
  },
  actions: {

  },
  modules: {
  }
})
