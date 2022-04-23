import http from './http-common';
import axios from 'axios';
class dataService {
  get(api, signal = {}, options = {}) {
    let source = null;
    let configForMethod = options;

    if (signal.constructor.name === 'AbortSignal') {
      source = axios.CancelToken.source();
      signal.addEventListener('abort', () => {
        source.cancel();
      });
      configForMethod.cancelToken = source.token;
    }
    return http.get(api, configForMethod);
  }

  post(api, data) {
    return http.post(api, data);
  }

  put(api, data) {
    return http.put(api, data);
  }

  patch(api, data) {
    return http.patch(api, data);
  }

  delete(api) {
    return http.delete(api);
  }
}

export default new dataService();
