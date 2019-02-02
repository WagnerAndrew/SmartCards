import React, { Component } from 'react';
import NewQuestion from '../components/NewCard/NewQuestion';
import NewAnswer from '../components/NewCard/NewAnswer';
import CardConfirm from '../components/NewCard/CardConfirm'
import CardSuccess from '../components/NewCard/CardSuccess'
import API from  '../utils/API'

export class NewCard extends Component {

  state = {
    step: 1,
    newQuestion: '',
    newAnswer: '', 
    guess: false

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
        answer: this.state.newAnswer, 
        guess: this.state.guess
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
          handleCardSubmit={this.handleCardSubmit}
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
