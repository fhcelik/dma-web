import { connect } from 'react-redux';
import { branch, compose, renderComponent, withHandlers, withState } from 'recompose';
import { sendQueryEmail } from '../../redux/actions/auth';
import { getAccounts } from '../../redux/actions/accounts';
import { checkUserSelector } from '../../redux/selectors/auth';
import Account from '../overview';
import Login from './Login.view';

export default compose(
  connect(state => ({ isUser: checkUserSelector(state)}), {
    sendQueryEmail,
    getAccounts,
  }),
  branch(({isUser}) => isUser, renderComponent(Account)),
  withState('search','setSearch',null),
  withHandlers({
      handleChange: ({setSearch}) => ({ target: { value } }) => {
        setSearch(value);
      },
      handleSubmit: ({getAccounts, sendQueryEmail, search})=>(e)=> {
        e.preventDefault(); 
        sendQueryEmail(search);
        getAccounts(search);
      },
  })
)(Login);