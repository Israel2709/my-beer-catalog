<template>
  <v-app>
    <v-main>
      <BeerCatalog />
    </v-main>
  </v-app>
</template>

<script>
import BeerCatalog from './components/BeerCatalog.vue'

export default {
  name: 'App',

  components: {
    BeerCatalog
  },

  data: () => ({
    //
  })
}
</script>
