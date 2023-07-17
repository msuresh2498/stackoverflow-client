import React from 'react';
import './Auth.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { API } from '../api/index';

const formValidationSchema = Yup.object({
  name: Yup.string().max(25).required("name is Required🙂"),
  email: Yup.string().min(6).required("Email is Required🙂"),
  password: Yup.string().min(8).required("Need bigger Password🙂"),
});

const Auth = () => {
  const navigate = useNavigate();

  const { handleBlur, handleChange, values, touched, errors, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",

    },
    //User Registration
    validationSchema: formValidationSchema,
    onSubmit: data => {
      axios.post(`${API}/user/signup`, data)
        .then(res => navigate('/')).then(alert("Register succesfully"))
      console.log(data)
        .catch(err => {
          toast.error(err.response.data);
        })
    }
  })



  return (
    <div>
      <section className='auth-section'>
        {<AboutAuth />}
        <div className='auth-container'>
          <form className='auth-form' onSubmit={handleSubmit}>
            <div className='auth-display'>
              <label className='auth-label'>Display name</label>
              <input className='auth-textfield'
                type='text'
                name='name'
                onChange={handleChange}
                value={values.name}
                onBlur={handleBlur}
                error={touched.name && errors.name}
              />
            </div>

            <label className='auth-label'>Email</label>
            <input className='auth-textfield' type='email' name='email'
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              error={touched.email && errors.email}
            />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <label className='auth-label'>Password</label>
            </div>
            <input className='auth-textfield' type='password' name='password'
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              error={touched.password && errors.password}
            />
            <p style={{ color: "#666767", fontSize: "13px" }}>
              Passwords must contain at least eight characters,<br /> including at least 1 letter and 1 number.
            </p>
            <div className='auth-checkbox'>
              <input type='checkbox' className='check-box' />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional product updates, user research invitations, company announcements, and digests.
              </p>
            </div>
            <Button type='submit' className='auth-btn'>Sign Up</Button>
          </form>
          <p style={{ fontSize: "13px" }}>
            Alredy have an account?
            <Button type='submit' className='handle-swich-btn' onClick={() => navigate('/login')}>Log in</Button>
          </p>
          <p style={{ color: "#666767", fontSize: "13px" }}>
            By clicking “Sign up”, you agree to our
            <span style={{ color: "#007ac6" }}>terms of service</span>,
            <span style={{ color: "#007ac6" }}>privacy policy</span>
            and <span style={{ color: "#007ac6" }}>cookie policy</span></p>

        </div>
      </section>
    </div>
  )
}

export default Auth;


export const AboutAuth = () => {
  return (
    <div className='auth-container-1'>
      <h1>Join the Stack Overflow community</h1>
      <p>Get unstuck — ask a question</p>
      <p>Unlock new privileges like voting and commenting</p>
      <p>Save your favorite tags, filters, and jobs</p>
      <p>Earn reputation and badges</p>
      <p style={{ fontSize: "13px", color: "#666767" }}>Collaborate and share knowledge with a private group for FREE.</p>
      <p style={{ fontSize: "13px", color: "#007ac6" }}>Get Stack Overflow for Teams free for up to 50 users.</p>
    </div>
  )
}