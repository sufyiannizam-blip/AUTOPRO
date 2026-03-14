import React from 'react'
import './booking.css'
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Calendar } from 'lucide-react';
const Booking = () => {
  return (
    <>
      <div className="booking-container">
      <div className="booking-card">
        
        {/* Left Side */}
        <div className="info-panel">
          <h1>Ready to Book</h1>
          <p>
            Fill out the form and our team will confirm your appointment within 30 minutes during business hours.
          </p>
          
          <div className="contact-details">
            <div className="detail-item"><Phone size={16}/> +92 335034189</div>
            <div className="detail-item"><Mail size={16}/> autopro@gmail.com</div>
            <div className="detail-item"><MapPin size={16}/> 123 Mechanic Way, Auto City</div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="form-panel">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-row">
              <div className="input-container">
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-container">
                <input type="email" placeholder="Email" />
              </div>
            </div>

            <div className="input-row">
              <div className="input-container">
                <select>
                  <option>Service Type</option>
                  <option>Engine Repair</option>
                  <option>Oil Change</option>
                </select>
              </div>
              <div className="input-container">
                <span className="floating-label">Select Date & Time</span>
                <input type="text" defaultValue="04/17/2022 03:30 PM" />
                <Calendar className="icon-inside" />
              </div>
            </div>

            <div className="input-row">
              <div className="input-container">
                <input type="text" placeholder="Car Name" />
              </div>
              <div className="input-container">
                <input type="text" placeholder="Car Model" />
              </div>
            </div>

            <button type="submit" className="confirm-btn">
              Confirm Booking
            </button>
          </form>
        </div>

      </div>
    </div>
    </>
  )
}

export default Booking
