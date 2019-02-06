import React from 'react'

export default props => (

    <div className="card">
        <div className="card-content action flow-text">
            <span className="card-title activator grey-text text-darken-4"><a className="btn-floating waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">launch</i></a></span>
            <h5>Question</h5>
            <p>{props.question}</p>
        </div>
        <div className="card-reveal flow-text">
            <span className="card-title grey-text text-darken-4"><a className="btn-floating waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">close</i></a></span>
            <h5>Answer</h5>
            <p>{props.answer}</p>
        </div>
    </div>
   
)







