import React from "react"
import PropTypes from "prop-types"

const Cards = (props) => {
  return (
    <div className="card medium hoverable">
      <a href={`/tool_details/${props.id}`}>
        <div className="card-image">
          <img src="https://materializecss.com/images/sample-1.jpg"/>
        </div>
        <div className="card-content">
        <span className="card-title custom__title">{props.title}</span>
          <p className="text">{props.model}</p>
        </div>
        <div className="card-action">
          <a className='left'>Details</a>
          <span className='right'>${props.price}/day</span>
        </div>
      </a>
    </div>
  );
}

// /*<a href={`/tool_details/${props.id}`}>*/
// /*</a>*/
export default Cards
