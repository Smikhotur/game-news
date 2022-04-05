import axios from 'axios';
import { API } from '../CONST/api-endpoints';
import { getAuthUserStorage } from '../helpers/getAuthUser';

export const API_URL = 'https://blooming-citadel-20389.herokuapp.com';

const http = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  withCredentials: true,
});

http.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getAuthUserStorage()}`;
  return config;
});

http.interceptors.request.use(
  (config) => {
    return config;
  },
  async (error) => {
    if (error.response.status == 401) {
      const res = await axios.get(API_URL + API.refresh, {
        withCredentials: true,
      });
      localStorage.setItem('user', JSON.stringify(res.data));
    }
  }
);

export default http;
