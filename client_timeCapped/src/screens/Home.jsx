import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/home.css'


export default class Home extends Component{
    render() {
        return(
            <div>
                <Header/>
                <main className="body">
                    <div className="info">
                    <p className="info-text">Time Capped sends you on an instant 
                    internet voyage. <br/> <br/> As an active time capsule any visitor to the capsule is welcomed to trade a piece of media for something out of the capsule. You might uncover 
                    something rare, a personal anecdote from another visitor, or a relic of meme history. <br/> <br/>There is only one way to find out!</p>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}