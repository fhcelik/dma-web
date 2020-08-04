import { handleActions } from 'redux-actions';
import * as Actions from '../actions/auth';

export default handleActions(
  {
    [Actions.logout]: (auth, { payload: value }) => ({
      user: value,
      warning:''
    }),
    [Actions.resetAuth]: (auth, { payload }) => ({
      user: false
    }),
    [Actions.warning]: (auth, { payload:value }) => ({
      ...auth,
      warning: value
    }),
  },
  {
    user: false,
    warning:''
  }
);