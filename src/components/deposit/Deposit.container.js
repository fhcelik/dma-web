import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, withState } from 'recompose';
import { depositMoney,  getAccounts } from '../../redux/actions/accounts';
import { accountsSelector } from '../../redux/selectors/accounts';
import { warningSelector } from '../../redux/selectors/auth';
import Deposit from './Deposit.view';

export default compose(
  connect(state => ({ ...accountsSelector(state), warning:warningSelector(state)}), {
    depositMoney,
    getAccounts,
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
      handleSubmit: ({accId, accounts, currency, depositMoney, amount})=>(e)=> {
        e.preventDefault();
        depositMoney({accId, amount, currency, custId:accounts[0].custId});
      }
  }),
)(Deposit);