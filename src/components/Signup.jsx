import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Noty from "noty";
import 'noty/lib/noty.css';
import "noty/lib/themes/semanticui.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Noty js notification
  const successNoty = new Noty({
    text: "Logout Successful!",
    type: "success",
    theme: "semanticui",
    timeout: 3000,
  });
  const errorNoty = new Noty({
    text: "Error, Try again!",
    type: "error",
    theme: "semanticui",
    timeout: 3000,
  });

  const handleSignup = async () => {
    try {
      // Send a POST request to the server with email and password
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/signup`, {
        email,
        password,
      });

      // Redirect to the login page after successful sign-up
      successNoty.show();
      window.location.href = "/login";
    } catch (error) {
      // If sign-up fails, print the error
      errorNoty.show();
      console.error("Sign-up failed:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="auth-form">
        <h1>Sign Up</h1>
        <form>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleSignup}>Sign Up</button>
        </form>
        <p>
          Already a user? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
