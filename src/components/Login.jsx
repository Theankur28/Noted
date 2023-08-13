import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Noty from "noty";
import 'noty/lib/noty.css';
import "noty/lib/themes/semanticui.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Noty js notification
  const successNoty = new Noty({
    text: "Login Successful!",
    type: "success",
    theme: "semanticui",
    timeout: 3000,
  });
  const errorNoty = new Noty({
    text: "Incorrect email or password!",
    type: "error",
    theme: "semanticui",
    timeout: 3000,
  });

  const handleLogin = async () => {
    try {
      // Send a POST request to the server with email and password
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/login`, {
        email,
        password,
      });

      // If login is successful, the server will send back a token and userId in the response
      const token = response.data.token;
      const userId = response.data.userId;

      // Save the token in local storage or a cookie for future authenticated requests
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);

      // Redirect to the home page 
      successNoty.show();
      window.location.href = "/home";
    } catch (error) {
      // If login fails, show the error
      errorNoty.show();
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="auth-form">
        <h1>Login</h1>
        <form>
          <input
            type="email"
            value={email}
            placeholder="user@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="user123"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
        <div className="links">
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <p>
            Forgot your password? <Link to="/forgotpass">Reset</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
