import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

class Tools extends React.Component {
  state = {
    tools: []
  }

  componentDidMount(){
    fetch('/tools.json')
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      this.setState({tools: json})
    })
    .catch((e)=>{
      console.log("Error", e)
    })
  }

  render () {
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
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Tools
