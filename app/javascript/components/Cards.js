import React from "react"
import PropTypes from "prop-types"

import moment from 'moment-timezone'

const Cards = (props) => {
  let time = moment(props.created).format('h:mm:ss a')
  let newTime =  moment(time, 'h:mm:ss a').fromNow()
  return (
    <div>
      <a href={`/tool_details/${props.id}`}>
        <div className="card-container">
          <div className="image-container">
            <img className="listing-img" src={`${props.photo}`}/>
            <span className="card-price">${props.price}</span>
          </div>
          <br></br>
          <div className="card-title-container">
            <p className="card-title"><b>{props.title}</b></p>
            <div className="card-bottom">
              <p><b>{props.city}, CA {props.zipcode}</b></p>
              <p className="days-ago">Posted {newTime}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Cards
