import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mlluiztodo.fly.dev/'
})

export default api
