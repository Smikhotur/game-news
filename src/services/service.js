import axios from 'axios';
import { API_URL } from './http-common';

const client = axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

class service {
  get(api) {
    return client.get(api);
  }

  post(api, data) {
    return client.post(api, data);
  }

  put(api, data) {
    return client.put(api, data);
  }

  patch(api, data) {
    return client.patch(api, data);
  }

  delete(api) {
    return client.delete(api);
  }
}

export default new service();
