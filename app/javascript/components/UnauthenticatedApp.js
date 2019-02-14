import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

import NavBar from "./NavBar"
import AllListings from "../pages/AllListings"


class UnauthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <NavBar/>
          <h1>Guest page</h1>
          <Route path='/' component={AllListings}/>
        </div>
      </Router>
    );
  }
}

export default UnauthenticatedApp
