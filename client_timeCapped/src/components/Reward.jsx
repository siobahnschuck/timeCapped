import React, { Component } from 'react'
import axios from 'axios'
import { BASE_URL} from '../globals'


export default class Reward extends Component {
  constructor(){
    super()
    this.state = {
      deleted: false
    }
  }
    imgDelete = async (e) => {
      try{
        let res = await axios.delete(`${BASE_URL}/content/media/delete/${this.props.capsule._id}`)
        this.setState({deleted: true})
      }catch(error){
        console.log(error)
      }
    }

    textDelete = async (e) => {
      try{
        let res = await axios.delete(`${BASE_URL}/content/text/delete/${this.props.capsule._id}`)
        this.setState({deleted: true})
      }catch(error){
        console.log(error)
      }
    }

    linkDelete = async (e) => {
      try{
        let res = await axios.delete(`${BASE_URL}/content/link/delete/${this.props.capsule._id}`)
        this.setState({deleted: true})
      }catch(error){
        console.log(error)
      }
    }


    render() {
      const {capsule} = this.props
      console.log(capsule._id)
        return(
          <div className="return">
          <h1>Output here:</h1>
       <div> 
         {!this.state.deleted ?
         <div className="outer">
          {(capsule) ? Object.keys(capsule).map((key) => {
          let value = capsule[key]
          switch (key) {
              case 'img':
              console.log(value)
              return (<div> <img src={value} alt="poster" />
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
        </div> : null }
              </div>
          </div>
        )
    }
}