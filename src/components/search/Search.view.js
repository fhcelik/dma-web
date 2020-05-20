import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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

export default ({ handleChange, handleSubmit, query }) => {
    const classes = useStyles();
  
    return (
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Grid>
          <TextField id="outlined-search" label="Enter Beer Name" type="search" variant="outlined" onChange={handleChange} value={query}/>
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
                          marginTop: '12px'}}>Search</button>
        </Grid>
      </form>
    );
  }