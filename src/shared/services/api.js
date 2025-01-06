import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backendtodoapp-3.onrender.com/api',
})

api.interceptors.request.use(async config => {
  const user = localStorage.getItem('user')
  const token = user && JSON.parse(user).token
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export { api }
