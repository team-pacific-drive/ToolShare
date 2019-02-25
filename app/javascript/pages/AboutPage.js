import React from 'react'
import { Link } from 'react-router-dom'

import noPhoto from '../../assets/images/no_photo.jpeg'
import logo from '../../assets/images/logo.svg'

class AboutPage extends React.Component{
  render(){
    return(
      <div>
        <h1 className='about-meet-title'>About Us</h1>
        <div className="row">
          <p className="column-text-logo">Taking on another home repair project? Or pheraps you need that one time use of a tool that is $200 down at the local hardware store. No need to worry. ToolShare will save you the time and the money. ToolShare was created to allow users to list and rent tools right out of there local community. This application can also be very useful for those homeowners with a mess of tools stacked up their garage that just never get any use. Knock the dust off of your tools and get some use and money out those paper weights. At the same time help out some local community members in need of some serious assisstance. This is a one of a kind application that is very simple to use. Simply sign up and begin the process. The possibilities are endless. Help others in your community help you! </p>
          <img src={logo} className="tool-logo" alt="tools-logo" />
        </div>
        <h1 className='about-meet-title'>Meet the team!</h1>
        <div className="row">
          <div className="column">
            <div className="card">
              <p>Brandon Cree</p>
              <p>Senior Developer</p>
              <img src={noPhoto} alt="no-photo"/>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p>Eric Ream</p>
              <p>Senior Developer</p>
              <img src={noPhoto} alt="no-photo"/>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p>Justin Garcia</p>
              <p>Senior Developer</p>
              <img src={noPhoto} alt="no-photo"/>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p>Steven Kulp</p>
              <p>Senior Developer</p>
              <img src={noPhoto} alt="no-photo"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage
