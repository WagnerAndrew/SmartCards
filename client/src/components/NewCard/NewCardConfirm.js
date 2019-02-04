import React, { Component } from 'react'
import { Button, Row} from 'react-materialize'


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
                <Row>
                    <span className="card-title black-text"><h4>Do You Like Your New Card?</h4></span>
                </Row>
                <div className="flow-text">
                    <div className="card">
                        <div className="card-content action question">
                            <span className="card-title activator grey-text text-darken-4">Question<button className="btn-floating btn-large waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">launch</i></button></span>
                            <p>{newQuestion}</p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Answer<button className="btn-floating btn-large waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">close</i></button></span>
                            <p>{newAnswer}</p>
                        </div>

                    </div>

                </div>

                <Button waves='light' className="grey lighten-1  newCardBtn" onClick={this.back}>
                    Back
                </Button>
                
                <Button waves='light' className="green lighten  newCardBtn" onClick={this.continue}>
                    Looks Good! Save it
                </Button>
            </>
        )
    }
}

export default NewCardConfirm
