import { http } from './http'

export default {
  post: (body) => http.post('/usuarios', body),
  login: (body) =>  http.post('/usuarios/login', body)
}