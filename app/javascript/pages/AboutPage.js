import React from 'react'
import tool from '../../assets/images/tool.jpeg'
import noPhoto from '../../assets/images/no_photo.jpeg'

class AboutPage extends React.Component{
  render(){
    return(
      <div>
        <h1>About Page</h1>
        <div className="tool-image">
          <img src={tool} alt='tools-image'/>
        </div>
        <p>Taking on another home repair project? Or pheraps you need that one time use of a tool that is $200 down at the local hardware store. No need to worry. ToolShare will save you the time and the money. ToolShare was created to allow users to list and rent tools right out of there local community. This application can also be very useful for those homeowners with a mess of tools stacked up their garage that just never get any use. Knock the dust off of your tools and get some use and money out those paper weights. At the same time help out some local community members in need of some serious assisstance. This is a one of a kind application that is very simple to use. Simply sign up and begin the process. The possibilities are endless. Help others in your community help you! </p>
        <h2>Meet the team!</h2>
        <div className="row">
          <div className="column">
            <ul className="card">
              <li>Brandon Cree</li>
              <li>Senior Developer</li>
              <img src={noPhoto} alt="no-photo"/>
            </ul>
          </div>
          <div className="column">
            <ul className="card">
              <li>Eric Ream</li>
              <li>Senior Developer</li>
              <img src={noPhoto} alt="no-photo"/>
            </ul>
          </div>
          <div className="column">
            <ul className="card">
              <li>Justin Garcia</li>
              <li>Senior Developer</li>
              <img src={noPhoto} alt="no-photo"/>
            </ul>
          </div>
          <div className="column">
            <ul className="card">
              <li>Steven Kulp</li>
              <li>Senior Developer</li>
              <img src={noPhoto} alt="no-photo"/>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage
