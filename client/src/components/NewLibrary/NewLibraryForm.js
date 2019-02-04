import React, { Component } from 'react';
import { Button, Row, Input } from 'react-materialize'




export class NewLibraryForm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.handleLibrarySubmit();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <>
                <Row className="inputField">
                    <span className="card-title black-text"><h4>New Libary</h4></span>
                    <Input
                        placeholder="Enter Your New Library Here"
                        s={12}
                        onChange={handleChange('newLibrary')}
                        defaultValue={values.newLibrary}
                    />
                </Row>
                
                <Button waves='light' className="green lighten  newCardBtn" onClick={this.continue}>
                    Looks Good! Save it
                </Button>
            </>
        )
    }
}


export default NewLibraryForm
