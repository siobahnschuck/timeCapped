import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import Capsule from './screens/Capsule'
import About from './screens/About'
import axios from 'axios'
import { BASE_URL } from './globals'
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
      newSub: '',
      deleted: false,
      stats: []
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/content/allc`)
    this.setState({
      capsule: res.data
    })
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
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  handleSubmitText = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(`${BASE_URL}/content/text/add`, {
        text: this.state.newSub
      })
      this.setState({
        submitted: true
      })
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
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  handleSubmitImage = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(`${BASE_URL}/content/media/add`, {
        img: this.state.newSub
      })
      this.setState({
        submitted: true
      })
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  imgDelete = async (e) => {
    try {
      let res = await axios.delete(
        `${BASE_URL}/content/media/delete/${this.state.capsule._id}`
      )
      this.setState({ deleted: true, newSub: '', submitted: false })
      this.componentDidMount()
    } catch (error) {
      console.log(error)
    }
  }

  textDelete = async (e) => {
    try {
      let res = await axios.delete(
        `${BASE_URL}/content/text/delete/${this.state.capsule._id}`
      )
      this.setState({ deleted: true, newSub: '', submitted: false })
      this.componentDidMount()
    } catch (error) {
      console.log(error)
    }
  }

  linkDelete = async (e) => {
    try {
      let res = await axios.delete(
        `${BASE_URL}/content/link/delete/${this.state.capsule._id}`
      )
      this.setState({ deleted: true, newSub: '', submitted: false })
      this.componentDidMount()
    } catch (error) {
      console.log(error)
    }
  }

  startOverClick = () => {
    this.setState({ deleted: false, newSub: '', submitted: false })
    this.componentDidMount()
  }

  capsuleStats = async (e) => {
    try {
      let res = await axios.get(`${BASE_URL}/content/all/types`)
      this.setState({ stats: res.data })
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
                  deleted={this.state.deleted}
                  stats={this.state.stats}
                  handleSubmit={this.handleSubmit}
                  handleDate={this.handleDateChange}
                  handleLocation={this.handleLocationChange}
                  handleEmail={this.handleEmailChange}
                  handleSubChange={this.handleSubChange}
                  handleSubmitText={this.handleSubmitText}
                  handleSubmitLink={this.handleSubmitLink}
                  handleSubmitImage={this.handleSubmitImage}
                  imgDelete={this.imgDelete}
                  textDelete={this.textDelete}
                  linkDelete={this.linkDelete}
                  startOverClick={this.startOverClick}
                  capsuleStats={this.capsuleStats}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
