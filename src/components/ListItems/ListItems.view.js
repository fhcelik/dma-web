import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import React from 'react';
import List from '../list';
import Search from '../search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default ({ age , comment, commentChange, handleChange, handleSubmit, rating, ratingChange, ids}) => {
    const classes = useStyles();
    return(
    <Grid>
        <Search/>
        <List/>
        <Grid  >
             
            <form style={{ border:'red dashed 1px', margin:'10px 500px'}} className={classes.formControl} onSubmit={handleSubmit}>
                <Grid container> 
                    <InputLabel id="demo-simple-select-outlined-label" style={{ margin : "20px"}}>ID : </InputLabel>
                    <Select 
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                    {ids.map( id => <MenuItem key={id} value={id}>{id}</MenuItem>)}
                    </Select>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={ratingChange}
                        />
                    </Box>
                </Grid> 
                <TextField style={{ margin:"20px"}} id="standard-basic" label="Comment" value={comment} onChange={commentChange}/>
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
            </form>
        </Grid>
    </Grid>
    )
}