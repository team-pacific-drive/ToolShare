import React from "react"
import PropTypes from "prop-types"
import Logo from './../../assets/images/logo2.svg'

const NavBar = (props) => {
  return(
      <div className="navi-span">
        <div className="navi-container">
          <div className="toolshare">
            <a href="/">
              <div className="logo">
                <img src={Logo} height="32" width="32" />
                <p className="logo-text">ToolShare</p>
              </div>
            </a>
          </div>
          <ul className="navi-items">
            <a href="/"><li className="navi-element"><b>All Listings</b></li></a>
            <a href="/account/add_tools"><li className="navi-element"><b>Create Listing</b></li></a>
            {props.firstname  &&
              <a href="/account/my_tools"><li className="navi-element"><b>{props.firstname}'s Tools</b></li></a>
            }
            {!props.firstname  &&
            <a href="/users/sign_in"><li className="navi-element">Sign In / Sign Up</li></a>
            }
            {props.firstname  &&
            <a href="/users/sign_out"><li className="navi-element">Sign Out</li></a>
            }
          </ul>
        </div>
      </div>
  )
}

export default NavBar
