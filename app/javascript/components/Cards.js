import React from "react"
import PropTypes from "prop-types"

const Cards = (props) => {
  return (
    <div class="card medium">
      <div class="card-image">
        <img src="https://materializecss.com/images/sample-1.jpg"/>
        <span class="card-title">{props.title}</span>
      </div>
      <div class="card-content">
        <p>If need basic description</p>
      </div>
      <div class="card-action">
        <a href="#">Link to Detailed</a>
      </div>
    </div>
  );
}

export default Cards
