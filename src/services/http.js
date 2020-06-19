import axios from 'axios'

export const http = axios.create({
	baseURL: 'https://api-stonks.herokuapp.com/stonks/0.0.1'
})