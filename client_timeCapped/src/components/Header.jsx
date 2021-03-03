import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import '../styles/header.css'

export default class Header extends Component {
    render() {
        return(
            <div className="header"> 
                <div>
                <NavLink to="/">
                <img 
                    src=".../public/img/tC-logo-50px.png"
                    className="logo"
                    width="50px"
                    alt="logo"
                    />
                </NavLink>
                </div>
                <ul className="navContainer">
                <NavLink to="/about" 
                className="about-nav"
                style={{ textDecoration: 'none', color: 'black' }}> 
                ABOUT
                </NavLink>
                <NavLink to="/capsule" 
                className="capsule-nav"
                style={{ textDecoration: 'none', color: 'black' }}> 
                CAPSULE
                </NavLink>
                <NavLink to="/stats"
                className="capsule-nav"
                style={{ textDecoration: 'none', color: 'black' }}> 
                STATS
                </NavLink>
                </ul>
            </div>
        )
    }
}