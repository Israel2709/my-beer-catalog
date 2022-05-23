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
    filteredBeers: [],
    paginatedBeers: [],
    page: 1,
    selectedBeer: {}
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
      const paginatedBeers = allBeers.reduce((accum, current, index) => {
        const page = Math.floor(index / beersPerPage)
        if (!accum[page]) {
          accum[page] = []
        }
        accum[page].push(current)
        return accum
      }, [])

      context.commit('setAllBeers', allBeers)
      context.commit('setFilteredBeers', allBeers)
      context.commit('setPaginatedBeers', paginatedBeers)
      context.commit('setBeersPage', paginatedBeers[0])
      context.commit('setTotalPages', paginatedBeers.length)
      context.commit('resetSelectedPage', 1)
    },
    fetchBeersPage (context, page) {
      const { paginatedBeers } = this.state
      const beersPage = paginatedBeers[page - 1]
      context.commit('setBeersPage', beersPage)
      context.commit('resetSelectedPage', page)
    },
    filterByName (context, beerName) {
      const { allBeers, beersPerPage } = this.state
      const result = beerName
        ? allBeers.filter(beer =>
            beer.name.toLowerCase().includes(beerName.toLowerCase())
          )
        : allBeers
      console.log(result)
      const paginatedBeers = result.reduce((accum, current, index) => {
        const page = Math.floor(index / beersPerPage)
        if (!accum[page]) {
          accum[page] = []
        }
        accum[page].push(current)
        return accum
      }, [])
      context.commit('setPaginatedBeers', paginatedBeers)
      context.commit('setBeersPage', paginatedBeers[0])
      context.commit('setTotalPages', paginatedBeers.length)
      context.commit('resetSelectedPage', 1)
    },
    fetchBeerById (context, id) {
      const selectedBeer = this.state.allBeers.find(beer => beer.id === id)
      console.log(selectedBeer)
      context.commit('setSelectedBeer', selectedBeer)
    }
  },
  mutations: {
    setRandomBeer (state, beer) {
      state.randomBeer = beer
    },
    setAllBeers (state, allBeers) {
      state.allBeers = allBeers
    },
    setFilteredBeers (state, filteredBeers) {
      state.filteredBeers = filteredBeers
    },
    setPaginatedBeers (state, paginatedBeers) {
      state.paginatedBeers = paginatedBeers
    },
    setTotalPages (state, totalPages) {
      state.totalPages = totalPages
    },
    setBeersPage (state, beersPage) {
      state.beersPage = beersPage
    },
    setSelectedBeer (state, selectedBeer) {
      state.selectedBeer = selectedBeer
    },
    resetSelectedPage (state, val) {
      state.page = val
    }
  }
})
