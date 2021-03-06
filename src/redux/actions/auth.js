import { createAction } from 'redux-actions';

export const sendQueryEmail = createAction(
  '@@dma/auth/login',
  user => (dispatch, getState, httpClient) => {
  
    return httpClient.put('/login', { user }, {headers: { 'x-user': user }});
  }
);

export const logout = createAction(
  '@@dma/auth/logout',
);

export const warning = createAction(
  '@@dma/auth/warning',
);

export const resetAuth = createAction(
  '@@dma/auth/resetAuth',
);