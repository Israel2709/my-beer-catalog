const BASE_URL = 'https://api.punkapi.com/v2/beers'
export default {
  getRandomBeer: async () => {
    let data = await fetch(`${BASE_URL}/random`)
    data = await data.json()
    return data[0]
  },
  getAllBeers: async () => {
    let data = await fetch(`${BASE_URL}`)
    data = await data.json()
    return data
  },
  getPaginatedBeers: async page => {
    let data = await fetch(`${BASE_URL}?page=${page}&per_page=2`)
    data = await data.json()
    return data
  }
}
