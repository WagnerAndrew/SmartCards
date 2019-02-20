import React from 'react'
import { Modal, Button } from 'react-materialize'

export default props => (
    <>
        <div className="card">
            <div className="card-content">
                <span className="card-title grey-text text-darken-4"/>
                <h5>Question</h5>
                <p>{props.question}</p>
                <Modal
                    header='Answer'
                    trigger={<a className="btn-floating waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">launch</i></a>}>
                    <p>{props.answer}</p>
                </Modal>
            </div>

        </div>


    </>


)

{/* <>
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
   
<Modal
  header='Modal Header'
  trigger={<Button>MODAL</Button>}>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
</Modal>
</> */}





