import axios from 'axios';
export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  api.interceptors.request.use((config) => {
    const token = useCookie('auth_token')  // 🍪 Get token from cookie
    if (token.value) {
      config.headers.Authorization = `Bearer ${token.value}`
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  api.interceptors.response.use((response) => response, (error) => {
    if (error.response?.status === 401) {
      useCookie('auth_token').value = null
      // nuxtApp.$router.push('/login')
      router.push('/login') 
    }
    return Promise.reject(error)
  })

  nuxtApp.provide('api', api)
})
