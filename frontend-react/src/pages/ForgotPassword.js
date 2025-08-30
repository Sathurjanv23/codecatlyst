import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import logo from "../assets/logo-sj-combined.svg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }
    setMessage("If this email is registered, a password reset link will be sent (demo).");
  };

  return (
    <div className="page forgot-password-page">
      <div className="forgot-logo-container" style={{textAlign: 'center', marginBottom: '1.5em'}}>
        <img src={logo} alt="Boarding Finder Logo" style={{height: '70px', borderRadius: '12px', boxShadow: '0 2px 8px #0002'}} />
      </div>
      <div className="forgot-container">
        <h2>Forgot Password</h2>
        <form className="forgot-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
        {message && <div className="info">{message}</div>}
        <div className="forgot-links">
          <Link to="/">Back</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
