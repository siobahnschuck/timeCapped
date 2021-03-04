import React, { Component } from 'react'
import '../styles/capsule.css'
import Submission from './Submission'


export default class CapsuleForm extends Component {
    constructor() {
        super()
        this.state = {
            mediaChosen: "", 
            clicked: false,
        }
    }

    handleClick = (e) => {
        console.log('click')
        console.log(e.target.value)
        this.setState({
            mediaChosen: e.target.value, 
            clicked: true
        })
    }
    render() {
        return (
            <div>
            {(!this.state.clicked) ?
                <form className="user-form" onSubmit={this.props.handleSubmit}>
                    <input
                        type="text"
                        name="date"
                        placeholder="date"
                        value={this.props.date}
                        onChange={this.props.handleDate} />

                    <input
                        type="text"
                        name="location"
                        value={this.props.locations}
                        placeholder="where are you?"
                        onChange={this.props.handleLocation} />
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        value={this.props.email}
                        onChange={this.props.handleEmail} />
                    < input
                        type="submit"
                        value="next"
                        onClick={this.handleClick} />
                </form>
            : <Submission 
            mediaChosen={this.state.mediaChosen} 
            handleSubmitText={this.props.handleSubmitText} 
            handleSubmitLink={this.props.handleSubmitLink}
            handleSubmitImage={this.props.handleSubmitImage} 
            newSub={this.props.newSub} 
            handleSubChange={this.props.handleSubChange} 
            handleClick={this.handleClick}
            />}
                
            </div>
        )
    }
}