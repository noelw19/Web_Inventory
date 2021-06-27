import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    center: {
        textAlign: "center",
    },
})


const Product_Info = () => {
    const classes = useStyles();
    return (
    <h1 className={classes.center}>Inventory System</h1>
    )
};

export default Product_Info;