import React, { Component } from 'react';
import Card from '../components/Card/Card';
import CardButtons from '../components/Card/CardButtons'
import API from '../utils/API'

export class Cards extends Component {

    state = {
        cards: [],
        question: '',
        answer: '',
        guess: false

    }

    componentDidMount() {
        this.loadCards();
    }


    loadCards = () => {
        API.getCards()
            .then(res =>
                    // console.log("loadCards data is: ",res.data)

                this.setState({ cards: res.data, question: res.data[0].question, answer: res.data[0].answer})
            )
            .catch(err => console.log(err));
    };


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
        const { question, answer } = this.state;
        const values = { question, answer };

        return (
            <>
                <Card question={this.state.question} answer={this.state.answer}/>
                <CardButtons />
            </>
        )
    }
}
export default Cards
