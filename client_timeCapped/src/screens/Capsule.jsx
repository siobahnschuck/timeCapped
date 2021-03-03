import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CapsuleForm from '../components/CapsuleForm'

import '../styles/capsule.css'


export default class Capsule extends Component {
    

    render() {
       
        const { handleSubmitText, handleSubmitLink, handleSubmitImage, handleSubChange, handleDate, newSub, handleLocation, handleEmail, date, locations, email, capsule, submitted} = this.props
        console.log(capsule)
        return(
            <div> 
                <Header />
                <main className="body">
                this is the capsule
                <CapsuleForm handleSubmitText={handleSubmitText} handleSubmitLink={handleSubmitLink} handleSubmitImage={handleSubmitImage} handleSubChange={handleSubChange} newSub={newSub} handleLocation={handleLocation} handleDate={handleDate} handleEmail={handleEmail} 
                date={date} locations={locations} email={email}  />
                {submitted ? 
                <div className="return">
                    <h1>Output here:</h1>
                 <div>   
                    {(capsule) ? Object.keys(capsule).map((key) => {
                    let value = capsule[key]
                    switch (key) {
                        case 'img':
                        console.log(value)
                        let imVal = <img src={value} />
                        return imVal
                        case 'url':
                        console.log(value)
                        let urlVal = <a href={value}> {value} </a>
                        return urlVal
                        case 'text':
                        console.log(value)
                        let textVal = <p> {value} </p>
                        return textVal
                        default:
                        return null
                    }
                }) : null }
                        </div>
                    </div> : null } 
                </main>
                <Footer/>
            </div>
        )
    }
}