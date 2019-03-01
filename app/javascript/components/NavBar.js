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

  toggleMenu() {
    var x = document.getElementById("nav-menu");
    if (x.className === "navi-items") {
      x.className += " mobile-menu";
    } else {
      x.className = "navi-items";
    }
  }

  render(){
    let { current_user } = this.props
    return(
      <div className="navi-span">
        <div className="navi-container">
          <div className="logo-container">
            <a href="/">
              <div className="logo">
                <img src={Logo} height="32" width="32" />
                <p className="logo-text">ToolShare</p>
              </div>
            </a>
          </div>
          <ul className="navi-items" id="nav-menu">
            {current_user &&
              <React.Fragment>
                <a href="/"><li className="navi-element"><b>Listings</b></li></a>
                <a href="/account/add_tools"><li className="navi-element"><b>Add a Tool</b></li></a>
                <a href="/account/my_tools"><li className="navi-element"><b>{this.addingToEndofName()} Tools</b></li></a>
                <a href="/conversations"><li className="navi-element"><b>Messages</b></li></a>
                <a href="/users/sign_out" rel="nofollow" data-method="delete"><li className="navi-element sign-out"><b>Sign Out</b></li></a>
                <a href="javascript:void(0);" onClick="toggleMenu()">
                  <h3 className="mobile-menu">Menu</h3>
                </a>
              </React.Fragment>
            }
            {!current_user &&
              <React.Fragment>
                <a href="/about"><li className="navi-element"><b>About</b></li></a>
                <a href="/"><li className="navi-element"><b>Listings</b></li></a>
                <a href="/users/sign_in"><li className="navi-element"><b>Sign In</b></li></a>
                <a href="/users/sign_up"><li className="navi-element login-register"><b>Join</b></li></a>
                <a href="javascript:void(0);" onClick="toggleMenu()">
                  <h3 className="mobile-menu">Menu</h3>
                </a>
              </React.Fragment>
            }
        </div>
      </div>
    )
  }
}

export default NavBar
