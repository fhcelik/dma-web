import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { transferMoney } from '../../redux/actions/accounts';
import Transfer from './Transfer.view';

export default compose(
  connect(null, {
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
      handleSubmit: ({account, amount, targetAccount, transferMoney})=>(e)=> {
        e.preventDefault(); 
        transferMoney({account, targetAccount, amount});
      }
  })
)(Transfer);