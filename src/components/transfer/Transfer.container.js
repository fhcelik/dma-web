import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { transferMoney } from '../../redux/actions/accounts';
import { accountsSelector } from '../../redux/selectors/accounts';
import { warningSelector } from '../../redux/selectors/auth';
import Transfer from './Transfer.view';

export default compose(
  connect(state => ({ ...accountsSelector(state),  warning:warningSelector(state)}), {
    transferMoney,
  }),
  withState('account','setAccount',null),
  withState('amount', 'setAmount', ''),
  withState('targetAccount', 'setTargetAccount', ''),
  withHandlers({
    handleChange: ({setAmount}) => ({target:{ value }}) => {
      setAmount(value);
      },
      accountChange: ({setAccount}) => ({ target: { value } }) => {
        setAccount(value);
      },
      targetChange: ({setTargetAccount}) => ({ target: { value } }) => {
        setTargetAccount(value);
      },
      handleSubmit: ({account, accounts, amount, targetAccount, transferMoney})=>(e)=> {
        e.preventDefault();
        transferMoney({account, targetAccount, amount, custId:accounts[0].custId});
      }
  })
)(Transfer);