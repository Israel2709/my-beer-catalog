import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomBeer: {},
    allBeers: [],
    beersPage: [],
    totalPages: 0,
    beersPerPage: 4,
    beerName: '',
    filteredBeers: []
  },
  getters: {},
  actions: {
    async fetchRandomBeer (context) {
      const beer = await api.getRandomBeer()
      context.commit('setRandomBeer', beer)
    },
    async fetchAllBeers (context) {
      const allBeers = await api.getAllBeers()
      const { beersPerPage } = this.state
      context.commit('setAllBeers', allBeers)
      context.commit('setTotalPages', { allBeers, beersPerPage })
    },
    async fetchBeersPage (context, page) {
      console.log(this.state.filteredBeers)
      const { beersPerPage } = this.state
      const beersPage = await api.getPaginatedBeers(page, beersPerPage)
      context.commit('setPaginatedBeers', beersPage)
    },
    async filterByName (context, beerName) {
      const { beersPerPage } = this.state
      beerName = beerName.replace(/ /g, '_')
      console.log(beerName)
      const result = await api.getBeersByName(beerName)
      const filteredBeers = result.reduce((accum, current, index) => {
        const page = Math.floor(index / beersPerPage)
        if (!accum[page]) {
          accum[page] = []
        }
        accum[page].push(current)
        return accum
      }, [])
      console.log(filteredBeers)
      context.commit('setTotalPages', { allBeers: result, beersPerPage })
    }
  },
  mutations: {
    setRandomBeer (state, beer) {
      state.randomBeer = beer
    },
    setAllBeers (state, allBeers) {
      state.allBeers = allBeers
    },
    setPaginatedBeers (state, beersPage) {
      state.beersPage = beersPage
    },
    setTotalPages (state, { allBeers, beersPerPage }) {
      console.log(allBeers)
      state.totalPages = Math.ceil(allBeers.length / beersPerPage)
    }
  }
})
