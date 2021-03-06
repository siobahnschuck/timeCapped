import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import graphic from '../styles/img/homePageGraphic.png'

import '../styles/about.css'
export {graphic}


export default class About extends Component{
    render() {
        return(
            <div>
                <Header/>
                <main className="about-body">
                    <h1 className="about-title">About TimeCapped and It's Creator</h1>
                    <br/>
                    <br/>
                    <h4 className="about-content"> 
                    Fostered from a deep love of the Voager Golden Record and archival practices. Time capped aims to be a platform of an internet expierement and a way to instantly ignite nostalgia. If you are interested in the open source code, head over to <a href="https://github.com/siobahnschuck/timeCapped" target="_blank" rel="noreferrer">GitHub</a> 
                    <br/>
                    If you would like to collaborate, expand, or take the capsule a step further feel free to reach out!
                    <br/>
                    <br/>
                    Siobahn Schuck is a video artist turned web developer focused on 
                    creating tools for other creatives that both spark joy and create 
                    community. 
                    </h4>
                    <div className="contact">
                        <img className="self" alt="headshot" src="https://i.ibb.co/crBcF88/IMG-9310-2.jpg"/>
                        <a href="https://www.linkedin.com/in/siobahnschuck/" target="_blank" rel="noreferrer"><img className="linkedIn" alt="linkedin" src="https://i.ibb.co/m8BwLfS/linkedin-Icon.png"/> </a>
                        <h3 className="email-abt">siobahnschuck@gmail.com </h3>
                    </div>
                    <div className="graphic-abt" >
                        <img className="bliss-abt" src={graphic} alt="home-Page-Graphic" border="0"/>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}