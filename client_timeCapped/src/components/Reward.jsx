import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL} from '../globals'


export default class Reward extends Component {
    imgDelete = async (e) => {
      let res = await axios.delete(`${BASE_URL}/content/media/delete/${this.props.capsule._id}`)
    }

    textDelete = async (e) => {
      let res = await axios.delete(`${BASE_URL}/content/text/delete/${this.props.capsule._id}`)
    }

    linkDelete = async (e) => {
      let res = await axios.delete(`${BASE_URL}/content/link/delete/${this.props.capsule._id}`)
    }


    render() {
      const {capsule} = this.props
      console.log(capsule._id)
        return(
          <div className="return">
          <h1>Output here:</h1>
       <div>   
          {(capsule) ? Object.keys(capsule).map((key) => {
          let value = capsule[key]
          switch (key) {
              case 'img':
              console.log(value)
              return (<div> <img src={value} />
              <button onClick={this.imgDelete}>Delete</button> </div>)
              case 'url':
              console.log(value)
              return (<div><a href={value}> {value} </a>
              <button onClick={this.linkDelete}>DELETE</button>
              </div>)
              case 'text':
              console.log(value) 
              return (<div><p> {value} </p>
              <button onClick={this.textDelete}>DELETE</button></div>)
              default:
              return null
          }
      }) : null }
              </div>
          </div>
        )
    }
}