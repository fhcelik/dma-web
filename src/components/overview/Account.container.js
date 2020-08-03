import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { push } from 'react-router-redux';
import { accountsSelector } from '../../redux/selectors/accounts';
import { getAccounts } from '../../redux/actions/accounts';
import Account from './Account.view';

export default compose(
  connect(state => ({ ...accountsSelector(state)}))
)(Account);