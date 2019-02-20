import React, { Component } from 'react'
import { Row, Button } from 'react-materialize'
import { Link } from "react-router-dom"

export class NewCardSuccess extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    add = e => {
        e.preventDefault();
        this.props.anotherCard();
    }

    render() {

        return (
            <>
                <Row className="center-align">
                    <span className="black-text"><h4>Thanks for adding a card!</h4></span>
                    <span className="black-text"><h5>How's it feel to be so smart?</h5></span>
                </Row>
                <Row className="center-align">
                <Link to={"/"}>
                    <Button waves='light' className="confirmBtn grey lighten-3 black-text">
                        Libraries
                    </Button>
                </Link>
                    <Button waves='light' className="confirmBtn grey lighten-2 black-text" onClick={this.add}>
                        Add Another Card
                    </Button>
                </Row>
            </>
        )
    }
}


export default NewCardSuccess
