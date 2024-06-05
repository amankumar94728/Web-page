// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">CleverBooks</div>
      <nav className="nav">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
