/* global fetch:true */
/* eslint no-undef: "error" */
/* eslint no-underscore-dangle: 0 */
/* eslint no-unused-vars: 0 */

function statusHelper(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(response);
}

const responseHandler = url => (response) => {
  if (response._bodyInit === '' || response._bodyText === '') {
    return response;
  }
  return response.json();
};

const getApiCall = (url, method, headers) => (
  fetch(url, {
    method,
    headers,
  })
    .then(statusHelper)
    .catch(error => error)
    .then(responseHandler(url))
);

const postApiCall = (url, method, headers, body) => (
  fetch(url, {
    method,
    headers,
    body,
  })
    .then(statusHelper)
    .catch(error => error)
    .then(responseHandler(url))
);

export const api = (url, method, headers, body) => (
  method === 'GET' ? getApiCall(url, method, headers) : postApiCall(url, method, headers, body)
);
