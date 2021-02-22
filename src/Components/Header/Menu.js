import React from "react"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    menu: {
        display: 'flex',
    },
    li: {
        listStyle: 'none',
        
        margin: '0 0 0 10px'
    },
    a: {
        textDecoration:'none',
        color: 'black',
        '&:hover': {
            color: 'red',
        },
        '&:visited': {
            color: 'blue',
            backgroundColor: 'yellow',
        },
    },
    
})

export default function Menu(){
    const classes = useStyles();

    return (
        <ul className={classes.menu}>
            <li className={classes.li}><a className={classes.a} href="#">Home</a></li>
            <li className={classes.li}><a className={classes.a} href="#">Cardápio</a></li>
            <li className={classes.li}><a className={classes.a} href="#">Sobre</a></li>
        </ul>
    )
}