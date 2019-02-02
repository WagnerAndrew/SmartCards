import React, { Component } from 'react';
import { Button, Row, Input } from 'react-materialize'




export class NewQuestion extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <Row className="inputField">
        <span className="card-title black-text"><h4>New Question</h4></span>
          <Input
            placeholder="Enter Your New Question Here"
            s={12}
            onChange={handleChange('newQuestion')}
            defaultValue={values.newQuestion}
          />
      
        </Row>

        <Button waves='light' className="grey lighten-3 black-text" onClick={this.continue}>
          Continue
        </Button>
      </>
    )
  }
}


export default NewQuestion
