import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import NavBar from './NavBar'
import GoogleMaps from './GoogleMaps'

import AllListings from '../pages/AllListings'
import MyTools from '../pages/MyTools'
import NewTools from '../pages/NewTools'
import ToolDetail from '../pages/ToolDetail'
import NotFound from '../pages/NotFound'

class AuthenticatedApp extends React.Component {
  state = {
    tools: [],
    currentUser: this.props.current_user,
  }

  componentDidMount = () => {
    fetch('/tools.json')
    .then((response) => response.json())
    .then((tools) => {
      this.setState({tools: tools})
    })
  }

  nameInitial = () => {
    let lastname = this.state.currentUser.lastname.split('', 1)
    return lastname
  }

  render () {
    const { currentUser, tools } = this.state
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
            <Route path="/account/my_tools" exact render={(props) => < MyTools currentUserId={currentUser.id}/>}/>
            <Route path='/account/add_tools' exact component={NewTools} />
            <Route path="/tool_details/:id" exact component={ToolDetail}/>
            <Route path="/" component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
// <GoogleMaps/>

export default AuthenticatedApp
