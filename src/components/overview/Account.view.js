import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Transfer from '../transfer';
import Deposit from '../deposit';
import Withdraw from '../withdraw';
import React from 'react';

export default ({ accounts}) => {
    return (
        <Grid>
        <table style={{width:'20%'}}>
            <tr>
                <th>Account ID</th>
                <th>Balance</th>
            </tr>
            {accounts.map( account =>
                (<tr>
                    <td>{account.accountId}</td>
                    <td>{account.balance}</td>
                </tr>)
            )}
        </table>
        <Deposit/>
        <Withdraw/>
        <Transfer/>            
    </Grid>
    
    )
}