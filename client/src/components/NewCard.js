import React, { Component } from 'react';
import NewQuestion from './NewQuestion';
import NewAnswer from './NewAnswer';
import CardConfirm from './CardConfirm'
import CardSuccess from './CardSuccess'

export class NewCard extends Component {

  state = {
    step: 1,
    newQuestion: '',
    newAnswer: ''

  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  };


  render() {
    const { step, newQuestion, newAnswer } = this.state;
    const values = { newQuestion, newAnswer };

    switch (step) {
      case 1:
        return (
          <NewQuestion
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <NewAnswer
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
        )
      case 3:
        return (
          <CardConfirm
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
        />
        )
        case 4:
        return <CardSuccess/>;
        
    }
  }
}

export default NewCard
