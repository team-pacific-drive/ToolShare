import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class MyTools extends React.Component {
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
        <h1>My Tools</h1>
        <table>
          <tbody>
            <tr>
              <th>Title</th>
              <th>Model</th>
              <th>Serial Number</th>
              <th>Price Per Day</th>
              <th>Price Per Hour</th>
              <th>Zip Code</th>
            </tr>
            {this.state.tools.map((tool, index) =>
            <tr key={index}>
              <td>{tool.title}</td>
              <td>{tool.model}</td>
              <td>{tool.serialnumber}</td>
              <td>{tool.price}</td>
              <td>Need to add</td>
              <td>{tool.zipcode}</td>
              <td>
                <a id='deleteButton' className="waves-effect waves-light btn-small" type='submit' onClick={() => this.handleDelete(tool.id)} rel="nofollow">
                    <i class="material-icons left">remove</i>
                Delete</a>
              </td>
            </tr>
          )}
          </tbody>
        </table>
        <a className="waves-effect waves-light btn add" href='/add_tools'><i class="material-icons left">add</i>Add Tools</a>
      </div>
    );
  }
}

export default MyTools
