import React, { Component } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/home.css'


export default class Stats extends Component{
    render() {
        return(
            <div className="stats">
                    <div className="info">
                    <p>There are currently this many items in the capsule:</p>
                    </div>
            </div>
        )
    }
}