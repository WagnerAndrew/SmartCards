import React, { Component } from 'react';
import { Row, Button } from 'react-materialize'

export class CardSuccess extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {

        return (
            <>
            <Row className="inputField flow-text">
                <span className="card-title black-text"><h4>Thanks for adding the card!</h4></span>
                <span className="card-title black-text"><h5>How's it feel to be so smart?</h5></span>
            </Row>
                <Button waves='light' className="grey lighten-3 black-text" onClick={this.continue}>
                    Libraries
                </Button>
            </>
        )
    }
}


export default CardSuccess
