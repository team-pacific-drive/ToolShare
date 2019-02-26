import React from 'react'
import PropTypes from "prop-types"

import EditForm from '../components/EditForm'

class EditTool extends React.Component{
  state = {
    tools: [],
  }

  componentDidMount = () => {
    const { toolAttributes } = this.state
    fetch(`/tools.json`)
    .then((response) => response.json())
    .then((tools) => {
      // console.log(this.props);
      let filteredTools = tools.filter((tool) => tool.id == this.props.match.params.id)
      this.setState({tools: filteredTools[0]})
    })
  }

  render () {
    let { tools } = this.state
    const asteriskStyle = { color: "red" }
    return (
      <div className="newtools-container">
        <div className="form-container">
          <p className="newtools-title">Edit Tool</p>
          <p className="required-text"><span style={asteriskStyle}>*</span> = Required Field</p>
          <hr className="newtools-hr"></hr>
          <br></br>
          { tools.title &&
            <EditForm
            title={tools.title}
            description={tools.description}
            model={tools.model}
            price={tools.price}
            serialnumber={tools.serialnumber}
            photo={tools.photo}
            brand={tools.brand}
            deposit={tools.deposit}
            params={this.props.match.params.id}/>
          }
        </div>
      </div>
    );
  }
}

export default EditTool
