import React from 'react'
import { Button, Icon, Row, Col } from 'react-materialize'

export default () => (
    <>
        <Row>
            <Col s={4} className="center-align">
                <Button waves='light' className="red lighten">
                    <Icon>thumb_down</Icon>
                </Button>
            </Col>

            <Col s={4} className="center-align">
                <Button waves='light' className="grey lighten-3 black-text" >
                    Next Card
                </Button>
            </Col>

            <Col s={4} className="center-align">
                <Button waves='light' className="green lighten" >
                    <Icon>thumb_up</Icon>
                </Button>
            </Col>
        </Row>
        <Row>
           
            <Col s={12}  className="center-align">
            <Button waves='light' flat={true} className="grey lighten-5 black-text" >
                    Finish

                </Button>
            </Col>
          
        </Row>
    </>
)