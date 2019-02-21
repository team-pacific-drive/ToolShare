import React from "react"
import PropTypes from "prop-types"

class MyTools extends React.Component {
  state = {
    tools: [],
  }

  componentDidMount = () => {
    fetch(`/tools.json`)
    .then((response) => response.json())
    .then((tools) => {
      let filteredTools = tools.filter((tool) => tool.user_id === this.props.currentUserId)
      this.setState({tools: filteredTools})
    })
  }

  handleDelete = (id) => {
    fetch(`/tools/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      this.deleteTool(id)
    })
  }

  deleteTool = (id) => {
    let filteredTools = this.state.tools.filter((tool) => tool.id !== id)
    this.setState({ tools: filteredTools })
  }

  render(){
    return (
      <div className="mytools-container">
        <p className="mytools-title">My Tools</p>
        <a href='/account/add_tools' className="add-text">Add a Tool</a>
        <hr></hr>
        <table align="center" className="mytools-table">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Make/Model</th>
              <th>Serial #</th>
              <th>Price</th>
              <th></th>
            </tr>
            {this.state.tools.map((tool, index) =>
            <tr key={index}>
              <td width="100"><img src={`${tool.photo}`} height="84" width="84"/></td>
              <td width="300">{tool.title}</td>
              <td width="220">{tool.model}</td>
              <td width="220">{tool.serialnumber}</td>
              <td width="70" className="price">${tool.price}</td>
              <td width="100">
              <a className="edit" type='submit' onClick={() => this.handleEdit(tool.id)} rel="nofollow">Edit</a>
              </td>
              <td width="100">
                <a className="delete" type='submit' onClick={() => this.handleDelete(tool.id)} rel="nofollow">Remove</a>
              </td>
            </tr>
          )}
        </table>
      </div>
    );
  }
}

export default MyTools
