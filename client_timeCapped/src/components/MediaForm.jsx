import React, { Component } from 'react'
import '../styles/mediaForm.css'


export default class MediaForm extends Component {
    render(){
        const {mediaChosen, handleSubmitText, handleSubmitLink, handleSubmitImage, newSub, handleSubChange } = this.props
            switch(mediaChosen) {
            case "text": 
            return(
                <div className="container" >
                    <form className="text-form" onSubmit={handleSubmitText}>
                        <input 
                        className="textbox"
                        name="text"
                        type="text"
                        value={newSub}
                        onChange={handleSubChange}
                        placeholder="write your story here"
                        />
                        <input className="submitCap" type="submit" value="submit to the capsule!"/>
                    </form>
                </div>)
            case "link": 
            return(
                <div>
                    <form className="link-form" onSubmit={handleSubmitLink}>
                        <input
                        className="linkbox"
                        type="text"
                        name="url"
                        value={newSub}
                        onChange={handleSubChange}
                        placeholder="add a link here" 
                        />
                        <input className="submitCap" type="submit" value="submit to the capsule!"/>
                    </form>

                </div>
            )
            case "image":
            return(
                <div>
                <form className="img-form" onSubmit={handleSubmitImage}>
                    <input 
                        className="imgbox"
                        type="text"
                        name="url"
                        placeholder="paste an image location link here"
                        value={newSub}
                        onChange={handleSubChange}
                        />
                    <br/>
                    <input className="submitCap" type="submit" value="submit to the capsule!"/>
                </form>
            </div>
            )
            default: 
            return null    
        }    
    }
}