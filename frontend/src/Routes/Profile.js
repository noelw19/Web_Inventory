import React from 'react';
import {Grid, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    full: {
        height: "55vh",
    },
    center: {
        textAlign: "center",
    },
    imgLarge: {
        width: "60%",
        height: "100%",
        border: "2px solid var(--primary)",
    },
    container: {
        width: "100vw",
        height: "100%",
        marginLeft: "1rem",
        marginTop: "2rem",
    },
    ml: {
        paddingLeft: "1rem",
    },
    avatarDisplay: {
        padding: ".5rem",
    },
    underline: {
        textDecoration: "underline",
    }
})

let userData = {
    username: "John95",
    itemsSoldSinceLastLogin:50,
    store: "BC",
}

const Profile = () => {
    const classes = useStyles();

    const Avatar_Intro = () => (
            <Grid container className={classes.container} lg={12}>
            <Grid container lg={5}>
                <Grid container style={{backgroundColor: "#089de3", paddingTop: ".5rem", borderTop: "1px solid orange", borderLeft: "1px solid orange", borderRight: "1px solid orange", borderBottom: "2px solid #089de3", zIndex: "5", position: "relative", top: "2px"}} lg={6} sm={6} xs={6} justify="center">
                    <Avatar className={classes.imgLarge} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6ZvWCLB4tHl5Oevvca3oHQEsEM%26pid%3DApi&f=1" alt="haha"/>
                </Grid>
                <Grid container className={classes.avatarDisplay} lg={6} sm={6} xs={6}>
                    <p>Welcome back {userData.username}</p>
                    {userData.itemsSoldSinceLastLogin > 0 && <>
                        <p><span className={classes.underline}>Tracking stock for</span>: {userData.store}</p>
                        <p><span className={classes.underline}>Items sold since last login</span>: {userData.itemsSoldSinceLastLogin}</p>
                    </>}
                </Grid>
            </Grid>
        </Grid>
    )
    

    return (
    <>
        {Avatar_Intro()}
        <Grid container className={classes.ml} style={{backgroundColor: "#089de3", color: "white", border: "1px solid orange"}} lg={12}>
            <Grid container  className={classes.full} lg={12} sm={12} justify="space-between">
                <Grid item lg={6}>
                    <h3 className={classes.center} style={{width: "100%", height: "10%"}}>Updates</h3>
                    <Grid item lg={12}>
                        <p>lorem ipsum dolor sit amet, consectetur</p>
                    </Grid>
                </Grid>
                <Grid item lg={6}>
                    <h3 className={classes.center} style={{width: "100%", height: "10%"}}>News</h3>
                    <Grid item lg={12}>
                        <p>lorem ipsum dolor sit amet, consectetur</p>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
    )
};

export default Profile;