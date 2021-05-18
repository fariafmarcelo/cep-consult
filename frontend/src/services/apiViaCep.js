import axios from 'axios';

const baseURL = 'https://viacep.com.br/ws/';

const api = axios.create({
  baseURL: baseURL,
  responseType: 'json',
});

export default api;
