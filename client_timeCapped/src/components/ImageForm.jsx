import React, { Component } from 'react'


export default class ImageForm extends Component {

    render(){
        return(
            <div>
                <form className="img-form">
                    <input 
                        className="img-box"
                        type="file"
                        name="image-submission"
                        placeholder="upload your image here"
                    />
                </form>
            </div>
        )
    }
}