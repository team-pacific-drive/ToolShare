import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import NavBar from './NavBar'
import MyTools from '../pages/MyTools'
import NewTools from '../pages/NewTools'
import ToolDetail from '../pages/ToolDetail'

class AuthenticatedApp extends React.Component {
  render () {
    console.log(this.state);
    return (
      <Router>
        <div>
          <NavBar/>
          <h1>Member Page</h1>
          <Route path="/my_tools" exact component={MyTools}/>
          <Route path="/my_tools/:id" exact component={ToolDetail}/>
          <Route path='/add_tools' exact component={NewTools} />
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
