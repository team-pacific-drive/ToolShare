import React from "react"
import PropTypes from "prop-types"

import Cards from '../components/Cards'

class AllListings extends React.Component {
  state = {
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
    return (
      <div style={{width: '80%', marginLeft: '10%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>All Listings</h1>
      <div class="grid__listing">
        {this.state.tools.map((tool, index) =>
          <Cards key={index}
            title={tool.title}
          />
        )}
        </div>
      </div>
    );
  }
}

export default AllListings
