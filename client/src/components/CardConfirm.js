import React, { Component } from 'react';
import { Button, Row} from 'react-materialize'

export class NewAnswer extends Component {

    continue = e => {
        e.preventDefault();
        // PROCESS ENTRIES HERE - SEND TO EXPRESS TO CREATE CARD //
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { newQuestion, newAnswer } } = this.props;

        return (
            <>
                <Row className="inputField">
                    <span className="card-title black-text"><h4>Do You Like Your New Card?</h4></span>
                </Row>
                <div className="flow-text">
                    <div className="card">
                        <div className="card-content action question">
                            <span className="card-title activator grey-text text-darken-4">Question<a className="btn-floating btn-large waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">launch</i></a></span>
                            <p>{newQuestion}</p>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4">Answer<a className="btn-floating btn-large waves-effect waves-light right grey lighten-5"><i className="material-icons black-text">close</i></a></span>
                            <p>{newAnswer}</p>
                        </div>

                    </div>

                </div>

                <Button waves='light' className="grey lighten-1  newCardBtn" onClick={this.back}>
                    Back
                </Button>
                
                <Button waves='light' className="green lighten-2  newCardBtn" onClick={this.continue}>
                    Looks Good! Save it
                </Button>
            </>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default NewAnswer
