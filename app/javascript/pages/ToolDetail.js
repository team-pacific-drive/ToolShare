import React from "react"
import PropTypes from "prop-types"

import { Link } from 'react-router-dom'

import GoogleMaps from '../components/GoogleMaps'

class ToolDetail extends React.Component {
  state = {
    tool: null,
  }

  componentDidMount = () => {
    fetch(`/tools/${this.props.match.params.id}.json`)
    .then((response) => response.json())
    .then((tool) => {
      this.setState({tool: tool})
    })
  }

  render(){
    const { tool } = this.state
    return (
      <div>
        {this.state.tool &&
          <div>
            <div className="outer-div">
              <div className="detail-img">
                <img src={`${tool.photo}`} className="materialboxed" width='450'/>
              </div>
              <div className="detail-container">
                <div className="top-panel">
                  <h1 id="title">{tool.title}</h1>
                  <p className="detail-text" id="model">{tool.model}</p>
                  <hr className="tooldetail-hr"></hr>
                  <p className="detail-text" id="description">{tool.description}</p>
                </div>
                <div id="bottom-panel">
                  <div className="detail-inner-container">
                    <p className="detail-text" id="price-text">$</p><p className="detail-text" id="price"><b>{tool.price}</b></p><p className="detail-text" id="price-text">/day</p>
                    <p className="detail-text">With $100 deposit</p>
                    <p className="detail-text" id="zip"><b>San Diego, CA</b> {tool.zipcode}</p>
                    <button className="contact-button">Contact Info</button>
                  </div>
                  <div className="map">
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        <a href="/account/my_tools">Back to My Listings</a>
      </div>
    );
  }
}
// {tool.user_city &&
  //   <GoogleMaps
  //   crossStreet={tool.user_cross_street}
  //   city={tool.user_city}
  //   state={tool.user_state}
  //   toolTitle={tool.title}
  //   toolUser={tool.user_firstname}
  //   />
  // }

export default ToolDetail
