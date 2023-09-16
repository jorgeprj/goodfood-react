import React from 'react'

import '../styles/Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div class="login-page">
            <div class="form">
                <div class="login">
                    <div class="login-header">
                        <h3>LOGIN</h3>
                        <p>Please enter your credentials to login.</p>
                    </div>
                </div>
                <form class="login-form">
                    <input type="text" placeholder="username" />
                    <input type="password" placeholder="password" />
                    <Link to="/"><button>login</button></Link>
                    <p class="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>

    )
}

export default Login