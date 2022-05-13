import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomBeer: {}
  },
  getters: {},
  actions: {
    async fetchRandomBeer (context) {
      const beer = await api.getRandomBeer()
      context.commit('setRandomBeer', beer)
    }
  },
  mutations: {
    setRandomBeer (state, beer) {
      console.log(beer)
      state.randomBeer = beer
    }
  }
})
