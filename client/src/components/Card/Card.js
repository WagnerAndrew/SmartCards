import React from 'react'

export default props => (
    
        <>
        <div className="align-center flow-text">
            <div className="card">
                <div className="card-content action question">
                    <span className="card-title activator grey-text text-darken-4">Question<a className="btn-floating btn-large waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">launch</i></a></span>
                    <p>{props.question}</p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Answer<a className="btn-floating btn-large waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">close</i></a></span>
                    <p>{props.answer}</p>
                </div>
                
            </div>

         </div>
      </>
             
    )







