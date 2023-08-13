import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Reset password logic here
  };

  return (
    <>
      <Header />
      <div className="auth-form">
        <h1>Forgot Password</h1>
        <form>
          <input
            type="email"
            value={email}
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="button" onClick={handleResetPassword} disabled>Reset Password</button>
        </form>
        <p>
          Retry Login Again? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default ForgotPassword;
