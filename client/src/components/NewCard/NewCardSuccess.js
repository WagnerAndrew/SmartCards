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

    render() {

        return (
            <>
            <Row className="inputField flow-text">
                <span className="card-title black-text"><h4>Thanks for adding the card!</h4></span>
                <span className="card-title black-text"><h5>How's it feel to be so smart?</h5></span>
            </Row>
            <Link to={"/"}>
                <Button waves='light' className="grey lighten-3 black-text" href="/">
                    Libraries
                </Button>
            </Link>
               
            </>
        )
    }
}


export default NewCardSuccess
