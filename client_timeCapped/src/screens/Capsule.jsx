import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CapsuleForm from '../components/CapsuleForm'
import TextForm from '../components/MediaForm'
import ImageForm from '../components/ImageForm'
import LinkForm from '../components/LinkForm'
import '../styles/capsule.css'


export default class Capsule extends Component {
    

    render() {
       
        const { handleSubmit, handleSubChange, handleDate, handleLocation, handleEmail, date, locations, email} = this.props
        return(
            <div> 
                <Header />
                <main className="body">
                this is the capsule
                <CapsuleForm handleSubmit={handleSubmit} handleLocation={handleLocation} handleDate={handleDate} handleEmail={handleEmail} 
                date={date} locations={locations} email={email} handleSubChange={handleSubChange}  />
                </main>
                <Footer/>
            </div>
        )
    }
}