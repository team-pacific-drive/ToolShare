import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"

import NavBar from "./NavBar"
import AllListings from "../pages/AllListings"


class UnauthenticatedApp extends React.Component {
  state = {
    currentUser: this.props.current_user,
  }

  render () {
    const { currentUser } = this.state
    return (
      <Router>
        <div>
          <NavBar
            firstname={currentUser.firstname}
            lastname={currentUser.lastname}
          />
          <h1>Guest page</h1>
          <Route path='/' exact component={AllListings}/>
        </div>
      </Router>
    );
  }
}

export default UnauthenticatedApp
