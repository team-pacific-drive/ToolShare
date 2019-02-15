import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import NavBar from './NavBar'

import AllListings from '../pages/AllListings'
import MyTools from '../pages/MyTools'
import NewTools from '../pages/NewTools'
import ToolDetail from '../pages/ToolDetail'


class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar/>
          <h1>Member Page</h1>
          <Route path='/all_listings' component={AllListings}/>
          <Route path="/my_tools" exact component={MyTools}/>
          <Route path="/tool_details/:id" exact component={ToolDetail}/>
          <Route path='/add_tools' exact component={NewTools} />
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
