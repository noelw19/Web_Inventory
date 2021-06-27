import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    centerHeader: {
        textAlign: "center",
        marginTop: "4rem",
    }
})

const Logout = () => {
    const classes = useStyles();
    return (
        <h1 className={classes.centerHeader}>Logout</h1>
    )
};

export default Logout;