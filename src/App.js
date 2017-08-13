import React from 'react'
import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'
import Sidebar from './ui/shared/Sidebar/Sidebar'
import Dashboard from './ui/pages/Dashboard/Dashboard'
import './main.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
}from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
              <Route render={({ location }) => {
                return location.pathname !== '/' ?
                (<Sidebar />) : null
              }} />
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route path='/signup' component={ Signup } />
              <Route path='/dashboard' component={ Dashboard } />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
