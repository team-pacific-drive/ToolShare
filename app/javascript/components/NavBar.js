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
            <a href="/about"><li className="navi-element"><b>About</b></li></a>
            <a href="/"><li className="navi-element"><b>Rent a Tool</b></li></a>
            {props.firstname  &&
              <React.Fragment>
                <a href="/account/add_tools"><li className="navi-element"><b>Add a Tool</b></li></a>
                <a href="/account/my_tools"><li className="navi-element"><b>{props.firstname} Tools</b></li></a>
                <a href="/conversations"><li className="navi-element"><b>Messages</b></li></a>
                <a href="/users/sign_out" rel="nofollow" data-method="delete"><li className="navi-element sign-out"><b>Sign Out</b></li></a>
              </React.Fragment>
            }
            {!props.firstname  &&
              <React.Fragment>
                <a href="/users/sign_in"><li className="navi-element"><b>Add a Tool</b></li></a>
                <a href="/about"><li className="navi-element"><b>About</b></li></a>
                <a href="/users/sign_in"><li className="navi-element"><b>Sign In</b></li></a>
                <a href="/users/sign_up"><li className="navi-element login-register"><b>Join</b></li></a>
              </React.Fragment>
            }
          </ul>
        </div>
      </div>
  )
}

export default NavBar
