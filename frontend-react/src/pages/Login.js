import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../assets/logo-sj-combined.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    setError("");
    try {
      const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.status === "success") {
        setError("");
        alert("Login successful!");
        // Optionally redirect or store user info
      } else {
        setError(data.message || "Login failed.");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <>
      <div className="page login-page">
        <div className="login-logo-container" style={{textAlign: 'center', marginBottom: '1.5em'}}>
          <img src={logo} alt="Boarding Finder Logo" style={{height: '70px', borderRadius: '12px', boxShadow: '0 2px 8px #0002'}} />
        </div>
        <div className="login-container">
          <h2>Owner Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
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
            <button type="submit">Login</button>
          </form>
          {error && <div className="error">{error}</div>}
          <div className="login-links" style={{display: 'flex', justifyContent: 'center', gap: '1em', marginTop: '2em'}}>
            <Link to="/">Back</Link>
            <Link to="/register">Don't have an account? Register</Link>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
