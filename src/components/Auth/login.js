import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import axios from 'axios';
import { API } from '../api';

const formValidationSchema = Yup.object({
    email: Yup.string().min(6).required("Email is Required🙂"),
    password: Yup.string().min(8).required("Need bigger Password🙂"),
});

const Login = () => {

 const [user, setUser] = useState();
    const navigate = useNavigate();

    const { handleBlur, handleChange, values, touched, errors, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        //Login Authendication
        validationSchema: formValidationSchema,
        onSubmit: async (data) => {
            await axios.post(`${API}/user/login`, data)
                .then(res => {
                    localStorage.setItem('token', res.data.token);
                    alert('login successfully')
                    console.log(res.data.userId)
                    const id = res.data.userId
                    navigate(`/userinfo/${id}`)
                    setUser(data)
                })
                .catch(err => {
                    toast.error(err.response.data)
                })

        },
    })
    
    return (
        <div>
            <section className='auth-section'>
                <div className='auth-container'>
                    <img src='https://cdn.iconscout.com/icon/free/png-512/stack-overflow-3771074-3147691.png?f=avif&w=256' alt='stack over flow' className='login-logo' />
                    <form className='auth-form' onSubmit={handleSubmit} >
                        <label className='auth-label'>Email</label>
                        <input className='auth-textfield' type='email' name='email'
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            error={touched.email && errors.email}
                        />

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <label className='auth-label'>Password</label>
                            <p style={{ color: "#007ac6", fontSize: "13px", cursor: "pointer" }}
                                onClick={() => navigate('/forgotpassword')}>Forgot Password?</p>
                        </div>
                        <input className='auth-textfield' type='password' name='password'
                            onChange={handleChange}
                            value={values.password}
                            onBlur={handleBlur}
                            error={touched.password && errors.password}
                        />

                        <Button type='submit' className='auth-btn' >Log in</Button>
                    </form>
                    <p style={{ fontSize: "13px" }}>
                        Don't have an account
                        <Button type='submit' className='handle-swich-btn' onClick={() => navigate('/auth')} >Sign Up</Button>
                    </p>

                </div>
            </section >
            {/* <UserProfile  user={user}/> */}
        </div >
    )
}

export default Login