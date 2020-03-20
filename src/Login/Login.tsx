import React from 'react';
import './Login.css';

const Login: React.FunctionComponent = () => {
    return (
        <div className="login-container">
            <div className="login-container__sign-in">
                <h1>Sign in</h1>
                <input placeholder="Email" className="login__email login--input" type="text"/>
                <input placeholder="Password" className="login__password login--input" type="text"/>
                <button className="login-sign-in__button">SIGN IN</button>
            </div>
            <div className="login-container__sign-up">
                <h1>Hello, Friend!</h1>
                <p>Enter your details and start journey with us</p>
                <button className="login-sign-up__button">SIGN UP</button>
            </div>
        </div>
    );
};

export default Login;