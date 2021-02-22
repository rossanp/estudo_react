import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    boxLogo: {
        border: '1px black solid',
        height: 50,
        width: 50,
        backgroundColor: 'silver',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        margin: '5px 0',
    },
    textLogo: {
        margin: 0,
        color: 'red',
    },
});

export default function Logo(){
    const classes = useStyles();
    return (
    <div className={classes.boxLogo}>
        <p className={classes.textLogo}>Logo</p>
    </div>
    )
};