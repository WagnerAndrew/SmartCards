import React, { Component } from 'react';
import { Row } from 'react-materialize'

export class CardSuccess extends Component {

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

        return (
            <Row className="inputField flow-text">
                <span className="card-title black-text"><h4>Thanks for adding the card!</h4></span>
                <span className="card-title black-text"><h5>How's it feel to be so smart?</h5></span>
            </Row>
        )
    }
}


export default CardSuccess
