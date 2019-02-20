import React, { Component } from 'react'
import { Button, Icon, Row, Col } from 'react-materialize'


export class CardButtons extends Component {


    incorrect = e => {
        e.preventDefault();
        this.props.incorrect();
    }

    nextCard = e => {
        e.preventDefault();
        this.props.nextCard();
    }


    correct = e => {
        e.preventDefault();
        this.props.correct();
    }

    results = e => {
        e.preventDefault();
        this.props.results();
    }


    render() {
        return (
            <>
                <Row className= "center-align">
                    <Col s={4} >
                        <Button waves='light' className="red lighten" disabled={this.props.disabled} onClick={this.incorrect}>
                            <Icon>thumb_down</Icon>
                        </Button>
                    </Col>
                    <Col s={4}>
                        <Button waves='light' className="grey lighten-3 black-text" onClick={this.nextCard}>
                            Next Card
                    </Button>
                    </Col>
                    <Col s={4} >
                        <Button waves='light' className="green lighten" disabled={this.props.disabled} onClick={this.correct}>
                            <Icon>thumb_up</Icon>
                        </Button>
                    </Col>
                </Row>
                <Row className= "center-align">
                    <Col s={12} >
                        <Button waves='light' flat={true} className="grey lighten-5 black-text" onClick={this.results} >
                            Finish
                        </Button>
                    </Col>
                </Row>
            </>
        )
    }
}

export default CardButtons