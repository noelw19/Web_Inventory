import React from 'react';
import { Grid, Input, InputLabel, FormControl, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    center: {
        textAlign: "center",
    },
    formCenter: {
        width: "70%",
        display: "flex",
        justifyContent: "space-around",
        margin: "1rem",
    },
    btn: {
        display: "flex",
        justifyContent: "center",


    }
})

const Login = () => {
    const classes = useStyles();
    return (
    <>
        <h1 className={classes.center}>Login</h1>
        <Grid  container justify="center">
            <FormControl className={classes.formCenter} required='true'>
                <InputLabel>Username</InputLabel>
                <Input type="text" placeholder="Enter your username"/>
            </FormControl>
            <FormControl className={classes.formCenter} required='true'>
                <InputLabel >Password</InputLabel>
                <Input type="text" placeholder="Enter your password"/>
            </FormControl>
        </Grid>
        <Grid container justify="center">
            <Button>Sumbit</Button>
        </Grid>
    </>
)};

export default Login;