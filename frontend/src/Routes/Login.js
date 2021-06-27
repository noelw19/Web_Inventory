import React from 'react';
import { Grid, Input, InputLabel, FormControl, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    center: {
        textAlign: "center",
    },
    formCenter: {
        width: "40%",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
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
        <Grid  container justify="center" direction="column">
            <Grid container justify="center" direction="column" alignItems="center">
            <FormControl className={classes.formCenter} required='true'>
                <InputLabel>Username</InputLabel>
                <Input type="text" placeholder="Enter your username"/>
            </FormControl>
            </Grid>
            <Grid container justify="center" direction="column" alignItems="center">
            <FormControl className={classes.formCenter} required='true'>
                <InputLabel >Password</InputLabel>
                <Input type="text" placeholder="Enter your password"/>
            </FormControl>
            </Grid>
        </Grid>
        <Grid container justify="center">
            <Button>Sumbit</Button>
        </Grid>
    </>
)};

export default Login;