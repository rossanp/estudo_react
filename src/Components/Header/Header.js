import React from "react"
/* import Styled from "styled-components" */
import Logo from "./Logo"
import Menu from "./Menu"


export default class Header extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Logo />
                </div>
                <div>
                    <Menu />
                </div>
            </div>
        )
    }
}
