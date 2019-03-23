import React, { Component } from 'react';
import { Row, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

export class NewLibrarySuccess extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <>
        <Row className='center-align'>
          <span className='black-text'>
            <h4>Thanks for adding a library!</h4>
          </span>

          <div className='card'>
            <div className='card-content'>
              <span className='black-text'>
                <h5>Don't forget to add some cards...</h5>
              </span>
              <Row className='center-align buttonTop'>
                <Link to={'/'}>
                  <Button
                    waves='light'
                    className='confirmBtn grey lighten-3 black-text'
                  >
                    Libraries
                  </Button>
                </Link>
                <Link to={'/addCard'}>
                  <Button
                    waves='light'
                    className='confirmBtn grey lighten-2 black-text'
                  >
                    Add Cards
                  </Button>
                </Link>
              </Row>
            </div>
          </div>
        </Row>
      </>
    );
  }
}
export default NewLibrarySuccess;
