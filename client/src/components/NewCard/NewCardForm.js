import React, { Component } from 'react';
import { Button, Row, Input } from 'react-materialize'
import API from '../../utils/API'

export class NewCardForm extends Component {

    state = {
        libraries: []
    }

    componentDidMount() {
        this.loadLibraries();
        console.log("this defVal is :", this.state.defVal);

    }

    loadLibraries = () => {
        API.getLibraries()
            .then(res =>

                this.setState({
                    libraries: res.data,
                    defVal: res.data[0]._id
                })
            )
            .catch(err => console.log(err)
            );
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;

        return (
            <>
                <Row>
                    <span className="black-text center-align"><h5>Select A Library For The New Card</h5></span>
                    <Input s={12} type='select' onChange={handleChange('library')}>
                            <option value="" disabled selected>Select A Library</option>
                        {this.state.libraries.map(button => (
                            <option value={button._id}>{button.library}</option>
                        ))}
                    </Input>
                </Row>
                <Row>
                    <span className="black-text center-align"><h5>New Question</h5></span>
                    <Input
                        placeholder="Enter Your New Question Here"
                        s={12}
                        onChange={handleChange('newQuestion')}
                        defaultValue={values.newQuestion}
                    />
                </Row>
                <Row>
                    <span className="black-text center-align"><h5>New Answer</h5></span>
                    <Input
                        placeholder="Enter Your New Answer Here"
                        s={12}
                        onChange={handleChange('newAnswer')}
                        defaultValue={values.newAnswer}
                    />
                </Row>
                <Row className="center-align">
                    <Button waves='light' className="grey lighten-3 black-text" onClick={this.continue}>
                        Continue
                    </Button>


                </Row>

            </>
        )
    }
}


export default NewCardForm




