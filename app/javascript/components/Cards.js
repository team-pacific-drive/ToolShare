import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const Cards = (props) => {

  return (
    <div className="card medium">
      <div className="card-image">
        <img src="https://materializecss.com/images/sample-1.jpg"/>
      </div>
      <div className="card-content">
      <span className="card-title custom__title"><Link to={`/my_tools/${props.id}`}>{props.title}</Link></span>
        <p>Model: {props.model}</p>
      </div>
      <div className="card-action">
        <p>
          <a className='left' href="#">Detailed Listing</a>
          <span className='right'>${props.price}/day</span>
        </p>
      </div>
    </div>
  );
}

export default Cards
