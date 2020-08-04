import { connect } from 'react-redux';
import { compose, withHandlers, withState } from 'recompose';
import { withdrawMoney } from '../../redux/actions/accounts';
import { accountsSelector } from '../../redux/selectors/accounts';
import { warningSelector } from '../../redux/selectors/auth';
import Withdraw from './Withdraw.view';

export default compose(
  connect(state => ({ ...accountsSelector(state), warning:warningSelector(state)}), {
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
      handleSubmit: ({accId, accounts, currency, withdrawMoney, amount})=>(e)=> {
        e.preventDefault(); 
        withdrawMoney({accId, amount, currency, custId:accounts[0].custId});
      }
  })
)(Withdraw);