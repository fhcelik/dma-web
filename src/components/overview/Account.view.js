import { Button, Grid } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import Transfer from '../transfer';
import Deposit from '../deposit';
import Withdraw from '../withdraw';
import React from 'react';

export default ({ accounts, iconClick, logoutClick, warning }) => {
    return (
        <Grid>
                <Button onClick={iconClick}><RefreshIcon/></Button>
                <Button onClick={logoutClick}>Logout</Button>
                <table style={{ width:'10%', marginLeft: '40%', marginTop:'5%'}}>
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

                
            
            
            <Grid style={{  marginLeft: '30%',marginTop:'5%'}}>
                <Deposit/>
            </Grid>
            <Grid style={{  marginLeft: '30%',marginTop:'5%'}}>
                <Withdraw/>
            </Grid>
            <Grid style={{  marginLeft: '30%',marginTop:'5%'}}>
                <Transfer/> 
            </Grid>
            
         </Grid>                               
    )
}