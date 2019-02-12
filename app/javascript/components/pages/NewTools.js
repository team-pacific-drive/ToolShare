import React from "react"
import PropTypes from "prop-types"

import {Redirect} from 'react-router-dom'

class NewTools extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      responseOk: false,
      toolAttributes: {
        title: '',
        description: '',
        model: '',
        price: '',
        serialnumber: '',
        photo: '',
        zipcode: '',
        user_id: '',
      }
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
    })
    .then((repsonse) => {
      this.setState({responseOk: true})
    })
  }

handleChange = (event) => {
  const { toolAttributes } = this.state
  toolAttributes[event.target.name] = event.target.value
  this.setState({toolAttributes: toolAttributes})
}

  render () {
    const { responseOk, toolAttributes } = this.state
    return (
      <div>
        {responseOk &&
        <Redirect to="/tool_list" />
        }
        <h1>List a tool</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            value={toolAttributes.title}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            value={toolAttributes.description}
            onChange={this.handleChange}
          />
          <label htmlFor="model">Model</label>
          <input
            type="text"
            name="model"
            value={toolAttributes.model}
            onChange={this.handleChange}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            value={toolAttributes.price}
            onChange={this.handleChange}
          />
          <label htmlFor="serialnumber">Serial #</label>
          <input
            type="text"
            name="serialnumber"
            value={toolAttributes.serialnumber}
            onChange={this.handleChange}
          />
          <label htmlFor="photo">Photo</label>
          <input
            type="text"
            name="photo"
            value={toolAttributes.photo}
            onChange={this.handleChange}
          /><label htmlFor="zipcode">Zip Code</label>
          <input
            type="number"
            name="zipcode"
            value={toolAttributes.zipcode}
            onChange={this.handleChange}
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default NewTools
