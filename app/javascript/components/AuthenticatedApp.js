import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Tools from './pages/Tools'
import NewTools from './pages/NewTools'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>AuthenticatedApp</h1>
          <Route path="/tool_list" exact render={(props) => <Tools/>} />
          <Route path='/add_tools' exact render={(props) => <NewTools />} />
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
