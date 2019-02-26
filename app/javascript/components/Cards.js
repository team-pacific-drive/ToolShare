import React from "react"
import PropTypes from "prop-types"

import moment from 'moment-timezone'

const Cards = (props) => {
<<<<<<< HEAD
  let time = moment('2019-02-25T23:49:01.632Z').format('MMMM Do YYYY, h:mm:ss a')
  console.log(moment().startOf(time).fromNow());

=======
  let time = moment(props.created).format('h:mm:ss a')
  let newTime =  moment(time, 'h:mm:ss a').fromNow()
>>>>>>> 6a8188fd02640e3861378d9f8f5e99a125ef549a
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
              <p className="days-ago"><b>{newTime}</b></p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Cards
