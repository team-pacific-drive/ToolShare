import React from 'react'

class Errors extends React.Component{


  render(){

    const { errors } = this.props
    return(
      <div>
        {errors &&
          <div>
            <h2>Errors</h2>
            <ul>
              {Object.keys(errors).map((key, index) => {
                return (
                  <li key={index}>
                    {key}
                    {" "}
                    {errors[key].join(', ')}
                  </li>)
                })
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default Errors
