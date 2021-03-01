import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from './screens/Home'
import Capsule from './screens/Capsule'
import About from './screens/About'
import Stats from './screens/Stats'
import './App.css';


export default class App extends Component{
  constructor() {
    super()
    this.state ={
      capsule: [], 
      submitted: false,
    }
  }
  render(){
    return(
      <div className="App">
        <main>
          <Switch> 
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/capsule" component={Capsule}/>
            <Route exact path="/stats" component={Stats}/>
          </Switch>
        </main>
      </div>
    )
  }
};
