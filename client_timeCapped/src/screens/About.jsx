import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'


export default class About extends Component{
    render() {
        return(
            <div>
                <Header/>
                <main className="body">
                    <p>This is the about page</p>
                </main>
                <Footer/>
            </div>
        )
    }
}