import React, { Component } from 'react'
import { Button, Row } from 'react-materialize'


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
                    <span className="card-title black-text"><h5>Do You Like Your New Card?</h5></span>
                </Row>

                    <div className="card">
                        <div className="card-content action">
                            <span className="card-title activator grey-text text-darken-4">Question<button className="btn-floating waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">launch</i></button></span>
                            <p>{newQuestion}</p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Answer<button className="btn-floating waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">close</i></button></span>
                            <p>{newAnswer}</p>
                        </div>
                    </div>

                <Row className="center-align">

                    <Button waves='light' className="grey lighten-1" onClick={this.back}>
                        Back
                    </Button>

                    <Button waves='light' className="green lighten" onClick={this.continue}>
                        Looks Good! Save It
                    </Button>

                </Row>
            </>
        )
    }
}

export default NewCardConfirm
