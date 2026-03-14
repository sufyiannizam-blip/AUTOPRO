import './howItWorks.css'
import React from 'react'
import { CarFront } from 'lucide-react';
import { Wrench } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import { CalendarClock } from 'lucide-react';
const HowItWorks = () => {
    
  return (
    <>
      <section className="how-it-works-section">
      <h2 className="main-title">How it Works</h2>
      
      <div className="container">

        <div className="line-divider"></div>

        <div className="steps-row">
          
          {/* Step 1 */}
          <div className="step-box">
            <div className="icon-circle">
              <CalendarClock />
            </div>
            <h3 className="step-heading">Book Appointment</h3>
            <p className="step-text">Schedule online or call us anytime</p>
          </div>

          {/* Step 2 */}
          <div className="step-box">
            <div className="icon-circle">
              <CarFront />
            </div>
            <h3 className="step-heading">Bring Your Car</h3>
            <p className="step-text">Drop it off or use our pick-up service</p>
          </div>

          {/* Step 3 */}
          <div className="step-box">
            <div className="icon-circle">
              <Wrench />
            </div>
            <h3 className="step-heading">We Service It</h3>
            <p className="step-text">Expert care with real-time updates</p>
          </div>

          {/* Step 4 */}
          <div className="step-box">
            <div className="icon-circle">
             <BadgeCheck />
            </div>
            <h3 className="step-heading">Drive Away Safely</h3>
            <p className="step-text">Ready to hit the road with peace of mind</p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default HowItWorks