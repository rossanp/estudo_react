import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    logo: {
        border: '1px black solid',
        height: 10,
        width: 10,
    },
});

export default function Logo(){
    return (
    <div className="useStyles">
        <p>Logo</p>
    </div>
    )
};