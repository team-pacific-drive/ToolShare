import React from "react"
import PropTypes from "prop-types"

import moment from 'moment-timezone'

const Cards = (props) => {
  let time = moment('2019-02-25T23:49:01.632Z').format('MMMM Do YYYY, h:mm:ss a')
  console.log(moment().startOf(time).fromNow());

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
              <p>{props.city}, {props.zipcode}</p>
              <p className="days-ago"><b>{moment(props.created).startOf('day').fromNow()}</b></p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Cards
