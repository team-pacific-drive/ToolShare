import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import NavBar from './NavBar'
import GoogleMaps from './GoogleMaps'

import MyTools from '../pages/MyTools'
import NewTools from '../pages/NewTools'

class AuthenticatedApp extends React.Component {
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
          <h1>Member Page</h1>
          <Switch>
            <Route path='/maps' exact component={GoogleMaps}/>
            <Route path="/account/my_tools" exact render={(props) =>
              < MyTools currentUserId={currentUser.id}/>}
            />
            <Route path='/account/add_tools' exact render={(props) =>
              < NewTools />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
// <GoogleMaps/>

export default AuthenticatedApp
