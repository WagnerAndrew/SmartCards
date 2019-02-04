import React, { Component } from 'react';
import NewCardForm from '../components/NewCard/NewCardForm'
import NewCardConfirm from '../components/NewCard/NewCardConfirm'
import NewCardSuccess from '../components/NewCard/NewCardSuccess'
import API from  '../utils/API'

export class AddCard extends Component {

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

  
  handleCardSubmit = () => {
   
    if (this.state.newQuestion && this.state.newAnswer) {
      API.saveCard({
        question: this.state.newQuestion,
        answer: this.state.newAnswer

      })
        .then(res => this.nextStep())
        .catch(err => console.log(err));
    }
  };

  
  render() {
    const { step, newQuestion, newAnswer } = this.state;
    const values = { newQuestion, newAnswer };

    switch (step) {
      case 1:
        return (
          <NewCardForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <NewCardConfirm
          handleCardSubmit={this.handleCardSubmit}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
        />
        )
      case 3:
        return <NewCardSuccess/>;
      default: return null;
    }

  }
}

export default AddCard
