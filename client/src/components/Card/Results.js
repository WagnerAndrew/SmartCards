import React from 'react'
import {Table} from 'react-materialize'



export function CorrectAnswers ( props ) {
    return (

            <div>
                <div className="card flow-text">
                    <div className="card-content">
                        <span className="card-title grey-text lighten-4 results">Correct Answers</span>
                        <Table bordered={true} hoverable={true}>
                            <thead>
                                <tr>
                                    <th data-field="id">Question</th>
                                    <th data-field="name">Answer</th>
                                </tr>
                            </thead>

                            <tbody className="green lighten-3">
                                { props.children }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
    
    )
}

export function IncorrectAnswers ( props ) {
    return (

            <div>
                <div className="card flow-text">
                    <div className="card-content">
                        <span className="card-title grey-text lighten-4 results">Wrong Answers</span>
                        <Table bordered={true} hoverable={true}>
                            <thead>
                                <tr>
                                    <th data-field="id">Question</th>
                                    <th data-field="name">Answer</th>
                                </tr>
                            </thead>

                            <tbody className="red lighten-3">
                                { props.children }
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
    )
}



// <>
//             <div>
//                 <div className="card flow-text">
//                     <div className="card-content action">
//                         <span className="card-title black-text"><h4>Results</h4></span>
//                         <span className="card-title grey-text lighten-4 results">Correct Answers</span>
//                         <Table bordered={true} hoverable={true}>
//                             <thead>
//                                 <tr>
//                                     <th data-field="id">Question</th>
//                                     <th data-field="name">Answer</th>
//                                 </tr>
//                             </thead>

//                             <tbody className="green lighten-3">
//                                 <tr>
//                                     <td>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </td>
//                                     <td>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
//                                 </tr>
//                                 <tr>
//                                     <td>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
//                                     <td>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
//                                 </tr>
//                                 <tr>
//                                     <td>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
//                                     <td>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
//                                 </tr>
//                             </tbody>
//                         </Table>
//                         <span className="card-title grey-text lighten-4 results">Wrong Answers</span>
//                         <Table bordered={true} hoverable={true}>
//                             <thead>
//                                 <tr>
//                                     <th data-field="id">Question</th>
//                                     <th data-field="name">Answer</th>
//                                 </tr>
//                             </thead>

//                             <tbody className="red lighten-3">
//                             <tr>
//                                     <td>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </td>
//                                     <td>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
//                                 </tr>
//                                 <tr>
//                                     <td>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
//                                     <td>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
//                                 </tr>
//                                 <tr>
//                                     <td>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</td>
//                                     <td>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</td>
//                                 </tr>
//                             </tbody>
//                         </Table>
//                     </div>
//                 </div>

//             </div>
//         </>






