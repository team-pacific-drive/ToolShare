import React from "react"
import PropTypes from "prop-types"

const Cards = (props) => {
  return (
    <div className="card medium hoverable">
        <div className="card-image">
          <img src="https://materializecss.com/images/sample-1.jpg"/>
        </div>
        <div className="card-content">
        <span className="card-title custom__title">{props.title}</span>
          <p className="text">{props.model}</p>
        </div>
        <div className="card-action">
          <p>
            <a className='left' href={`/tool_details/${props.id}`}>Details</a>
            <span className='right'>${props.price}/day</span>
          </p>
        </div>
    </div>
  );
}

// /*<a href={`/tool_details/${props.id}`}>*/
// /*</a>*/
export default Cards
