import React, { Component } from 'react'


export default class MediaForm extends Component {
    render(){
        const {mediaChosen, handleSubmitText, newSub, handleSubChange } = this.props
            switch(mediaChosen) {
            case "text": 
            return(
                <div>
                    <form className="text-form" onSubmit={handleSubmitText}>
                        <input 
                        className="textbox"
                        type="text"
                        value={newSub}
                        onChange={handleSubChange}
                        name="text-submission"
                        placeholder="write your story here"
                        />
                        <input type="submit" value="submit to the capsule!"/>
                    </form>
                </div>)
            case "link": 
            return(
                <div>
                    <form className="link-form" onSubmit={handleSubmitText}>
                        <input
                        className="linkbox"
                        type="text"
                        name="link-submission"
                        value={newSub}
                        onChange={handleSubChange}
                        placeholder="add a link here" 
                        />
                        <input type="submit" value="submit to the capsule!"/>
                    </form>

                </div>
            )
            case "image":
            return(
                <div>
                <form className="img-form">
                    <input 
                        className="img-box"
                        type="file"
                        name="image-submission"
                        value={newSub}
                        onChange={handleSubChange}
                        placeholder="upload your image here"
                    />
                    <input type="submit" value="submit to the capsule!"/>
                </form>
            </div>
            )
            default: 
            return null    
        }    
    }
}