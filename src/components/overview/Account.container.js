import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { accountsSelector } from '../../redux/selectors/accounts';
import { warningSelector } from '../../redux/selectors/auth';
import { getAccounts } from '../../redux/actions/accounts';
import { resetAuth } from '../../redux/actions/auth';
import Account from './Account.view';

export default compose(
  connect(state => ({ ...accountsSelector(state)}),
    { getAccounts, resetAuth }
  ),
  withHandlers({
    iconClick: ({accounts, getAccounts, resetAuth}) => (e) => {
      e.preventDefault(); 
      getAccounts(accounts[0].custId);
    },
    logoutClick: ({resetAuth}) => (e) => {
      e.preventDefault(); 
      resetAuth();
    },
  }),
)(Account);