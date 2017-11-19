/**
* @providesModule api/apiActions
*/

export const API_ACTION = 'API_ACTION';

export const getApiAction = body => ({
  type: API_ACTION,
  method: 'GET',
  ...body,
});

export const postApiAction = body => ({
  type: API_ACTION,
  method: 'POST',
  ...body,
});

export const deleteApiAction = body => ({
  type: API_ACTION,
  method: 'DELETE',
  ...body,
});

export const patchApiAction = body => ({
  type: API_ACTION,
  method: 'PATCH',
  ...body,
});
