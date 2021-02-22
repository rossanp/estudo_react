import React from "react"
import Logo from "./Logo"
import Menu from "./Menu"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    contHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px black solid',
        padding: '0 15px',
    },
})

export default function Header(){
    const classes = useStyles();

    return(
        <div className={classes.contHeader}>
            <div>
                <Logo />
            </div>
            <div>
                <Menu />
            </div>
        </div>
    )
}