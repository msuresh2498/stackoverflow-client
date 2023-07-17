import React, { useContext, useEffect, useState } from 'react'
import './HomeMainbar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import QuestionList from './QuestionList'
import { API } from '../api'
import { UserContext } from '../Auth/Authorization'

const HomeMainbar = () => {

  const { user } = useContext(UserContext);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(`${API}/questions/questionslist`, {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error('Error fetching questions:', error));
  }, [])




  const location = useLocation()
  const navigate = useNavigate()

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question")
      navigate('/auth')
    } else {
      navigate('/askquestions')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Question</h1> : <h1>All Question</h1>
        }
        <button onClick={checkAuth} className='ask-btn'>Ask Questions</button>
      </div>
      <div>
        {
          questions === null ? <h1>Loading..</h1> :
            <div>
              <p>{questions.length} Questions</p>
              {questions.map((question) => (
                <QuestionList key={question._id} question={question} />
              ))
              }

            </div>

        }
      </div>
    </div>
  )
}

export default HomeMainbar