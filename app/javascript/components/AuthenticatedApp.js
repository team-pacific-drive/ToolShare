import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import MyTools from './pages/MyTools'
import NewTools from './pages/NewTools'

class AuthenticatedApp extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>AuthenticatedApp</h1>
          <Route path="/tool_list" exact render={(props) => <MyTools/>} />
          <Route path='/add_tools' exact render={(props) => <NewTools />} />
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
