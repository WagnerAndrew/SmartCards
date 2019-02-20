import React, { Component } from 'react'
import { Button, Modal, Row } from 'react-materialize'


export class NewCardConfirm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.handleCardSubmit();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { newQuestion, newAnswer } } = this.props;

        return (
            <>
                <Row className="center-align">
                    <span className="black-text"><h4>Do You Like Your New Card?</h4></span>
                </Row>

                <div className="card">
                    <div className="card-content">
                        <span className="card-title grey-text text-darken-4" />
                        <h5>Question</h5>
                        <p>{newQuestion}</p>
                        <Modal
                            header='Answer'
                            trigger={<a className="btn-floating waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">launch</i></a>}>
                            <p>{newAnswer}</p>
                        </Modal>
                    </div>

                </div>

                <Row className="center-align">

                    <Button waves='light' className="confirmBtn grey lighten-1" onClick={this.back}>
                        Back
                    </Button>

                    <Button waves='light' className="confirmBtn green lighten" onClick={this.continue}>
                        Looks Good! Save It
                    </Button>

                </Row>
            </>
        )
    }
}

export default NewCardConfirm
