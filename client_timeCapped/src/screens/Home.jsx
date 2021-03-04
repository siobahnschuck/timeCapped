import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import graphic from '../styles/img/homePageGraphic.png'
import {NavLink} from 'react-router-dom'
import '../styles/home.css'
// import './assets/css/font.css'
export {graphic}


export default class Home extends Component{
    render() {
        return(
            <div>
              <Header/>
                <main className="home-body">
                  <section>
                  <p className="info-text"><h1 className="app-intro">TimeCapped</h1> 
                  Time Capped sends you on an instant 
                  internet voyage. <br/> <br/> As an active time capsule any visitor to the capsule is welcomed to trade a piece of media for something out of the capsule. You might uncover 
                  something rare, a personal anecdote from another visitor, or a relic of meme history. <br/> <br/>There is only one way to find out!</p>
                  </section>
                  <NavLink to="/capsule" className="cap-txt">Enter the capsule</NavLink>
                  <div className="graphic" >
                  <img className="bliss" src={graphic} alt="home-Page-Graphic" border="0"/>
                  </div>
                  
                </main>
            </div>
        )
    }
}