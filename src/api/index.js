import axios from 'axios';

const Api = axios.create({
  //set default endpoint API
  baseURL: 'http://laravel10-api.local/'
})

export default Api