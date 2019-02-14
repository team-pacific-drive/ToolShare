import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

class ToolDetail extends React.Component {
  state = {
    tool: null,
  }

  componentDidMount = () => {
    fetch(`/tools/${this.props.match.params.id}.json`)
    .then((response) => response.json())
    .then((tool) => {
      this.setState({tool: tool})
    })
  }

  render(){
    const { tool } = this.state
    return (
      <div>
        {this.state.tool &&
          <div>
            <h1>{tool.title}</h1>
            <div class="detail-img"><p>{tool.photo}</p></div>
            <p class="detail-desc">{tool.description}</p>
            <p class="detail-text">{tool.model}</p>
            <p class="detail-text">{tool.serialnumber}</p>
            <p class="detail-text">${tool.price}/day</p>
            <p class="detail-text">Zip Code: {tool.zipcode}</p>
          </div>
        }
        <Link to="/my_tools">Back to My Listings</Link>
      </div>
    );
  }
}

export default ToolDetail
//  /*<p>{tool.photo}</p>*/
//  /*<p>{users.firstname}</p>*/
