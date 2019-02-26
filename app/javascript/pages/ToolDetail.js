import React from "react"
import PropTypes from "prop-types"


import { Link } from 'react-router-dom'

import GoogleMaps from '../components/GoogleMaps'

class ToolDetail extends React.Component {
  state = {
    tool: null,
    user: null
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
    // console.log(this.props.currentUser.phone_number);
    return (
      <div>
        {this.state.tool &&
          <div className="outer-div">
            <div className="top-panel">
              <p id="title">{tool.title}</p>
              <p className="detail-text" id="model">{tool.brand} {tool.model}</p>

              <hr className="tooldetail-hr"></hr>
            </div>
            <br></br>
            <div className="panels">
              <div className="detail-img-container">
                <img src={`${tool.photo}`} className="detail-img"/>
              </div>
              <div className="side-panel">
              <br></br>
                <p className="detail-text" id="description">{tool.description}</p>
                <div className="detail-inner-container">
                  <div className="left-container">
                    <div className="price-container">
                      <p className="detail-text" id="price"><b>${tool.price}</b></p><p className="detail-text" id="price-text"> per day</p>
                    </div>
                    <p className="detail-text" id="deposit">(With ${tool.deposit} deposit)</p>
                  </div>
                  <div className="right-container">
                    <div className="contact-container">
                      <p className="detail-text" id="contact-info">Contact Info</p>
                    </div>
                    <div className="contact-details">
                      <p className="detail-text"><img src={require('../../assets/images/phone-icon.svg')} className="contact-icons"/>  {tool.user_phone_number}
                      <br></br>
                      <img src={require("../../assets/images/email-icon.svg")} className="contact-icons"/>  {tool.user_email}
                      <br></br>
                      <img src={require('../../assets/images/location-icon.svg')} className="contact-icons"/>  San Diego, CA {tool.user_zip_code}</p>
                    </div>
                    <a href="/conversations"><button className="user-message-button">Direct Message</button></a>
                  </div>
                </div>
              </div>
            </div>
          <div className="map">
          {tool.user_city &&
            <GoogleMaps
            crossStreet={tool.user_cross_street}
            city={tool.user_city}
            state={tool.user_state}
            toolTitle={tool.title}
            toolUser={tool.user_firstname}
            />
          }
          </div>
        </div>
        }
      </div>
    );
  }
}

export default ToolDetail
