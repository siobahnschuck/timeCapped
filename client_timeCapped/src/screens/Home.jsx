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
                    <p>This is the home page</p>
                </main>
                <Footer/>
            </div>
        )
    }
}