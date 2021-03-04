import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reward from '../components/Reward'
import CapsuleForm from '../components/CapsuleForm'

import '../styles/capsule.css'


export default class Capsule extends Component {
    

    render() {
       
        const { handleSubmitText, handleSubmitLink, handleSubmitImage, handleSubChange, handleDate, newSub, handleLocation, handleEmail, date, locations, email, capsule, submitted, handleDelete} = this.props
        console.log(capsule)
        return(
            <div> 
                <Header />
                <main className="body">
                this is the capsule
                <CapsuleForm handleSubmitText={handleSubmitText} handleSubmitLink={handleSubmitLink} handleSubmitImage={handleSubmitImage} handleSubChange={handleSubChange} newSub={newSub} handleLocation={handleLocation} handleDate={handleDate} handleEmail={handleEmail} 
                date={date} locations={locations} email={email}  />
                {submitted ? <Reward capsule={capsule} handleDelete={handleDelete}/> : null } 
                </main>
                <Footer/>
            </div>
        )
    }
}