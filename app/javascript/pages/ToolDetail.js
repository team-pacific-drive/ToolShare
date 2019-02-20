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
          <div>
            <div className="outer-div">
              <div className="detail-img">
                <img src={`${tool.photo}`} className="materialboxed" width='450'/>
              </div>
              <div className="detail-container">
                <div className="top-panel">
                  <h1 id="title">{tool.title}</h1>
                  <p className="detail-text" id="model">{tool.model}</p>
                  <hr className="hr"></hr>
                  <p className="detail-text" id="description">{tool.description}</p>
                </div>
                <div id="bottom-panel">
                  <div className="detail-inner-container">
                    <p className="detail-text" id="price-text">$</p><p className="detail-text" id="price"><b>{tool.price}</b></p><p className="detail-text" id="price-text">/day</p>
                    <p className="detail-text">With $100 deposit</p>
                    <p className="detail-text" id="zip"><b>San Diego, CA</b> {tool.zipcode}</p>
                    <button className="contact-button">Contact Info</button>
                  </div>
                  <div className="map"></div>
                </div>
              </div>
            </div>
          </div>
        }
        <Link to="/my_tools">Back to My Listings</Link>
      </div>
    );
  }
}

export default ToolDetail
