import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reward from '../components/Reward'
import Stats from './Stats'
import CapsuleForm from '../components/CapsuleForm'

import '../styles/capsule.css'


export default class Capsule extends Component {
    

    render() {
       
        const { handleSubmitText, handleSubmit, handleSubmitLink, handleSubmitImage, handleSubChange, handleDate, newSub, handleLocation, handleEmail, date, locations, email, capsule, submitted, imgDelete, textDelete, linkDelete, deleted, startOverClick, stats} = this.props
        
        return(
            <div> 
                <Header />
                <main className="body">
                <div className="sidebar">
                <h1>Welcome to the Capsule</h1>
                <p className="instructions">You will be prompted to enter some information about either your 
                    <br/> submission into the capsule or you yourself, please fill out the following
                    <br/> questions carefully! When you are completed with your submission 
                    <br/> you will recieve a random part of the capsule as a reward! You then have the opiton to delete it permanently.
                </p>
                <Stats capsuleStats={this.props.capsuleStats} stats={stats}/>
                </div>
                <div className="forms"> 
                <CapsuleForm 
                handleSubmit={handleSubmit}
                handleSubmitText={handleSubmitText} 
                handleSubmitLink={handleSubmitLink} 
                handleSubmitImage={handleSubmitImage} 
                handleSubChange={handleSubChange} 
                newSub={newSub} 
                handleLocation={handleLocation} 
                handleDate={handleDate} 
                handleEmail={handleEmail} 
                date={date} locations={locations} email={email}  />
                {submitted ? <Reward capsule={capsule} imgDelete={imgDelete} textDelete={textDelete} linkDelete={linkDelete} deleted={deleted} startOverClick={startOverClick} /> : null } 
                </div>
                </main>
                <Footer/>
            </div>
        )
    }
}