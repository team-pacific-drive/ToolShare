import React from "react"
import PropTypes from "prop-types"
import { Link } from 'react-router-dom'

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

export default ToolDetail
