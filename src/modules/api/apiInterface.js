import { api } from './api';
import getHeaders from './headers';

const apiCall = (url, method, body, header, headers) => api(
  url,
  method,
  getHeaders(header, headers),
  body,
);

export {
  apiCall,
};
