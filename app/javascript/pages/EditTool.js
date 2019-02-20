import React from 'react'
import PropTypes from "prop-types"
import { Redirect } from 'react-router-dom'

import Errors from '../components/Errors'

class EditTool extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      tools: [],
      message: null,
      errors: null,
      responseOk: false,
      toolAttributes: {
        title: this.state.toolAttributes.title,
        description: '' ,
        model: '' ,
        price: '',
        serialnumber:'' ,
        photo: '',
        zipcode: '',
        user_id: '',
      },
    }
  }

  componentDidMount = () => {
    fetch(`/tools.json`)
    .then((response) => response.json())
    .then((tools) => {
      let filteredTools = tools.filter((tool) => tool.user_id === this.props.currentUserId)
      this.setState({tools: filteredTools})
    })
  }

  handleSubmit = (event, id) => {
    event.preventDefault()
    const { toolAttributes } = this.state
    // console.log(this.props.id);
    fetch(`/tools/${id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({tool: this.state.toolAttributes})
    }).then((response) => {
      return response.json().then((json) => {
        if(response.status === 404) {
          this.setState({responseOk: true})
          // console.log(response)
        } else {
          this.setState({responseOk: false, errors: json})
        }
        return json
      })
    }).catch((errors) => {
      this.setState({responseOk: false,  errors: {"System Error": ["Unknown problem has occurred"]}})
    })
  }

  handleChange = (event) => {
    const { toolAttributes } = this.state
    toolAttributes[event.target.name] = event.target.value
    this.setState({toolAttributes: toolAttributes})
  }

  render () {
    const { responseOk, toolAttributes, errors } = this.props
    return (
      <div>
        {responseOk &&
        <Redirect to="/account/my_tools" />
        }
        <Errors errors={errors}/>
        <h1>Edit a tool</h1>
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
          <button type="submit">Submit</button>
        </form>
        <a href='/'>Listings</a>
      </div>
    );
  }
}

export default EditTool
