import React, { Component } from 'react'
import '../styles/capsule.css'
import MediaForm from './MediaForm'

export default class CapsuleForm extends Component {
    constructor() {
        super()
        this.state = {
            mediaChosen: ""
        }
    }

    //click changes state of mediaChosen to the button value
    handleClick = (e) => {
        console.log('click')
        console.log(e.target.value)
        this.setState({
            mediaChosen: e.target.value
        })
    }
    render() {
        return (
            <div>
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
                        value="next" />
                </form>
                <div>
                    <p>What would you like to contribute?</p>
                    <button value="text" onClick={this.handleClick} >Text</button>
                    <button value="link" onClick={this.handleClick}>Link</button>
                    <button value="image" onClick={this.handleClick}>Image</button>
                    <MediaForm mediaChosen={this.state.mediaChosen} handleSubmitText={this.props.handleSubmitText} newSub={this.props.newSub} handleSubChange={this.props.handleSubChange}/>
                </div>
         
     
            </div>
        )
    }
}