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
        <h1 className="mytools-title">My Tools</h1>
        <div className="my-list">
          <table className="my-list-div" style={{width:'80vw'}}>
              <tr>
                <th></th>
                <th>Item</th>
                <th>Model</th>
                <th>Serial Number</th>
                <th>Price</th>
                <th>Zip Code</th>
              </tr>
              {this.state.tools.map((tool, index) =>
              <tr key={index}>
                <td><img src={`${tool.photo}`} height="96" width="96"/></td>
                <td>{tool.title}</td>
                <td>{tool.model}</td>
                <td>{tool.serialnumber}</td>
                <td>${tool.price}/day</td>
                <td>{tool.zipcode}</td>
                <td>
                  <a id='deleteButton' className="waves-effect waves-light btn-small" type='submit' onClick={() => this.handleDelete(tool.id)} rel="nofollow">
                    <i className="material-icons left">remove</i>Delete
                  </a>
                </td>
              </tr>
            )}
          </table>
        </div>
        <a className="waves-effect waves-light btn add" href='/account/add_tools'>
          <i className="material-icons left">add</i>Add Tools
        </a>
      </div>
    );
  }
}

export default MyTools
