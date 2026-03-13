import React from "react";
import "./hero.css";
import imges from "../../assets/ImageBackgroundBorderShadow.webp";
import { History } from "lucide-react";
import { CalendarFold } from "lucide-react";
import { CircleCheck } from "lucide-react";
const Hero = (props) => {
  return (
    <>
      <div className="hero-section">
        <div className="text-group">
          <div className="hero-btn">
            <button className="btf">
              Certified Mechanics
              <div>
                <CircleCheck />
              </div>
            </button>
            <button className="btd">
              10+ YEARS EXPERIENCE
              <div>
                <History />
              </div>
            </button>
          </div>
          <div className="hero-text">
            <h1>Reliable Car Service</h1>
            <h1>
              <span>& Auto Repair</span>
            </h1>
          </div>
          <div className="hero-peragraf">
            <p>
              Professional maintenance and repair services for all car brands.
              Experience dealer-level precision at local workshop prices.
            </p>
          </div>
          <div className="hero-btn">
            <button className="btf">
              Book Appointment
              <div>
                <CalendarFold />
              </div>
            </button>
            <button className="btd">Get Free Quote</button>
          </div>
        </div>

        <div>
          <img src={imges} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
