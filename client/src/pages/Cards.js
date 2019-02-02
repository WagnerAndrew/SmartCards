import React, { Component } from 'react';
import Card from '../components/Card/Card';
import CardButtons from '../components/Card/CardButtons'
import Navbar from '../components/Card/Navbar'
import API from  '../utils/API'

export class Cards extends Component {

  state = {
    id: '',
    question: '',
    newAnswer: '', 
    guess: false

  }

  nextCard = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value })
  };

  render() {
    const { id, question, answer } = this.state;
    const values = { id, question, answer };


          <CardConfirm
          handleCardSubmit={this.handleCardSubmit}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
        />
       
}

export default Cards
