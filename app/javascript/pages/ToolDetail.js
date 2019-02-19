import React from "react"
import PropTypes from "prop-types"

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
            <div className="detail-img"><p>{tool.photo}</p></div>
            <p className="detail-desc">{tool.description}</p>
            <p className="detail-text">{tool.model}</p>
            <p className="detail-text">{tool.serialnumber}</p>
            <p className="detail-text">${tool.price}/day</p>
            <p className="detail-text">Zip Code: {tool.zipcode}</p>
          </div>
        }
        <a className="waves-effect waves-light btn" href='/'>Back to Listings
        </a>
      </div>
    );
  }
}

export default ToolDetail
