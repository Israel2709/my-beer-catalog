const BASE_URL = 'https://api.punkapi.com/v2/beers'
export default {
  getRandomBeer: async () => {
    let data = await fetch(`${BASE_URL}/random`)
    data = await data.json()
    return data[0]
  },
  getAllBeers: async () => {
    let data = await fetch(`${BASE_URL}?per_page=80`)
    data = await data.json()
    return data
  },
  getPaginatedBeers: async (page, beersPerPage) => {
    let data = await fetch(`${BASE_URL}?page=${page}&per_page=${beersPerPage}`)
    data = await data.json()
    return data
  },
  getBeersByName: async beerName => {
    let data = await fetch(`${BASE_URL}?beer_name=${beerName}`)
    data = await data.json()
    return data
  }
}
