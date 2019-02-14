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
      <div className='listings__container'>
        <h1>All Listings</h1>
      <div class="grid__listing">
        {this.state.tools.map((tool, index) =>
          <Cards key={index}
            title={tool.title}
            price={tool.price}
            zipcode={tool.zipcode}
            model={tool.model}
            id={tool.id}
          />
        )}
        </div>
      </div>
    );
  }
}

export default AllListings
