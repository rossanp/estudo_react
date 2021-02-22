import React from "react"
/* import Styled from "styled-components" */

/* const logo = <div></div>
const menu = (
    <div>

    </div>
) */

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <p>LOGO</p>
                </div>
                <div>
                <ul>
                    <li>Home</li>
                    <li>Cardápio</li>
                    <li>Sobre</li>
                </ul>
                </div>
            </div>
        )
    }
}
