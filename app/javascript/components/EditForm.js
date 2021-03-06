import React from "react"
import PropTypes from "prop-types"

import { Redirect } from 'react-router-dom'

class EditForm extends  React.Component{
  state = {
    responseOk: false,
    tools: [],
    toolAttributes: {
      title: '',
      description: '',
      model: '',
      price: '',
      serialnumber: '',
      photo: '',
      brand: '',
      deposit: '',
    },
  }

  componentDidMount = () => {
    const { toolAttributes } = this.state
    fetch(`/tools.json`)
    .then((response) => response.json())
    .then((tools) => {
      let filteredTools = tools.filter((tool) => tool.id == this.props.params)
      this.setState(
        {tools: filteredTools,
        toolAttributes: {
          title: this.props.title,
          description: this.props.description,
          brand: this.props.brand,
          price: this.props.price,
          serialnumber: this.props.serialnumber,
          photo: this.props.photo,
          brand: this.props.brand,
          deposit: this.props.deposit,
          model: this.props.model,
        },
      })
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`/tools/${this.props.params}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({tool: this.state.toolAttributes})
    }).then((response) => {
      return response.json()
      .then((response) => {
        this.setState({responseOk: true})
      })
    })
  }

  handleChange = (event) => {
    let { toolAttributes } = this.state
    toolAttributes[event.target.name] = event.target.value
    this.setState({toolAttributes: toolAttributes})
  }

  render(){
    let { toolAttributes, responseOk } = this.state
    return(
      <div className="form">
        {responseOk &&
        <Redirect to="/account/my_tools" />
        }
        { toolAttributes.title &&
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
              <label htmlFor="make">Make<p className="required-asterisk">*</p></label>
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
          <button type="submit" className="create-button">Edit</button>
        </form>
      }
      </div>
    )
  }
}

export default EditForm
