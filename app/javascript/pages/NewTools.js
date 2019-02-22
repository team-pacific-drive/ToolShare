import React from "react"
import PropTypes from "prop-types"

import { Redirect } from 'react-router-dom'

import Errors from '../components/Errors'

class NewTools extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: null,
      errors: null,
      responseOk: false,
      toolAttributes: {
        title: '',
        description: '',
        model: '',
        price: '',
        serialnumber: '',
        photo: '',
        user_id: '',
        brand: '',
        deposit: '',
      },
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("Tool successfully submitted");
    fetch('/tools.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({tool: this.state.toolAttributes})
    }).then((response) => {
      return response.json().then((json) => {
        if(response.status === 201) {
          this.setState({responseOk: true})
          // console.log(response)
        } else {
          this.setState({responseOk: false, errors: json})
        }
        return json
      })
    }).catch((errors) => {
      this.setState({responseOk: false, errors: {"System Error": ["Unknown problem has occurred"]}})
    })
  }

  handleChange = (event) => {
    const { toolAttributes } = this.state
    toolAttributes[event.target.name] = event.target.value
    this.setState({toolAttributes: toolAttributes})
  }


// Used delegate in model instead
// handleChange = (event) => {
//   const { toolAttributes } = this.state
//   toolAttributes[event.target.name] = event.target.value
//   let addUserNames = { user_firstname: this.props.firstname, user_lastname: this.props.lastname }
//   let newToolAttributes = {...toolAttributes, ...addUserNames}
//   this.setState({toolAttributes: newToolAttributes})
// }

  render () {
    const { responseOk, toolAttributes, errors } = this.state
    const asteriskStyle = {color: "red"}
    return (
      <div className="newtools-container">
        <div className="form-container">
          {responseOk &&
          <Redirect to="/account/my_tools" />
          }
          <Errors errors={errors}/>
          <p className="newtools-title">Add a Tool</p>
          <p className="required-text"><span style={asteriskStyle}>*</span> = Required Field</p>
          <hr className="newtools-hr"></hr>
          <br></br>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="title">Title<p className="required-asterisk">*</p></label>
              <br></br>
              <input
                className="input"
                type="text"
                name="title"
                value={toolAttributes.title}
                onChange={this.handleChange}
              />
              <br></br>
              <label htmlFor="description">Description<p className="required-asterisk">*</p></label>
              <br></br>
              <input
                className="input-description"
                type="text" rows="3"
                name="description"
                value={toolAttributes.description}
                onChange={this.handleChange}
              />
              <br></br>
              <div className="make-model">
                <div className="make">
                  <label htmlFor="brand">Make<p className="required-asterisk">*</p></label>
                  <br></br>
                  <input
                    className="input-small"
                    type="text"
                    name="brand"
                    value={toolAttributes.brand}
                    onChange={this.handleChange}
                  />
                </div>
                <br></br>
                <div className="model">
                  <label htmlFor="model">Model<p className="required-asterisk">*</p></label>
                  <br></br>
                  <input
                    className="input-small"
                    type="text"
                    name="model"
                    value={toolAttributes.model}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <br></br>
              <div className="serial-price-deposit">
                <div className="serialnumber">
                  <label htmlFor="serialnumber">Serial #</label>
                  <br></br>
                  <input
                    className="input-small"
                    type="text"
                    name="serialnumber"
                    value={toolAttributes.serialnumber}
                    onChange={this.handleChange}
                  />
                  <br></br>
                </div>
                <div className="price-form">
                  <label htmlFor="price">Price (Per Day)<p className="required-asterisk">*</p></label>
                  <br></br>
                  <input
                    className="input-extra-small"
                    type="number"
                    name="price"
                    value={toolAttributes.price}
                    onChange={this.handleChange}
                  />
                </div>
                <br></br>
                <div className="deposit">
                  <label htmlFor="deposit">Deposit<p className="required-asterisk">*</p></label>
                  <br></br>
                  <input
                    className="input-extra-small"
                    type="number"
                    name="deposit"
                    value={toolAttributes.deposit}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <br></br>
              <label htmlFor="photo">Photo URL</label>
              <br></br>
              <input
                className="input"
                type="url"
                name="photo"
                value={toolAttributes.photo}
                onChange={this.handleChange}
              />
              <br></br>
              <button type="submit" className="create-button">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewTools
