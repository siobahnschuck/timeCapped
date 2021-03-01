import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CapsuleForm from '../components/CapsuleForm'
import '../styles/capsule.css'


export default class Capsule extends Component {
    render() {
        return(
            <div> 
                <Header />
                <main className="body">
                this is the capsule
                <CapsuleForm/>
                </main>
                <Footer/>
            </div>
        )
    }
}