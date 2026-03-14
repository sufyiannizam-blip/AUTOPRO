import './pricing.css'
import React from 'react'
import { CircleCheck } from 'lucide-react';

const Pricing = () => {
  return (
    <>
    <div className='Service-Packages-group'>
      <div className="Packages">
          <span>
            <h3>CLEAR & SIMPLE</h3>
          </span>
          <h2>Service Packages</h2>
        </div>
      <section className="pricing-section">
        
      <div className="pricing-container">
        
        {/* Card 1: Basic */}
        <div className="price-card">
          <h3 className="plan-name">Basic Maintenance</h3>
          <div className="price-tag">
            <span className="dollar">$</span>
            <span className="amount">99</span>
            <span className="per">/service</span>
          </div>
          <ul className="features">
            <li><CircleCheck className="icon red" /> Oil & Filter Change</li>
            <li><CircleCheck className="icon red" /> 25-Point Inspection</li>
            <li><CircleCheck className="icon red" /> Fluid Level Top-up</li>
            <li className="disabled"><CircleCheck className="icon" /> Brake Calibration</li>
          </ul>
          <button className="outline-btn">Select Plan</button>
        </div>

        {/* Card 2: Popular Choice (Standard) */}
        <div className="price-card popular">
          <div className="badge">POPULAR CHOICE</div>
          <h3 className="plan-name">Standard Service</h3>
          <div className="price-tag">
            <span className="dollar">$</span>
            <span className="amount">199</span>
            <span className="per">/service</span>
          </div>
          <ul className="features">
            <li><CircleCheck className="icon red" /> Everything in Basic</li>
            <li><CircleCheck className="icon red" /> Computer Diagnostics</li>
            <li><CircleCheck className="icon red" /> Brake Inspection</li>
            <li><CircleCheck className="icon red" /> Tire Rotation</li>
          </ul>
          <button className="filled-btn">Select Plan</button>
        </div>

        {/* Card 3: Premium */}
        <div className="price-card">
          <h3 className="plan-name">Premium Full Service</h3>
          <div className="price-tag">
            <span className="dollar">$</span>
            <span className="amount">349</span>
            <span className="per">/service</span>
          </div>
          <ul className="features">
            <li><CircleCheck className="icon red" /> Everything in Standard</li>
            <li><CircleCheck className="icon red" /> Full Interior Detail</li>
            <li><CircleCheck className="icon red" /> Spark Plug Replacement</li>
            <li><CircleCheck className="icon red" /> Road Safety Testing</li>
          </ul>
          <button className="outline-btn">Select Plan</button>
        </div>

      </div>
    </section>
    </div>
    </>
  )
}

export default Pricing
