import React from 'react'

class Errors extends React.Component{
  render(){
    const { errors } = this.props
    console.log(errors);
    return(
      <div className='row'>
        <div className='col s4'>
          {errors &&
            <div className='card red-text'>
              <ul class="collection with-header">
                <li className="collection-header"><h4>Errors</h4></li>
                {Object.keys(errors).map((key, index) => {
                  return (
                    <li className="collection-item" key={index}>
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
      </div>
    )
  }
}

export default Errors
