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
      <div>
        <div className="mytools-wrap">
          <div className="mytools-header">
            <h1 className="mytools-title">Listings</h1>
            <p className="add-text"><a href='/account/add_tools'>Add a Tool</a></p>
          </div>
        </div>
        <hr className="grid-hr"></hr>
        <div className="cards-grid">
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
