// src/components/Login.js

import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoginMode) {
      handleLogin();
    } else {
      handleSignUp();
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });

      if (response.data.token) {
        navigate("/userlist");
        setMessage("Login successful! Token: " + response.data.token);
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error);
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post("https://reqres.in/api/register", {
        email,
        password,
        name,
      });

      if (response.data.token) {
        setMessage("Sign up successful! Token: " + response.data.token);
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error);
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <h2 className="title">{isLoginMode ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {!isLoginMode && (
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="form-input"
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-btn">
          {isLoginMode ? "Login" : "Sign Up"}
        </button>
        <button
          type="button"
          className="toggle-btn submit-btn"
          onClick={() => setIsLoginMode(!isLoginMode)}
        >
          {isLoginMode ? "Create an account" : "Have an account? Login"}
        </button>
        {message && <div className="message">{message}</div>}
      </form>
    </div>
  );
};

export default Login;
