import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from "react-router-dom"
import { auth } from "./firebase";

function Login() {

    //states hook
    //e.target.value= what user has typed in email box.
    //What happens is now thate.target.value gets mapped to email in const[email,setEmail]
    //we can access that email with email variable inside const[email,setEmail].
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();  // This will prevent the page fro refreshing when press enter.

        // some fancy firebase login

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            navigate('/')
        })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        // some fancy firebase register
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            // it successfully created a new user with email and password
            console.log(auth);
            if (auth) {
                navigate('/')
            }
        })
            .catch(error => alert(error.message));
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>

            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By Signing-In you agree to the AMAZON FAKE CLONE Conditions
                    of Use & Sale. Please see our Privacy Notice, our Cookies Notice
                    and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login