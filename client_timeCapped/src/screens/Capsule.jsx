import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CapsuleForm from '../components/CapsuleForm'

import '../styles/capsule.css'


export default class Capsule extends Component {
    

    render() {
       
        const { handleSubmitText, handleSubmitLink, handleSubChange, handleDate, newSub, handleLocation, handleEmail, date, locations, email} = this.props
        return(
            <div> 
                <Header />
                <main className="body">
                this is the capsule
                <CapsuleForm handleSubmitText={handleSubmitText} handleSubmitLink={handleSubmitLink} handleSubChange={handleSubChange} newSub={newSub} handleLocation={handleLocation} handleDate={handleDate} handleEmail={handleEmail} 
                date={date} locations={locations} email={email}  />
                </main>
                <Footer/>
            </div>
        )
    }
}