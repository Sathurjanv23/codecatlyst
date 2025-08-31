import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // make sure firebase.js is in src
import "./Register.css";
import logo from "../assets/logo-sj-combined.svg";

const Register = () => {
  const [email, setEmail] = useState(""); // changed from username
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirm) {
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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Registered user:", userCredential.user);
      setSuccess("Registration successful!");
      setError("");
      setEmail("");
      setPassword("");
      setConfirm("");
    } catch (err) {
      setError(err.message);
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
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
