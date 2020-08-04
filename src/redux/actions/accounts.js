import * as R from 'ramda';
import { createAction } from 'redux-actions';

export const getAccounts = createAction(
  '@@dma/accounts/getAccounts',
  value => (dispatch, getState, httpClient) => { 
    return httpClient.get(`/accounts/${value}`, {value})
      .then(accounts => 
       { 
        dispatch(accountProps(R.path(['data'],accounts)))}
      );
  }
);

export const accountProps = createAction(
    '@@dma/accounts/accountProps',
);

export const depositMoney = createAction(
  '@@dma/accounts/depositMoney',
  ({accId, amount, currency, custId}) => (dispatch, getState, httpClient) => {
    console.log()
    return httpClient.put('/deposit', {accId, amount, currency, custId});
  }
);

export const withdrawMoney = createAction(
  '@@dma/accounts/withdrawMoney y',
  ({accId, amount, currency, custId}) => (dispatch, getState, httpClient) => {
  
    return httpClient.put('/withdraw', {accId, amount, currency, custId});
  }
);

export const transferMoney = createAction(
  '@@dma/accounts/withdrawMoney y',
  ({account, targetAccount, amount, custId}) => (dispatch, getState, httpClient) => {
  
    return httpClient.put('/transfer',{account, targetAccount, amount, custId});
  }
);