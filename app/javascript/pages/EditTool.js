import React from 'react'
import PropTypes from "prop-types"
import { Redirect } from 'react-router-dom'

import Cards from '../components/Cards'

class EditTool extends React.Component{
  state = {
      tools: [],
      message: null,
      errors: null,
      responseOk: false,
      toolAttributes: {
        title: '' ,
        description: '',
        model: '',
        price: '',
        serialnumber: '',
        photo: '',
        zipcode: '',
      },
    }


  componentDidMount = () => {
    const { toolAttributes } = this.state
    fetch(`/tools.json`)
    .then((response) => response.json())
    .then((tools) => {
      // console.log(this.props);
      let filteredTools = tools.filter((tool) => tool.id == this.props.match.params.id)
      this.setState({tools: filteredTools})
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(`/tools/${this.props.match.params.id}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({tool: this.state.toolAttributes})
    }).then((response) => {
      return response.json()
    })
  }

  handleChange = (event) => {
    const { toolAttributes } = this.state
    toolAttributes[event.target.name] = event.target.value
    this.setState({tools: toolAttributes})
  }


  render () {
    console.log("toolA", this.state.toolAttributes);
    console.log("Current tools ", this.state.tools)

    const { tools, toolAttributes } = this.state
    return (
      <div>
      <h1>Edit</h1>
        <h1>List a tool</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name='title'
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
            <label htmlFor="serialnumber">Serial Number</label>
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
          </div>
        <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default EditTool
