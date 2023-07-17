import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from '@mui/material';
import './DisplayQuestion.css'
import DisplayAnswers from './DisplayAnswers';
import { API } from '../api';
import axios from 'axios';
import { UserContext } from '../Auth/Authorization';
import moment from 'moment';
import { toast } from 'react-toastify';

const QuestionDetails = () => {

    const { user } = useContext(UserContext);
    const [question, setQuestions] = useState();
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${API}/questions/${id}`, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => setQuestions(data))
            .catch((error) => console.error('Error fetching questions:', error));

    }, [id])
    const [answerBody, setAnswerBody] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const addAnswer = (newAnswer) => {
            setQuestions((prevQuestion) => ({
                ...prevQuestion,
                answer: [...prevQuestion.answer, newAnswer],
            }));
        };
        
        try {
            const response = axios.post(`${API}/questions/postanswer/${id}` )
            .then(response => navigate('/')).then(alert("Answer Added succesfully"))
        console.log(response)
        addAnswer(response)
            .catch(err => {
                toast.error(err.response);
            })


        } catch (error) {
            console.error(error.response.data);
        }
    };
    const [votes, setVotes] = useState(0);

    const handleVote = async (voteType) => {
        try {
            const response = await axios.post(`${API}/questions/${id}/vote`, { voteType });
            const updatedVotes = response.data.votes;
            console.log(updatedVotes);
            setVotes(updatedVotes);
        } catch (error) {
            console.error(error.response.data);
        }
    };

    const checkAuth = () => {
        if (user === null) {
            alert("login or signup to post your answer")
            navigate('/auth')
        } else {
            handleSubmit();
        }
    }

    return (
        <div className='question-detail-page'>

            <div>
                {question && (
                    <div >
                        <section className='question-details-container' key={question._id}>
                            <h1>{question.questionTitle}</h1>
                            <p>{question.views} views</p>
                            <div className='question-details-container-2'>

                                <div style={{ width: "100%" }}>
                                    <p className='question-body'>{question.questionBody}</p>
                                    <div className='question-detail-tag'>
                                        {
                                            question.questionTags.map((tag) => (
                                                <p key={tag} >{tag}</p>
                                            ))
                                        }
                                    </div>
                                    <div className='question-action-user'>
                                        <div>
                                            <button>Share</button>
                                            <button>Delete</button>
                                        </div>
                                        <div>
                                            <p>asked {moment(question.askedOn).fromNow()}</p>
                                            <Link to={`/User/${question.userId}`} className='user-link' style={{ color: "#0086d8" }}>
                                                {/* <Avatar backgroundColor='orange' px='5px' py='6px'>{question.userPosted.charAt(0).toUpperCase()}</Avatar> */}
                                                <div>
                                                    {question.userPosted}
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <h3>{question.answer.length} answer</h3>
                        <section className='ans-container'>
                            <div className='question-votes'>
                              <p>{votes}</p>
                                <IconButton onClick={() => handleVote('upVote')}> <ArrowDropUpIcon /> </IconButton>
                                <p>{question.upVote}</p>
                                <IconButton onClick={() => handleVote('downVote')}> <ArrowDropDownIcon /> </IconButton>

                            </div>
                            <div>
                                <DisplayAnswers key={question.id} question={question} />
                            </div>

                        </section>


                        <section className='post-ans-container'>
                            <h3>Your Answer</h3>
                            <form onClick={handleSubmit}>
                                <textarea name='' cols="30" rows='10' onChange={(e) => setAnswerBody(e.target.value)} value={answerBody}></textarea><br />
                                <input type='submit' className='post-ans-btn' onClick={checkAuth} value="post your answer" />
                            </form>
                            <p>
                                Browse other Question tagged
                                {
                                    question.questionTags.map((tag) => (
                                        <Link to='/Tags' key={tag} className='ans-tag'>{tag}</Link>
                                    ))
                                }or
                                <Link to='/askquestions' style={{ textDecoration: 'none', color: "#009dff" }}> ask your own question </Link>
                            </p>
                        </section>
                    </div>
                )
                }
            </div>


        </div>
    )
}

export default QuestionDetails