import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"

import NavBar from "./NavBar"
import AllListings from "../pages/AllListings"
import ToolDetail from '../pages/ToolDetail'
import NotFound from '../pages/NotFound'

class UnauthenticatedApp extends React.Component {
  state = {
    currentUser: this.props.current_user,
  }

  nameInitial = () => {
    let lastname = this.state.currentUser.lastname.split('', 1)
    return lastname
  }

  render () {
    const { currentUser } = this.state
    return (
      <Router>
        <div>
          <NavBar
            firstname={currentUser.firstname}
            lastNameInitial={this.nameInitial()}
          />
          <Switch>
            <Route path='/' exact component={AllListings}/>
            <Route path="/tool_details/:id" exact component={ToolDetail}/>
            <Route path='/' component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default UnauthenticatedApp
