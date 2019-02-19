import React from "react"
import PropTypes from "prop-types"

const NavBar = (props) => {
  return(
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">ToolShare</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="/">All Listings</a></li>
          <li><a href="/account/add_tools">Add Listings</a></li>
          <li><a href="/account/my_tools">My Tools</a></li>
          {!props.firstname  &&
          <li><a href="/users/sign_in">Sign In</a></li>
          }
          {!props.firstname  &&
          <li><a href="/users/sign_up">Sign Up</a></li>
          }
          {props.firstname  &&
          <li><a href="/users/sign_out">Sign Out</a></li>
          }
        </ul>
        {props.firstname  &&
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="" className='right'>Welcome {props.firstname} {props.lastNameInitial}.!</a></li>
        </ul>
        }
      </div>
    </nav>
  )
}

export default NavBar
