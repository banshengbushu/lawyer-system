import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login: React.FunctionComponent = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = () => {
    axios
      .post("http://localhost:8080/login", {
        mobile,
        password
      })
      .then(response => {
        if (response.status === 200) {
          history.push("/homepage");
        }
      })
      .catch(error => {
        throw error;
      });
  };

  return (
    <div className="login-container">
      <div className="login-container__sign-in">
        <h1>Sign in</h1>
        <input
          onChange={e => setMobile(e.target.value)}
          placeholder="Mobile"
          className="login__email login--input"
          type="text"
        />
        <input
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          className="login__password login--input"
          type="text"
        />
        <button onClick={() => onSubmit()} className="login-sign-in__button">
          SIGN IN
        </button>
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
