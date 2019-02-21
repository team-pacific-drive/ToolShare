import React from "react"
import PropTypes from "prop-types"

const Cards = (props) => {
  return (
    <div className="card-container">
      <a href={`/tool_details/${props.id}`}>
        <div>
          <div className="card-image">
            <img src={`${props.photo}`}/>
          </div>
          <div className="card-content">
            <span className="card-title"><b>{props.title}</b></span>
              <p className="card-model">{props.model}</p>
          </div>
          <div className="card-price-container">
            <p className="card-price">${props.price}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Cards
