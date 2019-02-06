import React from 'react'
import { Table } from 'react-materialize'



export function CorrectAnswers(props) {
    return (

        <div>
            <div className="card">
                <div className="card-content">
                    <span className="card-title grey-text lighten-4 center-align">Correct Answers</span>
                    <Table bordered={true} hoverable={true}>
                        <thead>
                            <tr>
                                <th data-field="id">Question</th>
                                <th data-field="name">Answer</th>
                            </tr>
                        </thead>

                        <tbody className="green lighten-3">
                            {props.children}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export function IncorrectAnswers(props) {
    return (

        <div>
            <div className="card">
                <div className="card-content">
                    <span className="card-title grey-text lighten-4 center-align">Wrong Answers</span>
                    <Table bordered={true} hoverable={true}>
                        <thead>
                            <tr>
                                <th data-field="id">Question</th>
                                <th data-field="name">Answer</th>
                            </tr>
                        </thead>

                        <tbody className="red lighten-3">
                            {props.children}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

