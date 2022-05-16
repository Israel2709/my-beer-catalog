<template>
  <div class="text-center">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              class="my-4"
              :length="totalPages"
              @input="changePage"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'BeerPagination',
  data () {
    return {
      page: 1
    }
  },
  props: ['totalPages'],
  methods: {
    changePage: function () {
      this.$emit('changePage', this.page)
    }
  }
}
</script>
