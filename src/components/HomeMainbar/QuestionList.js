import moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'

const QuestionList = ({ question }) => {
    return (
        <div className='display-question-container'>
            <div>
                <div className='display-votes-ans'>
                    <p>{question.upVote} votes</p>
                    <p></p>
                </div>
                <div className='display-votes-ans'>
                    <p>{question.answer.length} answer</p>
                 
                </div>
                <div className='display-votes-ans'>
                    <p>{question.views} views</p>
                    
                </div>
            </div>
            <div className='display-question-details'>
                <Link to={`/questions/${question._id}`} className='question-title-links'>{question.questionTitle}</Link>
                <div className='display-tags-time'>
                    <div className='display-tags'>
                        {
                            question.questionTags.slice(0, 2).map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))
                        }
                    </div>
                    <p className='display-time'>
                        asked {moment(question.askedOn).fromNow()} {question.userPosted}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default QuestionList