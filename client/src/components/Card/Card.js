import React from 'react'
import { Modal } from 'react-materialize'

export default props => (
    <>
        <div className="card">
            <div className="card-content">
                <span className="card-title grey-text text-darken-4" />
                <h5>Question</h5>
                <p>{props.question}</p>
                <Modal
                    header='Answer'
                    trigger={<button className="btn-floating waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">launch</i></button>}>
                    <p>{props.answer}</p>
                </Modal>
            </div>
        </div>
    </>
)




