<template>
  <v-card class="pa-4 h-100">
    <v-row>
      <v-col cols="2">
        <v-img
          transition="false"
          contain
          max-width="100%"
          max-height="250"
          :src="
            beerData.image_url ||
              'https://i.pinimg.com/originals/69/9b/87/699b87ec80493386f3e846753baf2c0d.png'
          "
        ></v-img>
      </v-col>
      <v-col cols="10">
        <v-card-title
          class="text-h4 pa-0 pb-4"
          v-text="beerData.name"
        ></v-card-title>
        <v-card-subtitle
          v-text="beerData.tagline"
          class="text-h5 pa-0"
        ></v-card-subtitle>
        <v-card-text
          class="pa-0 pb-4"
          v-text="beerData.description"
        ></v-card-text>
      </v-col>
      <v-col v-if="withDetails" cols="12" class="d-flex flex-column">
        <v-card-text>
          <p class="text-h6 pa-0">Pair with:</p>
          <div>
            <v-chip
              class="mr-2 mb-2"
              color="primary"
              v-for="food in beerData.food_pairing"
              :key="food"
            >
              {{ food }}
            </v-chip>
          </div>
        </v-card-text>
        <v-card-text class="mt-auto">
          <p class="text-h6">Brewers Tips:</p>
          <p>{{ beerData.brewers_tips }}</p>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'BeerCard',
  props: ['beerData', 'withDetails']
}
</script>
