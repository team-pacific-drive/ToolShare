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
    return (
      <div>
        {this.state.tool &&
          <h1>{this.state.tool.title}</h1>
        }
      </div>
    );
  }
}

export default ToolDetail
