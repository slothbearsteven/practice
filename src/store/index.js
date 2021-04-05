import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result1: {},
    result2: {},
    result3: {},
    result4: {},
    result5: {},
    points: {}
  },
  mutations: {
    setResult1(state, payload) {
      state.result1 = payload.die1
    },
    setResult2(state, payload) {
      state.result2 = payload.die2
    },
    setResult3(state, payload) {
      state.result3 = payload.die3
    },
    setResult4(state, payload) {
      state.result4 = payload.die4
    },
    setResult5(state, payload) {
      state.result5 = payload.die5
    },
    setPoints(state, payload) {
      state.points += payload.points
    }
  },
  actions: {
    Roll({ commit, dispatch }, dice) {
      dice.forEach(die => {
        die = math.floor(match.random() * (6 - 1 + 1)) + 1
      });
      let payload = dice
      try {
        commit('setresult1', payload)
        commit('setresult2', payload)
        commit('setresult3', payload)
        commit('setresult4', payload)
        commit('setresult5', payload)
      } catch (error) {
        console.error(error)
      }
    }

  },
  modules: {
  }
})
