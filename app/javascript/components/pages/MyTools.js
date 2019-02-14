import React from "react"
import PropTypes from "prop-types"

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

const MyTools = (props) => {
    // debugger
    return (
      <div>
        <h1>My Tools</h1>
        <table className='striped responsive-table' style={{width:'60vw'}}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Model</th>
              <th>Serial Number</th>
              <th>Price Per Day</th>
              <th>Price Per Hour</th>
              <th>Zip Code</th>
            </tr>
            </thead>
            <tbody>
            {props.tools.map((tool, index) =>
            <tr key={index}>
              <td>{tool.title}</td>
              <td>{tool.model}</td>
              <td>{tool.serialnumber}</td>
              <td>{tool.price}</td>
              <td>Need to add</td>
              <td>{tool.zipcode}</td>
              <td>{tool.id}</td>
              <td>
                <a id='deleteButton' className="waves-effect waves-light btn-small" type='submit' onClick={() => props.handleDelete(tool.id)} rel="nofollow">
                  <i className="material-icons left">remove</i>Delete
                </a>
              </td>
            </tr>
          )}
          </tbody>
        </table>
        <a className="waves-effect waves-light btn add" href='/add_tools'>
          <i className="material-icons left">add</i>Add Tools
        </a>
      </div>
    );
}

export default MyTools
