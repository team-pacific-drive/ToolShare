import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"

import AllListings from "../pages/AllListings"
import ToolDetail from '../pages/ToolDetail'
import NotFound from '../pages/NotFound'
import AboutPage from '../pages/AboutPage'

class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={AllListings}/>
            <Route path="/tool_details/:id" exact component={ToolDetail}/>
            <Route path='/about' exact component={AboutPage} />
            <Route path='/' component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default UnauthenticatedApp
