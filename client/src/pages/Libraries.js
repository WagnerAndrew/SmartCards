import React, { Component } from 'react';
import { Collection, CollectionItem, Row, Button } from 'react-materialize'
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
        step: 1

    }

    componentDidMount() {
        this.loadLibraries();
    }

    loadLibraries = () => {
        API.getLibraries()
            .then(res =>
                this.setState({ libraries: res.data })
            )
            .catch(err => console.log(err));
    };

    loadCards = id => {
        const { index } = this.state;
        API.getLibrary(id)
            .then(res =>
                console.log("loadCards data is: ",res.data)

                // this.setState({ cards: res.data, correct: [], incorrect: [], question: res.data[index].question, answer: res.data[index].answer })
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
                <Row className="inputField">
                <span className="card-title black-text"><h5>Select A Library To Study</h5></span>
    
                    <Collection>
                        {this.state.libraries.map(button => (
                            <CollectionItem >
                            <Button onClick={() => this.loadCards(button._id)}>
                                {button.library}
                            </Button>
                            </CollectionItem>
                        ))}
                    </Collection>
                </Row>
            )
            case 2:
                return (
                    <>
                        <Card question={question} answer={answer} />
                        <CardButtons nextCard={this.nextCard} correct={this.correct} incorrect={this.incorrect} results={this.results} />
                    </>
                )
            case 3:
                return (
                    <>
                        <span className="card-title black-text"><h5>Results</h5></span>
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


// deleteBook = id => {
// API.deleteBook(id)
//     .then(res => this.loadBooks())
//     .catch(err => console.log(err));
// };

// componentDidMount() {
// API.getBook(this.props.match.params.id)
// .then(res => this.setState({ book: res.data }))
// .catch(err => console.log(err));
// }