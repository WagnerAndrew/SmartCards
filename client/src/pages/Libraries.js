import React, { Component } from 'react';
import { Button, Row } from 'react-materialize'

import API from '../utils/API'

export class Libraries extends Component {

    state = {
        libraries: []
    }

    componentDidMount() {
        this.loadLibraries();
    }


    loadLibraries = () => {
        API.getLibraries()
            .then(res =>
                // console.log("loadCards data is: ",res.data)

                this.setState({ libraries: res.data })
            )
            .catch(err => console.log(err));
    };


    render() {

        return (

            <Row className="inputField">
                {this.state.libraries.map(button => (

                    <Row>
                        <Button waves='light' className="grey lighten-3 black-text">
                            {button.library}
                        </Button>
                    </Row>

                ))}
            </Row>
        )
    }
}
export default Libraries

