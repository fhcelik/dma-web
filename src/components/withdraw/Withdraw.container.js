import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { withdrawMoney } from '../../redux/actions/accounts';
import Withdraw from './Withdraw.view';

export default compose(
  connect(null, {
    withdrawMoney,
  }),
  withState('amount','setAmount',null),
  withState('currency', 'setCurrrency', ''),
  withState('accId', 'setaccId', ''),
  withHandlers({
    handleChange: ({setAmount}) => ({target:{ value }}) => {
      setAmount(value);
      },
      selectChange: ({setCurrrency}) => ({ target: { value } }) => {
        setCurrrency(value);
      },
      accountChange: ({setaccId}) => ({ target: { value } }) => {
        setaccId(value);
      },
      handleSubmit: ({accId, currency, withdrawMoney, amount})=>(e)=> {
        e.preventDefault(); 
        withdrawMoney({accId, amount, currency});
      }
  })
)(Withdraw);