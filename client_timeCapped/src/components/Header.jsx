import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'
import '../styles/header.css'

export default class Header extends Component {
    render() {
        return(
            <div className="header"> 
                <div className="logo">
                <NavLink to="/">
                <img 
                    src="https://i.ibb.co/zPJCxJY/t-C-logo-50px.png" 
                    width="50px"
                    alt="logo"
                    />
                </NavLink>
                </div >
                <div className="navContainer">
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
                </div>
            </div>
        )
    }
}