import React, {Component} from 'react'
import MediaForm from './MediaForm'
import '../styles/mediaForm.css'


export default class Submission extends Component {
  render(){
    return(
      <div className="container-sub-form">
        <p className="contrib">What would you like to contribute?</p>
        <button className="type-btn" value="text" onClick={this.props.handleClick} >Text</button>
        <button className="type-btn" value="link" onClick={this.props.handleClick}>Link</button>
        <button className="type-btn" value="image" onClick={this.props.handleClick}>Image</button>
        <div>
        <MediaForm mediaChosen={this.props.mediaChosen} 
        handleSubmitText={this.props.handleSubmitText} 
        handleSubmitLink={this.props.handleSubmitLink}
        handleSubmitImage={this.props.handleSubmitImage} 
        newSub={this.props.newSub} 
        handleSubChange={this.props.handleSubChange}/>
        </div>
    </div>
    )
  }
}