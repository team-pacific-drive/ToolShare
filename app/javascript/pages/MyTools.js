import React from "react"
import PropTypes from "prop-types"

import moment from 'moment'

import {
  Link
} from 'react-router-dom'

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
    let test = moment('2019-02-25T21:50:21.333Z').startOf('day').fromNow()
    console.log('date', test);
    console.log(this.state.tools)
    return (
      <div>
        <div className="mytools-wrap">
          <div className="mytools-header">
            <p className="mytools-title">My Tools</p>
            <p className="add-text"><a href='/account/add_tools'>Add a Tool</a></p>
          </div>
        </div>
        <div className="mytools-container">
          <hr className="mytools-hr"></hr>
          <table align="center" className="mytools-table">
            <tbody>
              <tr>
                <th className="th-img" ></th>
                <th className="th-title">Title</th>
                <th className="th-make">Make/Model</th>
                <th className="th-created">Created</th>
                <th className="th-price">Price</th>
                <th className="th-edit"></th>
              </tr>
              {this.state.tools.map((tool, index) =>
              <tr key={index}>
                <td className="mytools-img-thumbnail"><img src={`${tool.photo}`}/></td>
                <td className="mytools-table-title">{tool.title}</td>
                <td className="model">{tool.brand} {tool.model}</td>
                <td className="created-date"><p className="created-text">Posted on </p>{moment(tool.created_at).format('l')}</td>
                <td className="price">${tool.price}</td>
                <td className="edit-delete">
                  <a className="edit" type='submit' href={`/account/edit_tool/${tool.id}`} rel="nofollow"><b>Edit</b></a>
                  <a className="delete" type='submit' data-confirm="Are you sure you want to delete this item?" onClick={() => this.handleDelete(tool.id)} rel="nofollow"><b>X</b></a>
                </td>
              </tr>
            )}
            </tbody>
            <hr className="listing-hr"></hr>
          </table>
          <hr className="mytools-hr"></hr>
        </div>
      </div>

    );
  }
}

export default MyTools
