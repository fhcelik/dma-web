import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      height:'10ch',
    },
  },
}));

export default ({ account, accountChange,amount, handleChange, handleSubmit, targetAccount, targetChange, warning }) => {
    const classes = useStyles();
  
    return (
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid>
          <TextField id="outlined-search" label="Enter amount" type="search" variant="outlined" onChange={handleChange} value={amount}/>
          <TextField id="outlined-search" label="Enter account" type="search" variant="outlined" onChange={accountChange} value={account}/>
          <TextField id="outlined-search" label="Enter target account" type="search" variant="outlined" onChange={targetChange} value={targetAccount}/>
          <button style={{ 
                          backgroundColor: 'grey',
                          border: 'none',
                          color: 'white',
                          padding: '15px 32px',
                          textAlign: 'center',
                          textDecoration: 'none',
                          display: 'inline-block',
                          fontSize: '16px',
                          margin: '4px 2px',
                          cursor: 'pointer', 
                          marginTop: '12px'}}>Transfer</button>
        </Grid>
       
      
                   
        <Typography>{warning}</Typography>         
      </form>
    );
  }