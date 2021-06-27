import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    center: {
        textAlign: "center",
    },
    ul: {
        listStyle: "none",
    },
})

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <h1 className={classes.center}>Web-based Inventory System</h1>
            <br/>
            <Grid container direction='row' justify='center' GridSpacing={24}>
                <Grid item xl={6} md={4} sm={12}>
                    <ul className={classes.ul}>To do:
                        <li>-------------------------------------------------------</li>
                        <li>1.Front end setup - React/MaterialUI</li>
                        <li>2.Back end setup - python</li>
                        <li>3.Sqlite db setup</li>
                        <li>4.Reddis cache setup - local state cache</li>
                        <li>5.Login/Logout functionality</li>
                        <li>6.MicroServices</li>
                    </ul>
                </Grid>
                <Grid item xl={6} md={4} sm={12} justify="center">
                    <h2 className={classes.center}>What is this project?</h2>
                    <p>A web based POS and Inventory system.</p>
                    <h4>What should it do?</h4>
                    <p>Essentially the project should be able to:<ul>
                            <li>Add and remove products from customer inventory instance</li>
                            <li>Customer login</li>
                            <li>sqlite database to store all inventory/customer data</li>
                            <li>be able to use the system as a point of sale</li>
                            <li>Inventory is adjusted according to the products sold using the pos</li>
                            <li>Order alerts for selected product stock levels</li>
                            <li>Update stock levels and other prod details</li>
                        </ul></p>
                </Grid>
            </Grid>
        </>
    )
};

export default Home;