import React, { Component } from 'react'


export default class Reward extends Component {
    render() {
      const {capsule} = this.props
        return(
          <div className="return">
          <h1>Output here:</h1>
       <div>   
          {(capsule) ? Object.keys(capsule).map((key) => {
          let value = capsule[key]
          switch (key) {
              case 'img':
              console.log(value)
              return <img src={value} />
              case 'url':
              console.log(value)
              return <a href={value}> {value} </a>
              case 'text':
              console.log(value) 
              return <p> {value} </p>
              default:
              return null
          }
      }) : null }
      <button onClick={this.props.handleDelete}>DELETE</button>
              </div>
          </div>
        )
    }
}