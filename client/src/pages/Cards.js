import React, { Component } from 'react';
import Card from '../components/Card/Card';
import CardButtons from '../components/Card/CardButtons'
import { CorrectAnswers, IncorrectAnswers } from '../components/Card/Results'
import API from '../utils/API'

export class Cards extends Component {

    state = {
        cards: [],
        correct: [],
        incorrect: [],
        question: '',
        answer: '',
        index: 0,
        step: 1

    }

    componentDidMount() {
        this.loadCards();
    }


    loadCards = () => {
        const { index } = this.state;
        API.getCards()
            .then(res =>
                // console.log("loadCards data is: ",res.data)

                this.setState({ cards: res.data, correct: [], incorrect: [], question: res.data[index].question, answer: res.data[index].answer })
            )
            .catch(err => console.log(err));
    };


    nextCard = () => {
        const { index, cards } = this.state;
        if (index < cards.length) {
            this.setState({
                index: index + 1,
                question: cards[index].question,
                answer: cards[index].answer
            })
        } else {
            this.setState({
                index: 0,
                question: cards[index].question,
                answer: cards[index].answer
            })
        }
    };

    correct = () => {
        const { question, answer } = this.state;

        this.state.correct.push({ question: question, answer: answer })
    };


    incorrect = () => {
        const { question, answer } = this.state;

        this.state.incorrect.push({ question: question, answer: answer })
    };

    results = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        })
    }

    render() {
        const { step, question, answer } = this.state;

        switch (step) {
            case 1:
                return (
                    <>
                        <Card question={question} answer={answer} />
                        <CardButtons nextCard={this.nextCard} correct={this.correct} incorrect={this.incorrect} results={this.results} />
                    </>
                )
            case 2:
                return (
                    <>
                        <span className="card-title black-text"><h4>Results</h4></span>
                        <CorrectAnswers>
                            {this.state.correct.map(table => (
                                <tr>
                                    <td>{table.question}</td>
                                    <td>{table.answer}</td>
                                </tr>
                            ))}
                        </CorrectAnswers>
                        <IncorrectAnswers>
                            {this.state.incorrect.map(table => (
                                <tr>
                                    <td>{table.question}</td>
                                    <td>{table.answer}</td>
                                </tr>
                            ))}
                        </IncorrectAnswers>
                    </>
                )
            default: return null;
        }
    }
}
export default Cards




//   render() {
//     const { step, correct, incorrect, question, answer } = this.state;


//     return (
//         <>
//             <Card question={this.state.question} answer={this.state.answer}/>
//             <CardButtons nextCard={this.nextCard} correct={this.correct} incorrect={this.incorrect}/>
//         </>
//     )
// }