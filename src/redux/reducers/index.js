import { combineReducers } from 'redux';
import auth from './auth';
import beers from './beers';
import accounts from './accounts';

export default combineReducers({
  auth,
  beers,
  accounts
});