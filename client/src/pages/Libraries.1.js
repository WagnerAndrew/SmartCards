import React, { Component } from 'react';
import { Collection, CollectionItem, Row } from 'react-materialize'

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
            <span className="card-title black-text"><h5>Select A Library To Study</h5></span>

                <Collection>
                    {this.state.libraries.map(button => (
                        <CollectionItem href={"libraries/" + button._id}>
                            {button.library}
                        </CollectionItem>
                    ))}
                </Collection>
            </Row>
        )
    }
}
export default Libraries

