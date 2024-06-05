// src/components/Features.js
import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <div className="feature-list">
        <div className="feature-item">
          <h3>Feature 1</h3>
          <p>Feature 1 description.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 2</h3>
          <p>Feature 2 description.</p>
        </div>
        <div className="feature-item">
          <h3>Feature 3</h3>
          <p>Feature 3 description.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
    