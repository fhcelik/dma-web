import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { depositMoney } from '../../redux/actions/accounts';
import Deposit from './Deposit.view';

export default compose(
  connect(null, {
    depositMoney,
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
      handleSubmit: ({accId, currency, depositMoney, amount})=>(e)=> {
        e.preventDefault(); 
        depositMoney({accId, amount, currency});
      }
  })
)(Deposit);