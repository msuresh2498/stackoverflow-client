import { Alert } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API } from '../api';

const PasswordReset = () => {
    const { id, token } = useParams();
    const navigate = useNavigate();

    const history = useNavigate();

    const [password, setPassword] = useState("");

    const [message, setMessage] = useState("");

    const userValid = async () => {
        const res = await fetch(`${API}/user/forgotpassword/${id}/${token}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json()

        if (data.status === 201) {
            console.log("user valid")
        } else {
            history("*")
        }
    }


    const setval = (e) => {
        setPassword(e.target.value)
    }

    const sendpassword = async (e) => {
        e.preventDefault();

        const res = await fetch(`${API}/user/${id}/${token}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ password })
        });

        const data = await res.json()

        if (data.status === 201) {
            setPassword("")
            setMessage(true)
            navigate('/login')
        } else {
            toast.error("!Token Expired generate new LInk", {
                position: "top-center"
            })
        }

    }

    useEffect(() => {
        userValid()
    },)
    return (
        <div>
            <section className='auth-section'>
                <div className='auth-container'>
                    <img src='https://cdn.iconscout.com/icon/free/png-512/stack-overflow-3771074-3147691.png?f=avif&w=256' alt='stack over flow' className='login-logo' />
                    <form className='auth-form' >
                        {message ? <Alert severity="success" className='reset-msg'>Password Succesfully Updated</Alert> : null}
                        <label className='auth-label'>Enter Your New Password</label>
                        <input className='auth-textfield' type='email' name='email'
                            onChange={setval}
                            value={password}
                        />
                        <Button type='submit' className='auth-btn' onClick={sendpassword} >Log in</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default PasswordReset