<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>{{ randomBeer.name }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    randomBeer () {
      return this.$store.state.randomBeer
    }
  },
  mounted () {
    this.$store.dispatch('fetchRandomBeer')
  }
}
</script>
