import axios from 'axios';

const baseURL = 'http://localhost:3003/api/cep';

const localApi = axios.create({
  baseURL: baseURL,
  responseType: 'json',
});

export default localApi;
