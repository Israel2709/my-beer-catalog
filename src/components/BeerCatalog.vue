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
        <v-card class="pa-8">
          <v-row>
            <v-col cols="3">
              <v-img
                transition="false"
                contain
                max-width="100%"
                max-height="300"
                :src="
                  randomBeer.image_url ||
                    'https://i.pinimg.com/originals/69/9b/87/699b87ec80493386f3e846753baf2c0d.png'
                "
              ></v-img>
            </v-col>
            <v-col cols="9">
              <v-card-title
                class="text-h3"
                v-text="randomBeer.name"
              ></v-card-title>
              <v-card-subtitle
                v-text="randomBeer.tagline"
                class="text-h4"
              ></v-card-subtitle>
              <v-card-text v-text="randomBeer.description"></v-card-text>
              <v-card-text>
                <p class="text-h6">Pair with:</p>
                <div>
                  <v-chip
                    class="mr-2"
                    color="primary"
                    v-for="food in randomBeer.food_pairing"
                    :key="food"
                  >
                    {{ food }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h2 text-center">Whole Beers List</h2>
      </v-col>
      <v-col cols="6" v-for="beer in allBeers" :key="beer.id">
        <v-card class="pa-8 h-100 d-flex">
          <v-row>
            <v-col cols="3">
              <v-img
                transition="false"
                contain
                max-width="100%"
                max-height="250"
                :src="
                  beer.image_url ||
                    'https://i.pinimg.com/originals/69/9b/87/699b87ec80493386f3e846753baf2c0d.png'
                "
              ></v-img>
            </v-col>
            <v-col cols="9">
              <v-card-title class="text-h4" v-text="beer.name"></v-card-title>
              <v-card-subtitle
                v-text="beer.tagline"
                class="text-h5"
              ></v-card-subtitle>
              <v-card-text v-text="beer.description"></v-card-text>
            </v-col>
            <v-col cols="12" class="d-flex flex-column">
              <v-card-text>
                <p class="text-h6">Pair with:</p>
                <div>
                  <v-chip
                    class="mr-2 mb-2"
                    color="primary"
                    v-for="food in beer.food_pairing"
                    :key="food"
                  >
                    {{ food }}
                  </v-chip>
                </div>
                <span></span>
              </v-card-text>
              <v-card-text class="mt-auto">
                <p class="text-h6">Brewers Tips:</p>
                <p>{{ beer.brewers_tips }}</p>
                <span></span>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'BeerCatalog',
  computed: {
    randomBeer () {
      return this.$store.state.randomBeer
    },
    allBeers () {
      return this.$store.state.allBeers
    }
  },
  mounted () {
    this.$store.dispatch('fetchRandomBeer')
    this.$store.dispatch('fetchAllBeers')
  }
}
</script>
