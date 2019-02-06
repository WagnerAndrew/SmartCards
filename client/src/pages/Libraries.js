import React, { Component } from 'react';
import { Row } from 'react-materialize'
import Card from '../components/Card/Card';
import CardButtons from '../components/Card/CardButtons'
import { CorrectAnswers, IncorrectAnswers } from '../components/Card/Results'
import API from '../utils/API'

export class Libraries extends Component {

    state = {
        libraries: [],
        cards: [],
        correct: [],
        incorrect: [],
        question: '',
        answer: '',
        index: 0,
        libraryName: '',
        resultText: '',
        step: 1

    }

    componentDidMount() {
        this.loadLibraries();
    }

    loadLibraries = () => {
        API.getLibraries()
            .then(res =>
                this.setState({
                    libraries: res.data,
                    index: 0,
                    resultText: '',
                    step: 1

                })
            )
            .catch(err => console.log(err)
            );
    };

    loadCards = (id, name) => {
        const { index, step } = this.state;
        API.getLibrary(id)
            .then(res =>
                this.setState({
                    correct: [],
                    incorrect: [],
                    cards: res.data.cardsID,
                    libraryName: name,
                    question: res.data.cardsID[index].question,
                    answer: res.data.cardsID[index].answer,
                    step: step + 1
                })
            )
            .catch(err => console.log(err)
            );
    };

    nextCard = () => {
        const { index, cards } = this.state;
        console.log(index, cards.length);

        if (index === cards.length - 1) {
            this.results();

        } else {
            this.setState({
                index: index + 1,
                resultText: ''
            }, () => {
                this.refreshCard()
            })
        }

    };

    refreshCard = () => {
        const { index, cards } = this.state;
        this.setState({
            question: cards[index].question,
            answer: cards[index].answer
        })
    };

    correct = () => {
        const { question, answer } = this.state;

        this.setState({
            resultText: "Got it!"
        }, () => {
            this.state.correct.push({ question: question, answer: answer })
        })
        
    };

    incorrect = () => {
        const { question, answer } = this.state;

        this.setState({
            resultText: "Missed it!"
        }, () => {
            this.state.incorrect.push({ question: question, answer: answer })
        })
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
                    <Row>
                        <span className="card-title black-text center-align"><h5>Select A Library To Study</h5></span>

                        <div class="collection center-align">
                            {this.state.libraries.map(button => (
                                <a onClick={() => this.loadCards(button._id, button.library)} class="collection-item black-text">{button.library}</a>
                            ))}
                        </div>
                    </Row>
                )
            case 2:
                return (
                    <>
                        <span className="card-title black-text center-align"><h4>{this.state.libraryName}</h4></span>
                        <Card question={question} answer={answer} />
                        <CardButtons nextCard={this.nextCard} correct={this.correct} incorrect={this.incorrect} results={this.results} />
                        <span className="card-title black-text center-align"><h5>{this.state.resultText}</h5></span>
                    </>
                )
            case 3:
                return (
                    <>
                        <span className="card-title black-text center-align"><h4>{this.state.libraryName}</h4></span>
                        <span className="card-title black-text center-align"><h5>Results</h5></span>
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
export default Libraries

