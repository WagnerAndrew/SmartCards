import React, { Component } from 'react';
import { Button, Row, Input } from 'react-materialize'
import API from '../utils/API'

export class AddLibrary extends Component {

    state = {
        newLibrary: ''
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    };

    render() {
        const { newLibrary } = this.state;
        const values = { newLibrary };

        return (
            <>
                <Row className="inputField">
                    <span className="card-title black-text"><h4>Add A New Library</h4></span>
                    <Input
                        placeholder="Enter Your New Library Here"
                        s={12}
                        onChange={this.handleChange('newLibrary')}
                        defaultValue={values.newQuestion}
                    />
                </Row>
                <Row>
                    <span className="card-title black-text"><h5>Choose An Existing Library</h5></span>
                </Row>
            </>
        )
    }
}

export default AddLibrary


