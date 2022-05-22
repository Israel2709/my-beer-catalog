<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="text-h1">My Beer Catalog</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h2 text-center">The beer of the day</h2>
      </v-col>
      <v-col cols="12">
        <BeerCard :beerData="randomBeer" :withDetails="true" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h2 text-center">Whole Beers List</h2>
      </v-col>
      <v-col cols="12">
        <v-form ref="form">
          <v-text-field
            v-model="beerName"
            label="Filter By Name"
            @input="filterByName()"
          ></v-text-field>
        </v-form>
      </v-col>
      <v-col v-for="beer in beersPage" cols="12" md="6" :key="beer.id">
        <BeerCard :beerData="beer" :withDetails="false" />
      </v-col>
    </v-row>
    <BeersPagination
      @changePage="changePage($event)"
      :totalPages="totalPages"
      :value="page"
    />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import BeerCard from './BeerCard.vue'
import BeersPagination from './BeersPagination.vue'
export default {
  name: 'BeerCatalog',
  data: function () {
    return {
      beerName: ''
    }
  },
  methods: {
    changePage: function (selectedPage) {
      this.$store.dispatch('fetchBeersPage', selectedPage)
    },
    filterByName: function () {
      this.$store.dispatch('filterByName', this.beerName)
    }
  },
  computed: mapState([
    'randomBeer',
    'allBeers',
    'beersPage',
    'totalPages',
    'filteredBeers',
    'paginatedBeers',
    'page'
  ]),
  mounted () {
    this.$store.dispatch('fetchRandomBeer')
    this.$store.dispatch('fetchAllBeers')
    this.$store.dispatch('fetchBeersPage', 0)
  },
  components: { BeerCard, BeersPagination }
}
</script>
