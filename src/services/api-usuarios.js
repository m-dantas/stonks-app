import { http } from './http'

export default {
  post: (body) => http.post('/usuarios', body),
  code: (code) => http.post('/usuarios/codeVerify', code),
  login: (body) => http.post('/usuarios/login', body)
}