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
    return (
      <div className='row'>
        {responseOk &&
        <Redirect to="/account/my_tools" />
        }
        <Errors errors={errors}/>
        <h1>List a tool</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s6">
            <input
              className="validate"
              type="text"
              id="title"
              name='title'
              value={toolAttributes.title}
              onChange={this.handleChange}
            />
            <label for="title">Title</label>
          </div>
          <div className="input-field col s6">
            <textarea
              id='textarea2'
              className='materialize-textarea'
              data-length="144"
              type="text"
              name='description'
              value={toolAttributes.description}
              onChange={this.handleChange}
            ></textarea>
            <label for="textarea2">Description</label>
          </div>
          <div className="input-field col s6">
            <input
              className="validate"
              type="text"
              id="model"
              name='model'
              value={toolAttributes.model}
              onChange={this.handleChange}
            />
            <label for="model">Model</label>
          </div>
          <div className="input-field col s6">
            <input
              className="validate"
              type="number"
              id="price"
              name='price'
              value={toolAttributes.price}
              onChange={this.handleChange}
            />
            <label for="price">Price</label>
          </div>
          <div className="input-field col s6">
            <input
              className="validate"
              type="text"
              id="serialnumber"
              name='serialnumber'
              value={toolAttributes.serialnumber}
              onChange={this.handleChange}
            />
            <label for="serialnumber">Serial Number</label>
          </div>
          <div className="file-field input-field col s6">
            <div className='btn'>
              <span>Pic</span>
              <input type='file'/>
            </div>
            <div className='file-path-wrapper'>
              <input
                className="validate"
                type="text"
                name='photo'
                placeholder='/User/Me/myTool.jpg'
                value={toolAttributes.photo}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="input-field col s6">
            <input
              className="validate"
              type="number"
              id="zipcode"
              name='zipcode'
              value={toolAttributes.zipcode}
              onChange={this.handleChange}
            />
            <label for="zipcode">Zip Code</label>
          </div>
          <button type="submit">Create</button>
        </form>
        <a href='/'>Listings</a>
      </div>
    );
  }
}

export default NewTools
