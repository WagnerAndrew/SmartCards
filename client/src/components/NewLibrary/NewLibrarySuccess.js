import React, { Component } from 'react'
import { Row, Button } from 'react-materialize'
import { Link } from "react-router-dom"

export class NewLibrarySuccess extends Component {

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
                <span className="card-title black-text"><h4>Thanks for adding another library!</h4></span>
                <span className="card-title black-text"><h5>Don't forget to add some cards too</h5></span>
            </Row>
            <Link to={"/"}>
                <Button waves='light' className="grey lighten-3 black-text">
                    Libraries
                </Button>
            </Link>
            <Link to={"/addCard"}>
                <Button waves='light' className="grey lighten-1 black-text">
                    Add Cards
                </Button>
            </Link>
               
            </>
        )
    }
}


export default NewLibrarySuccess
