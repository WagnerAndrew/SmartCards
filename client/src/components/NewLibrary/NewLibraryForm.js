import React, { Component } from 'react';
import { Button, Row, Input } from 'react-materialize';

export class NewLibraryForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.handleLibrarySubmit();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        <Row className='center-align'>
          <span className='black-text center-align'>
            <h4>New Library</h4>
          </span>
          <div className='card'>
            <div className='card-content'>
              <Input
                placeholder='Enter Your New Library Here'
                s={12}
                onChange={handleChange('newLibrary')}
                defaultValue={values.newLibrary}
              />

              <Button
                waves='light'
                className='green lighten  newCardBtn'
                onClick={this.continue}
              >
                Save It
              </Button>
            </div>
          </div>
        </Row>
      </>
    );
  }
}

export default NewLibraryForm;
