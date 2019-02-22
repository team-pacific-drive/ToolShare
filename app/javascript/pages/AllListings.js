import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

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
      <div className="listings__container">
        <div className="mytools-wrap">
          <div className="mytools-header">
            <p className="alllistings-title">All Listings</p>
            <p className="all-add-text"><a href='/account/add_tools'>Add a Tool</a></p>
          </div>
        </div>
        <hr className="mytools-hr"></hr>
        <div className="grid__listing">
          {this.state.tools.map((tool, index) =>
            <Cards key={index}
              photo={tool.photo}
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
