import React, { Component } from 'react';
import Card from '../components/Card/Card';
import CardButtons from '../components/Card/CardButtons'
import API from '../utils/API'

export class Cards extends Component {

    state = {
        cards: [],
        correct: [], 
        incorrect: [],
        question: '',
        answer: '',
        index: 0

    }

    componentDidMount() {
        this.loadCards();
    }


    loadCards = () => {
        const { index } = this.state;
        API.getCards()
            .then(res =>
                    // console.log("loadCards data is: ",res.data)

                this.setState({ cards: res.data, correct: [], incorrect: [], question: res.data[index].question, answer: res.data[index].answer})
            )
            .catch(err => console.log(err));
    };


    nextCard = () => {
        const { index, cards } = this.state;
        if (index < cards.length){
            this.setState({
                index: index + 1,
                question: cards[index].question,
                answer: cards[index].answer
            })
        }else {
            this.setState({
                index: 0,
                question: cards[index].question,
                answer: cards[index].answer
            })
        }
    };

    correct = () => {
        const {question, answer} = this.state;
        
        this.state.correct.push({question: question, answer: answer})
    };


    incorrect = () => {
        const {question, answer} = this.state;
        
        this.state.incorrect.push({question: question, answer: answer})
    };

    render() {
        const { question, answer } = this.state;
        const values = { question, answer };

        return (
            <>
                <Card question={this.state.question} answer={this.state.answer}/>
                <CardButtons nextCard={this.nextCard} correct={this.correct} incorrect={this.incorrect}/>
            </>
        )
    }
}
export default Cards
