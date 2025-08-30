import React, { useEffect, useState } from "react";
import logo from "../assets/logo-sjb.svg";
import "./Loader.css";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 400);
          return 100;
        }
        return p + 10;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-bg">
      <div className="loader-content">
        <img src={logo} alt="Boarding Finder Logo" className="loader-logo" />
        <div className="loader-bar">
          <div className="loader-bar-inner" style={{ width: `${progress}%` }} />
        </div>
        <div className="loader-text">Loading... {progress}%</div>
      </div>
    </div>
  );
};

export default Loader;
