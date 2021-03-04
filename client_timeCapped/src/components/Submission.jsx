import React, {Component} from 'react'
import MediaForm from './MediaForm'


export default class Submission extends Component {
  render(){
    return(
      <div>
        <p>What would you like to contribute?</p>
        <button value="text" onClick={this.props.handleClick} >Text</button>
        <button value="link" onClick={this.props.handleClick}>Link</button>
        <button value="image" onClick={this.props.handleClick}>Image</button>
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