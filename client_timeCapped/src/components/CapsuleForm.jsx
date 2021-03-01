import React, { Component } from 'react'


export default class CapsuleForm extends Component {
    render(){
        return (
            <div>
                <form >
                <input 
                    type="text" 
                    name="date"
                    placeholder="date" />
                <input  
                    type="text" 
                    name="location"
                    placeholder="where are you?" />
                <input  
                    type="text" 
                    name="email"
                    placeholder="email" />
                < input 
                    type="submit"
                    value="submit" />
                </form>
            </div>
        )
    }
}