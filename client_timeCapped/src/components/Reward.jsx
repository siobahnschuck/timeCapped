import React, { Component } from 'react'
import {FacebookShareButton, TwitterShareButton, EmailShareButton} from 'react-share'
import {FacebookIcon, TwitterIcon, EmailIcon} from 'react-share'
import '../styles/mediaForm.css'

export default class Reward extends Component {
    render() {
      const {capsule} = this.props
        return(
          <div>
            {!this.props.deleted ?
            <div className="reward title">
              <h1>From Inside:</h1>
                <div className="content">
                  {(capsule) ? Object.keys(capsule).map((key) => {
                    let value = capsule[key]
                    switch (key) {
                      case 'img':
                        console.log(value)
                        return (<div className="imgReward"> <div> <img src={value} alt="poster" style={{height: 350, width: 350}} /> </div>
                          <div className="social">
                            <FacebookShareButton url="http://localhost:3000/capsule" quote={"Look what I got out of the capsule!"}
                            hashtag="#React #NetArt">
                            <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                            </FacebookShareButton>
                            <TwitterShareButton title="Internet Capsule" via="http://localhost:3000/capsule" hashtags="[#React #NetArt]"><TwitterIcon logoFillColor="white" round={true}></TwitterIcon></TwitterShareButton>
                            <EmailShareButton subject="Look at what I pulled from this Internet Time Capsule!"><EmailIcon logoFillColor="white" round={true}></EmailIcon></EmailShareButton> 
                            <button className="delete" ><img className="trash" src="https://img.icons8.com/wired/64/000000/delete-forever.png" alt="trash" onClick={this.props.imgDelete}/></button>
                            <button type="button" className="submit-btn" onClick={this.props.startOverClick}>RESET</button>
                            </div> 
                          </div>)
                      case 'url':
                        console.log(value)
                        return (
                        <div className="linkReward"> <div><a href={value} target="_blank" rel="noreferrer" style={{fontSize: 50}}> {value} </a></div>
                          <div className="social">
                          <FacebookShareButton url="http://localhost:3000/capsule" quote={"Look what I got out of the capsule!"}
                          hashtag="#React #NetArt">
                          <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                          </FacebookShareButton>
                          <TwitterShareButton title="Internet Capsule" via="http://localhost:3000/capsule" hashtags="[#React #NetArt]"><TwitterIcon logoFillColor="white" round={true}></TwitterIcon></TwitterShareButton>
                          <EmailShareButton subject="Look at what I pulled from this Internet Time Capsule!"><EmailIcon logoFillColor="white" round={true}></EmailIcon></EmailShareButton>
                          <button className="delete" ><img className="trash" src="https://img.icons8.com/wired/64/000000/delete-forever.png" alt="trash" onClick={this.props.linkDelete}/></button>
                          <button type="button" className="submit-btn" onClick={this.props.startOverClick}>RESET</button>
                          </div>
                        </div>)
                      case 'text':
                        console.log(value) 
                        return (
                        <div className="text-reward"><p style={{fontSize: 20}}> {value} </p>
                          <div className="social">
                          <FacebookShareButton url="http://localhost:3000/capsule" quote={"Look what I got out of the capsule!"}
                          hashtag="#React #NetArt">
                          <FacebookIcon logoFillColor="white" round={true}></FacebookIcon>
                          </FacebookShareButton>
                          <TwitterShareButton title="Internet Capsule" via="http://localhost:3000/capsule" hashtags="[#React #NetArt]"><TwitterIcon logoFillColor="white" round={true}></TwitterIcon></TwitterShareButton>
                          <EmailShareButton subject="Look at what I pulled from this Internet Time Capsule!"><EmailIcon logoFillColor="white" round={true}></EmailIcon></EmailShareButton>
                          <button className="delete" ><  img className="trash" src="https://img.icons8.com/wired/64/000000/delete-forever.png" alt="trash" onClick={this.props.textDelete}/></button>
                          <button type="button" className="submit-btn" onClick={this.props.startOverClick}>RESET</button>
                          </div>
                        </div>)
                      default:
                        return null} 
                          }) : null}
                    </div> 
                </div>: null }
            </div>
        )
    }
}