/* eslint no-unneeded-ternary: 0 */
const getHeaders = (header, userHeaders) => {
  const headers = userHeaders ? userHeaders : {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return header ? {
    Authorization: header,
    ...headers,
  } : headers;
};

export default getHeaders;
