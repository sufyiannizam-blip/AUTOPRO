import "./card.css";
import { Droplet } from 'lucide-react';
import React from "react";
import { Video } from 'lucide-react';
import { Car } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Target } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Scan } from 'lucide-react';
const Card = () => {
  return (
    <>
      <div className="card-section">
        <div className="card-hading">
          <h2>
            <span>Our Specialization</span>
          </h2>
          <h1>Premium Auto Services</h1>
          <p>
            We provide a full range of automotive solutions using
            state-of-the-art diagnostic equipment and 
            <p>genuine manufacturer
            parts.</p>
          </p>
        </div>
        <div className="card-group">
          <div className="card">
            <div><span><Droplet /></span></div>
            <div>
              <h3>Oil Change</h3>
              <p>
                Complete synthetic or conventional oil and filter replacement to
                keep your pengine running smoothly.
              </p>
            </div>

            <div><span className="right">Learn More <div><ChevronRight /></div></span></div>
          </div>
          <div className="card">
            <div><span><Scan /></span></div>
            <div>
              <h3>Engine Diagnostics</h3>
              <p>Advanced computer scanning to pinpoint performance issues and sensor failures with 100% accuracy.</p>
            </div>

            <div><span className="right">Learn More <div><ChevronRight /></div></span></div>
          </div>
          <div className="card">
            <div className="right"><span><Target /></span></div>
            <div>
              <h3>Brake Repair</h3>
              <p>Full inspection and replacement of pads, rotors, and fluid to ensure your safety on every journey.</p>
            </div>

            <div><span className="right">Learn More <div><ChevronRight /></div></span></div>
          </div>
        </div>
        <div className="card-group">

          <div className="card">
            <div><span><Video /></span></div>
            <div>
              <h3>Oil Change</h3>
              <p>
                Complete synthetic or conventional oil and filter replacement to
                keep your pengine running smoothly.
              </p>
            </div>

            <div><span className="right">Learn More <div><ChevronRight /></div></span></div>
          </div>
          <div className="card">
            <div><span><Car /></span></div>
            <div>
              <h3>Engine Diagnostics</h3>
              <p>Advanced computer scanning to pinpoint performance issues and sensor failures with 100% accuracy.</p>
            </div>

            <div><span className="right">Learn More <div><ChevronRight /></div></span></div>
          </div>
          <div className="card">
            <div className="right"><span><Zap /></span></div>
            <div>
              <h3>Brake Repair</h3>
              <p>Full inspection and replacement of pads, rotors, and fluid to ensure your safety on every journey.</p>
            </div>

            <div><span className="right">Learn More <div><ChevronRight /></div></span></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
