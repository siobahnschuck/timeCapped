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
      capsule: [],
      submitted: false,
      date: '',
      locations: '',
      email: '',
      newSub: ''
    }
  }

  async componentDidMount() {
    const res = await axios.get(`${BASE_URL}/api/user`, axiosConfig)
    console.log(res)
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

  randomReturn = () => {}

  handleSubmitText = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(`${BASE_URL}/content/text/add`, {
        newSub: this.state.newSub
      })
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
                  handleSubmit={this.handleSubmit}
                  handleDate={this.handleDateChange}
                  handleLocation={this.handleLocationChange}
                  handleEmail={this.handleEmailChange}
                  handleSubChange={this.handleSubChange}
                  handleSubmitText={this.handleSubmitText}
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
