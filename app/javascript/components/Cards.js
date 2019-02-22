import React from "react"
import PropTypes from "prop-types"

const Cards = (props) => {
  return (
    <div>
      <a href={`/tool_details/${props.id}`}>
        <div className="card-container">
          <div className="card-image">
            <img src={`${props.photo}`}/>
          </div>
          <div className="card-content">
            <div className="card-title-container">
              <p className="card-title"><b>{props.title}</b></p>
            </div>
            <div className="card-price-container">
              <p className="card-price">${props.price}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Cards
