import React from "react"
import PropTypes from "prop-types"

const NavBar = (props) => {
  let lastname = props.lastname
  let newLastName = lastname.split('', 1)
  console.log(newLastName);
  return(
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">ToolShare</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="/">All Listings</a></li>
          <li><a href="/add_tools">Add Listings</a></li>
          <li><a href="/my_tools">My Tools</a></li>
          {!props.firstname  &&
          <div>
            <li><a href="/users/sign_in">Sign In</a></li>
            <li><a href="/users/sign_up">Sign Up</a></li>
          </div>
        }
          <li><a href="/users/sign_out">Sign Out</a></li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="" className='right'>Welcome {props.firstname} {newLastName}.!</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
