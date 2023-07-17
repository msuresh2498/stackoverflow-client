import React from 'react'
import { Link } from 'react-router-dom'
import './DisplayQuestion.css'

const DisplayAnswers = ({ question }) => {


    return (
        <div>
            {question.answer.map((ans) => (
                <div className='display-ans' key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className='question-ans-user'>
                        <div className='edit-question-btn'>
                            <button>Share</button>
                            <button>Delete</button>
                        </div>
                        <div>
                            <p> answered {ans.answeredOn}</p>
                            <Link to={`/User/${question.userId}`} className='user-link' style={{ color: "#0086d8" }}>
                                {/* <Avatar backgroundColor='green' px='5px' py='6px'>{ans.UserAnswered.charAt(0).toUpperCase()}</Avatar> */}
                                <div>
                                    {ans.UserAnswered}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

export default DisplayAnswers