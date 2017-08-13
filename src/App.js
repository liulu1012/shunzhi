import React from 'react'
import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'
import Sidebar from './ui/shared/Sidebar/Sidebar'
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
            <Sidebar />
            <Switch>
              <Route exact path='/' component={ Home } />
              <Route path='/signup' component={ Signup } />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App
