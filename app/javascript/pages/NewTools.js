import React from "react"
import PropTypes from "prop-types"

import {Redirect} from 'react-router-dom'

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
        zipcode: '',
        user_id: '',
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

  render () {
    const { responseOk, toolAttributes, errors } = this.state
    return (
      <div className="newtools-container">
        <div className="newtools-form">
          {responseOk &&
          <Redirect to="/account/my_tools" />
          }
          <Errors errors={errors}/>
          <p className="newtools-title">Add a Tool</p>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={toolAttributes.title}
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={toolAttributes.description}
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="model">Make/Model</label>
            <input
              type="text"
              name="model"
              value={toolAttributes.model}
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="price">Price (Per Day)</label>
            <input
              type="number"
              name="price"
              value={toolAttributes.price}
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="serialnumber">Serial #</label>
            <input
              type="text"
              name="serialnumber"
              value={toolAttributes.serialnumber}
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="photo">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={toolAttributes.photo}
              onChange={this.handleChange}
            />
            <br></br>
            <label htmlFor="zipcode">Zip Code</label>
            <input
              type="number"
              name="zipcode"
              value={toolAttributes.zipcode}
              onChange={this.handleChange}
            />
            <br></br>
            <button type="submit" className="create-button">Create</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewTools
