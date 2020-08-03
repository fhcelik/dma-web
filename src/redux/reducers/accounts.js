import * as R from 'ramda';
import { handleActions } from 'redux-actions';
import * as Actions from '../actions/accounts';

export default handleActions(
  {
    [Actions.accountProps]: (accounts, { payload }) => ({
      ...accounts,
      accounts: payload,
      //ids: R.map( obj => R.prop(['id'], obj), payload)
    }),
  },
  {
    accounts: [],
  }
);