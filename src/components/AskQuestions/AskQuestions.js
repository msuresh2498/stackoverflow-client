import React, { useState } from 'react';
import './AskQuestions.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import axios from 'axios';
import { API } from '../api';

const AskQuestions = () => {

    const navigate = useNavigate();

    const { handleBlur, handleChange, values, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            questionTitle: "",
            questionBody: "",
            questionTags: "",

        },
        onSubmit: data => {
            axios.post(`${API}/questions/askquestions`, data)
                .then(res => navigate('/')).then(alert("question Added succesfully"))
            console.log(data)
                .catch(err => {
                    toast.error(err.response.data);
                })
        }
    })

    return (
        <div className='ask-question'>
            <div className='ask-qus-container'>
                <h1>Ask a public question</h1>
                <form onSubmit={handleSubmit}>
                    <div className='ask-form-container'>
                        <div className='ask-ques-title'>
                            <h4>Title</h4>
                            <p>Be specific and imagine you're asking a question to another person</p>
                            <input type='text'
                                name='questionTitle'
                                className="question-title"
                                placeholder='e.g. What is the virtual DOM?'
                                onChange={handleChange}
                                value={values.questionTitle}
                                onBlur={handleBlur}
                                error={touched.questionTitle && errors.questionTitle} />
                        </div>
                        <div className='ask-ques-body'>
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer the question</p>
                            <textarea className='question-body'
                                name='questionBody'
                                cols='30' rows='10'
                                onChange={handleChange}
                                value={values.questionBody}
                                onBlur={handleBlur}
                                error={touched.questionBody && errors.questionBody} />
                        </div>
                        <div className='ask-ques-tags'>
                            <h4>Tags</h4>
                            <p>Add up to 5 tags to describe what your question about</p>
                            <input type='text'
                                name='questionTags'
                                className="question-tags"
                                placeholder='e.g. react nodejs express'
                                onChange={handleChange}
                                value={values.questionTags}
                                onBlur={handleBlur}
                                error={touched.questionTags && errors.questionTags} />
                        </div>
                        <button type='submit' className='ask-ques-btn' >Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AskQuestions