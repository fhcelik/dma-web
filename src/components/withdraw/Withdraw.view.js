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

export default ({ account, accountChange, amount, currency, handleChange, handleSubmit, selectChange, warning }) => {
    const classes = useStyles();
  
    return (
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid>
          <TextField id="outlined-search" label="Enter amount" type="search" variant="outlined" onChange={handleChange} value={amount}/>
          <TextField id="outlined-search" label="Enter account" type="search" variant="outlined" onChange={accountChange} value={account}/>
          <Select 
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={currency}
              onChange={selectChange}
              label="currency"
          >
           {['CAD', 'USD', 'MXN'].map( id => <MenuItem key={id} value={id}>{id}</MenuItem>)}
          </Select>
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
                          marginTop: '12px'}}>Withdraw</button>
        </Grid>
       
        <Typography>{warning}</Typography> 
                   
                
      </form>
    );
  }