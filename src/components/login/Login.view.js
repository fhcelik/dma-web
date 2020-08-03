import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default ({handleChange, handleSubmit, query }) => {
    const classes = useStyles();
    return (
        <form className={classes.margin} onSubmit={handleSubmit}>
            <Grid container spacing={1} alignItems="flex-end" style={{ margin: '20% 50% 20% 35%'}}>
            <Grid item>
                <AccountCircle />
            </Grid>
            <Grid item >
                <TextField id="input-with-icon-grid" label="Enter Customer ID" value={query} onChange={handleChange}/>
            
        
            <button style={{ 
                          backgroundColor: 'grey',
                          border: 'none',
                          color: 'white',
                          padding: '15px 32px',
                          textAlign: 'center',
                          textDecoration: 'none',
                          display: 'inline-block',
                          fontSize: '16px',
                          marginTop: '2px',
                          marginLeft: '12px',
                          cursor: 'pointer', }}>Submit</button>
            </Grid>
            </Grid>
        </form>
    )
}

