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
                <div className="sidebar">
                <h1>Welcome to the Capsule</h1>
                <p>You will be prompted to enter some information about either your 
                    <br/> submission into the capsule or you yourself, please fill out the following
                    <br/> questions carefully! When you are completed with your submission 
                    <br/> you will recieve a random part of the capsule as a reward! You then have the opiton to delete it permanently.
                </p>
                </div >
                <div className="forms"> 
                <CapsuleForm 
                handleSubmitText={handleSubmitText} 
                handleSubmitLink={handleSubmitLink} 
                handleSubmitImage={handleSubmitImage} 
                handleSubChange={handleSubChange} 
                newSub={newSub} 
                handleLocation={handleLocation} 
                handleDate={handleDate} 
                handleEmail={handleEmail} 
                date={date} locations={locations} email={email}  />
                {submitted ? <Reward capsule={capsule} handleDelete={handleDelete}/> : null } 
                </div>
                </main>
                <Footer/>
            </div>
        )
    }
}