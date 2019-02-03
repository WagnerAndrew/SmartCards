import React, { Component } from 'react';
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


    render() {

        return (

            <>
                <Row>
                    <Col s={4} className="center-align">
                        <Button waves='light' className="red lighten" onClick={this.incorrect}>
                            <Icon>thumb_down</Icon>
                        </Button>
                    </Col>

                    <Col s={4} className="center-align">
                        <Button waves='light' className="grey lighten-3 black-text" onClick={this.nextCard}>
                            Next Card
                    </Button>
                    </Col>

                    <Col s={4} className="center-align">
                        <Button waves='light' className="green lighten" onClick={this.correct}>
                            <Icon>thumb_up</Icon>
                        </Button>
                    </Col>
                </Row>
                <Row>

                    <Col s={12} className="center-align">
                        <Button waves='light' flat={true} className="grey lighten-5 black-text" >
                            Finish
        
                        </Button>
                    </Col>

                </Row>
            </>
        )

    }
}

export default CardButtons