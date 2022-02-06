import http from './http-common';

class dataService {
  get(api) {
    return http.get(api);
  }

  post(api, data) {
    return http.post(api, data);
  }

  put(api, data) {
    return http.put(api, data);
  }

  delete(api) {
    return http.delete(api);
  }
}

export default new dataService();
