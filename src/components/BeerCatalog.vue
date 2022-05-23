<template>
  <v-container>
    <v-dialog v-model="dialog">
      <BeerCard :beerData="selectedBeer" :withDetails="true" />
    </v-dialog>
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
        <h3 class="text-h4 text-center">
          Click on any card to see more details
        </h3>
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
        <BeerCard
          :beerData="beer"
          :withDetails="false"
          @click="showBeerDetails($event)"
        />
      </v-col>
      <v-col v-if="!paginatedBeers.length" cols="12">
        <v-alert dense border="left" type="warning">
          No results found, try again.
        </v-alert>
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
      beerName: '',
      dialog: false
    }
  },
  methods: {
    changePage: function (selectedPage) {
      this.$store.dispatch('fetchBeersPage', selectedPage)
    },
    filterByName: function () {
      this.$store.dispatch('filterByName', this.beerName)
    },
    showBeerDetails: function (data) {
      console.log('detail')
      console.log(data)
      this.dialog = true
      this.$store.dispatch('fetchBeerById', data)
    }
  },
  computed: mapState([
    'randomBeer',
    'allBeers',
    'beersPage',
    'totalPages',
    'filteredBeers',
    'paginatedBeers',
    'page',
    'selectedBeer'
  ]),
  mounted () {
    this.$store.dispatch('fetchRandomBeer')
    this.$store.dispatch('fetchAllBeers')
    this.$store.dispatch('fetchBeersPage', 0)
  },
  components: { BeerCard, BeersPagination }
}
</script>
