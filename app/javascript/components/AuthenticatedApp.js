import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>AuthenticatedApp</h1>
          <Route path="/tools" exact render={(props) => <Tools/>} />
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
