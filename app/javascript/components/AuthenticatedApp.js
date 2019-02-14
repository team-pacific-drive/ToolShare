import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import NavBar from './pages/NavBar'
import MyTools from './pages/MyTools'
import NewTools from './pages/NewTools'
import ToolDetail from './pages/ToolDetail'

class AuthenticatedApp extends React.Component {
  state = {
    tools: [],
    newTools: null,
  }

  componentDidMount = () => {
    fetch('/tools.json')
    .then((response) => response.json())
    .then((tools) => {
      this.setState({tools: tools})
      console.log(tools);
    })
  }

  handleDelete = (id) => {
    fetch(`/tools/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      this.deleteTool(id)
      console.log(this.state.newTools);
    })
  }

  deleteTool = (id) => {
    let { newTools } = this.state
    let filteredTools = this.state.tools.filter((tool) => tool.id !== id)
    this.setState({ tools: filteredTools })
  }



  render () {
    console.log(this.state);
    return (
      <Router>
        <div>
          <NavBar/>
          <h1>Member Page</h1>
          <Route path="/my_tools" exact render={(props) =>
            <MyTools
              tools={this.state.tools}
              handleDelete={this.handleDelete}
            />}
          />
          <Route path="/my_tools/:id" exact component={ToolDetail}/>
          <Route path='/add_tools' exact render={(props) => <NewTools/>} />
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp
