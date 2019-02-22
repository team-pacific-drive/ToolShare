import React from "react"
import PropTypes from "prop-types"

const Cards = (props) => {
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
          </div>
        </div>
      </a>
    </div>
  );
}

export default Cards
