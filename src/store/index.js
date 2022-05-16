import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomBeer: {},
    allBeers: []
  },
  getters: {},
  actions: {
    async fetchRandomBeer (context) {
      const beer = await api.getRandomBeer()
      context.commit('setRandomBeer', beer)
    },
    async fetchAllBeers (context) {
      const allBeers = await api.getAllBeers()
      context.commit('setAllBeers', allBeers)
    },
    async fetchBeersPage (context) {
      const beersPage = await api.getPaginatedBeers(1)
      context.commit('setPaginatedBeers', beersPage)
    }
  },
  mutations: {
    setRandomBeer (state, beer) {
      console.log(beer)
      state.randomBeer = beer
    },
    setAllBeers (state, allBeers) {
      state.allBeers = allBeers
    },
    setPaginatedBeers (state, beersPage) {
      console.log(beersPage)
      state.beersPage = beersPage
    }
  }
})
