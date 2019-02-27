import React from "react"
import PropTypes from "prop-types"

import Logo from './../../assets/images/logo2.svg'

class NavBar extends React.Component{

   addingToEndofName = () => {
    let { current_user } = this.props
    let firstname = current_user.firstname
    if(firstname.endsWith('s')){
      return firstname+'\''
    } else {
      return firstname+'\'s'
    }
  }

  render(){
    let { current_user } = this.props
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
            <a href="/"><li className="navi-element"><b>Rent a Tool</b></li></a>
            {current_user &&
              <React.Fragment>
                <a href="/account/add_tools"><li className="navi-element"><b>Add a Tool</b></li></a>
                <a href="/about"><li className="navi-element"><b>About</b></li></a>
                <a href="/account/my_tools"><li className="navi-element"><b>{this.addingToEndofName()} Tools</b></li></a>
                <a href="/users/sign_out" rel="nofollow" data-method="delete"><li className="navi-element sign-out"><b>Sign Out</b></li></a>
              </React.Fragment>
            }
            {!current_user &&
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
}

export default NavBar
