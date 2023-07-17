import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { API } from '../api';
import { Alert } from '@mui/material';
import { Button } from 'react-bootstrap';


const Forgotpassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendLink = async (e) => {
        e.preventDefault();

        const res = await fetch(`${API}/user/sendpasswordlink`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        const data = await res.json();
        console.log(data)

        if (data.status === 201) {
            setEmail("");
            setMessage(true)
        } else {
            toast.error("Invalid User")
        }
    }
    return (
        <div>
            <section className='auth-section'>
                <div className='auth-container'>
                    <img src='https://cdn.iconscout.com/icon/free/png-512/stack-overflow-3771074-3147691.png?f=avif&w=256' alt='stack over flow' className='login-logo' />
                    <form className='auth-form' >
                        {message ? <Alert severity="success" className='reset-msg'>Password Reset link send Successfully in Your Email</Alert> : null}
                        <label className='auth-label'>Enter Your Email</label>
                        <input className='auth-textfield' type='email' name='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button type='submit' className='auth-btn' onClick={sendLink} >Log in</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Forgotpassword