import React, { Component } from 'react'
import '../styles/capsule.css'


export default class Stats extends Component{
    render() {
        const {stats} = this.props
        return(
            <div className="stats">
                    <div className="stats-info">
                    <button className="stats-btn" onClick={this.props.capsuleStats}> Capsule Stats </button>
                    <h2 className="stats-show">
                        Images: {stats[0]}
                        <br/>
                        Text Entries: {stats[1]}
                        <br/>
                        Links: {stats[2]}
                        <br/> 
                        Contributors: {stats[3]}
                    </h2>
                    </div>
            </div>
        )
    }
}