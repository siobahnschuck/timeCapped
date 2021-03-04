import React, { Component } from 'react'
import '../styles/capsule.css'


export default class Stats extends Component{
    render() {
        return(
            <div className="stats">
                    <div className="info">
                    <button className="stats-btn" onClick={this.props.capsuleStats}> Capsule Stats </button>
                    </div>
            </div>
        )
    }
}