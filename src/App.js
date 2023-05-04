import React from "react";
import './App.css';
import OTPGenerator from './components/molecule/OTPGenerator.js'

export default function App() {
  return (
    <div className="home-container">
    <h1>Welcome to our website</h1>
      <OTPGenerator/>
    </div>
  );
}
