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
    if(tool){
    let test = tool.user_cross_street
    let test2 = test.replace("&", "random")
     console.log(tool.user_cross_street);
     console.log('test', test);
     console.log('test2', test2);
   }
    return (
      <div>
        {this.state.tool &&
          <div className="outer-div">
            <div className="top-panel">
              <h1 id="title">{tool.title}</h1>
              <br></br>
              <p className="detail-text" id="model">(Make) {tool.model}</p>
              <br></br>
              <hr className="tooldetail-hr"></hr>
            </div>
            <br></br>
            <div className="panels">
              <div className="detail-img-container">
                <img src={`${tool.photo}`} className="detail-img"/>
              </div>
              <div className="side-panel">
                <p className="detail-text" id="description">{tool.description}</p>
                <div className="detail-inner-container">
                  <div className="left-container">
                    <div className="price-container">
                      <p className="detail-text" id="price"><b>${tool.price}</b></p><p className="detail-text" id="price-text"> per day</p>
                    </div>
                    <p className="detail-text">With $100 deposit</p>
                  </div>
                  <div className="right-container">
                    <p className="detail-text">Contact (Name)
                    <br></br>
                    <b>Phone:</b> (#)
                    <br></br>
                    <b>Email:</b> (#)
                    </p>
                    <p className="detail-text" id="zip">Location: <b>San Diego, CA</b> {tool.zipcode}</p>
                  </div>
                </div>
              </div>
            </div>
          <div className="map"></div>
        </div>
        }
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
