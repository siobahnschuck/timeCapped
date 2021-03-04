import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import Capsule from './screens/Capsule'
import About from './screens/About'
import Stats from './screens/Stats'
import axios from 'axios'
import { BASE_URL, axiosConfig } from './globals'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      capsule: null,
      submitted: false,
      date: '',
      locations: '',
      email: '',
      newSub: ''
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/content/allc`, axiosConfig)
    this.setState({
      capsule: res.data
    })
    console.log(res)
    console.log(res.data)
  }

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value
    })
  }

  handleLocationChange = (e) => {
    this.setState({
      locations: e.target.value
    })
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleSubChange = (e) => {
    this.setState({
      newSub: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(`${BASE_URL}/api/user/new`, {
        date: this.state.date,
        locations: this.state.locations,
        email: this.state.email
      })
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  // handleDelete = async (req, res) => {
  //   if (this.state.capsule) {
  //     Object.keys(this.state.capsule).map((key) => {
  //       let value = this.state.capsule[key]
  //       switch (key) {
  //         case 'img':
  //           let res = await axios.delete(`${BASE_URL}/content/media/delete/${req.params.id}`)
  //           break;
  //         case 'url':
  //           let res = await axios.delete(`${BASE_URL}/content/link/delete/${req.params.id}`)
  //           break;
  //         case 'text':
  //           let res= await axios.delete(`${BASE_URL}/content/text/delete/${req.params.id}`)
  //           break;
  //         default:
  //           return null
  //       }
  //     })
  //   } else {
  //     console.log('failed')
  //   }
  // }

  handleSubmitText = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(`${BASE_URL}/content/text/add`, {
        text: this.state.newSub
      })
      this.setState({
        submitted: true
      })
      // this.state.capsule.push({
      //   newSub: this.state.newSub
      // })
      console.log(res.data)
      this.randomReturn()
      console.log('completed random return')
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  handleSubmitLink = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(`${BASE_URL}/content/link/add`, {
        url: this.state.newSub
      })
      this.setState({
        submitted: true
      })
      // this.state.capsule.push({
      //   newSub: this.state.newSub
      // })
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  handleSubmitImage = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(`${BASE_URL}/content/media/add`, {
        url: this.state.newSub,
        img: this.state.newSub
      })
      this.setState({
        submitted: true
      })
      // this.state.capsule.push({
      //   newSub: this.state.newSub
      // })
      console.log(res.data)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route
              exact
              path="/capsule"
              render={() => (
                <Capsule
                  date={this.state.date}
                  locations={this.state.locations}
                  email={this.state.email}
                  newSub={this.state.newSub}
                  capsule={this.state.capsule}
                  submitted={this.state.submitted}
                  handleSubmit={this.handleSubmit}
                  handleDate={this.handleDateChange}
                  handleLocation={this.handleLocationChange}
                  handleEmail={this.handleEmailChange}
                  handleSubChange={this.handleSubChange}
                  handleSubmitText={this.handleSubmitText}
                  handleSubmitLink={this.handleSubmitLink}
                  handleSubmitImage={this.handleSubmitImage}
                  handleDelete={this.handleDelete}
                />
              )}
            />
            <Route exact path="/stats" component={Stats} />
          </Switch>
        </main>
      </div>
    )
  }
}
