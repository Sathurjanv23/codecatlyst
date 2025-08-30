import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../assets/logo-sj-combined.svg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password || !confirm) {
      setError("All fields are required.");
      setSuccess("");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("");
    try {
      const res = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email: username + "@example.com" })
      });
      const data = await res.json();
      if (data.status === "success") {
        setSuccess("Registration successful!");
        setError("");
      } else {
        setError(data.message || "Registration failed.");
        setSuccess("");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
      setSuccess("");
    }
  };

  return (
    <div className="page register-page">
      <div className="register-logo-container" style={{textAlign: 'center', marginBottom: '1.5em'}}>
        <img src={logo} alt="Boarding Finder Logo" style={{height: '70px', borderRadius: '12px', boxShadow: '0 2px 8px #0002'}} />
      </div>
      <div className="register-container">
        <h2>Owner Registration</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            required
          />
          <button type="submit">Register</button>
        </form>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}
        <div className="register-links" style={{display: 'flex', gap: '1em', alignItems: 'center', marginTop: '1.5em'}}>
          <Link to="/" className="back-btn">Back</Link>
          <Link to="/login" className="login-btn">Already have an account? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
