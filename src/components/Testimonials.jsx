// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-list">
        <div className="testimonial-item">
          <p>"This tool has revolutionized our inventory management!"</p>
          <h4>- Customer 1</h4>
        </div>
        <div className="testimonial-item">
          <p>"We can't imagine running our business without it."</p>
          <h4>- Customer 2</h4>
        </div>
        <div className="testimonial-item">
          <p>"A must-have for any business dealing with inventory."</p>
          <h4>- Customer 3</h4>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
