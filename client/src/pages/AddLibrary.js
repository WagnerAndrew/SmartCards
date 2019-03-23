import React, { Component } from 'react';
import NewLibraryForm from '../components/NewLibrary/NewLibraryForm';
import NewLibrarySuccess from '../components/NewLibrary/NewLibrarySuccess';
import API from '../utils/API';

export class AddLibrary extends Component {
  state = {
    step: 1,
    newLibrary: ''
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleLibrarySubmit = () => {
    if (this.state.newLibrary) {
      API.saveLibrary({
        library: this.state.newLibrary
      })
        .then(res => this.nextStep())
        .catch(err => console.log(err));
    }
  };

  render() {
    const { step, newLibrary } = this.state;
    const values = { newLibrary };

    switch (step) {
      case 1:
        return (
          <NewLibraryForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            handleLibrarySubmit={this.handleLibrarySubmit}
            values={values}
          />
        );
      case 2:
        return <NewLibrarySuccess />;
      default:
        return null;
    }
  }
}

export default AddLibrary;
