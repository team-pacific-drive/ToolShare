import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

class Tools extends React.Component {
  state = {
    tools: [],
    newTools: null,
  }

  componentDidMount = () => {
    fetch('/tools.json')
    .then((response) => response.json())
    .then((tools) => {
      this.setState({tools: tools})
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
    const {tools} = this.state
    return (
      <div>
        <h1>Tools</h1>
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Zip Code</th>
            </tr>
            {this.state.tools.map((tool, index) =>
            <tr key={index}>
              <td>{tool.title}</td>
              <td>{tool.price}</td>
              <td>{tool.zipcode}</td>
              <td><a id='deleteButton' type='submit' onClick={() => this.handleDelete(tool.id)} rel="nofollow" >Delete</a></td>
            </tr>
          )}
          </tbody>
        </table>

      </div>
    );
  }
}

export default Tools
