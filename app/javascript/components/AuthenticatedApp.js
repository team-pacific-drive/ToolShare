import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import GoogleMaps from './GoogleMaps'

import AllListings from '../pages/AllListings'
import MyTools from '../pages/MyTools'
import NewTools from '../pages/NewTools'
import EditTool from '../pages/EditTool'
import ToolDetail from '../pages/ToolDetail'
import NotFound from '../pages/NotFound'
import AboutPage from '../pages/AboutPage'

class AuthenticatedApp extends React.Component {
  state = {
    currentUser: this.props.current_user,
    tools: []
  }

  componentDidMount = () => {
    fetch('/tools.json')
    .then((response) => response.json())
    .then((tools) => {
      this.setState({tools: tools})
    })
  }

  render () {
    console.log(this.props);
    const { currentUser } = this.state
    // console.log(currentUser);
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={AllListings}/>
            <Route path="/tool_details/:id" exact render={(props) => < ToolDetail currentUser={currentUser} {...props}/>} />
            <Route path='/about' exact component={AboutPage} />
            <Route path='/account/maps' exact component={GoogleMaps}/>
            <Route path="/account/my_tools" exact render={(props) =>
              < MyTools currentUserId={currentUser.id}/>}
            />
            <Route path='/account/add_tools' exact render={(props) =>
              < NewTools />}
            />
            <Route path='/account/edit_tool/:id' exact component={EditTool}/>
            <Route path='/' component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
// <GoogleMaps/>

export default AuthenticatedApp
