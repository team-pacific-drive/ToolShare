import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import Cards from '../components/Cards'

import defaultPr from '../../assets/images/default-product.jpg'

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
    // console.log(this.state.tools);
    return (
      <div className="listings__container">
        <div className="mytools-wrap">
          <div className="mytools-header">
            <p className="alllistings-title">All Listings</p>
            <p className="all-add-text"><a href='/account/add_tools'>Add a Tool</a></p>
          </div>
        </div>
        <hr className="grid-hr"></hr>
        <div className="grid__listing">
          {this.state.tools.map((tool, index) =>
            <Cards key={index}
              photo={tool.photo}
              title={tool.title}
              price={tool.price}
              zipcode={tool.user_zip_code}
              model={tool.model}
              id={tool.id}
              created={tool.created_at}
              city={tool.user_city}
            />
          )}
          <div className="card-container">
            <div className="image-container">
              <img className="listing-img" src={defaultPr}/>
              <span className="card-price">$XX</span>
            </div>
            <br></br>
            <div className="card-title-container">
              <p className="card-title"><b>Your Tool</b></p>
              <div className="card-bottom">
                <p>Any Town, 12345</p>
                <p className="days-ago"><b>create your tool today!</b></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AllListings
