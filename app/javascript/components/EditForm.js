import React from "react"
import PropTypes from "prop-types"

class EditForm extends  React.Component{
  constructor(props){
    super(props)
  this.state = {
    tools: [],
    toolAttributes: {
      title: '',
      description: '',
      model: '',
      price: '',
      serialnumber: '',
      photo: '',
      make: '',
      deposit: '',
    },
  }
}

  componentDidMount = () => {
    const { toolAttributes } = this.state
    fetch(`/tools.json`)
    .then((response) => response.json())
    .then((tools) => {
      // console.log(this.props);
      let filteredTools = tools.filter((tool) => tool.id == this.props.params)
      this.setState({tools: filteredTools})
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
    const { toolAttributes } = this.state
    toolAttributes[event.target.name] = event.target.value
    this.setState({tools: toolAttributes})
  }

  render(){
    const { toolAttributes } = this.state
    console.log('prop', this.props.title);
    console.log('ToolAtt', toolAttributes);
    return(
      <div className="form">
      { this.props.title ?
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title<p className="required-asterisk">*</p></label>
        <br></br>
        <input
        className="input"
        type="text"
        name="title"
        placeholder={this.props.title}
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
        placeholder={this.props.description}
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
        placeholder={this.props.brand}
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
        placeholder={this.props.model}
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
        placeholder={this.props.serialnumber}
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
        placeholder={this.props.price}
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
        placeholder={this.props.deposit}
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
        placeholder={this.props.photo}
        value={toolAttributes.photo}
        onChange={this.handleChange}
        />
        <br></br>
        <button type="submit" className="create-button">Edit</button>
        </form>
        : null
      }
      </div>
    )
  }
}

export default EditForm
