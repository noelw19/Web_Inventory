import React from 'react';
import {Grid, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    center: {
        textAlign: "center",
    },
    imgLarge: {
        width: "60%",
        height: "100%",
        border: "2px solid var(--primary)",
    },
    cont: {
        width: "100vw",
        height: "100%",
        marginLeft: "1rem",
        marginTop: "1rem",
    },
})

let username = "John95";
let store = "Burger Culture";


const Profile = () => {
    const classes = useStyles();
    return (
    <>
        <Grid container className={classes.cont} lg={12}>
            <Grid container lg={4}>
                <Grid container lg={6} sm={6} xs={6}>
                    <Avatar className={classes.imgLarge} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6ZvWCLB4tHl5Oevvca3oHQEsEM%26pid%3DApi&f=1" alt="haha"/>
                </Grid>
                <Grid container lg={6} sm={6} xs={6}>Hello {username}</Grid>
            </Grid>
        </Grid>

    </>
    )
};

export default Profile;