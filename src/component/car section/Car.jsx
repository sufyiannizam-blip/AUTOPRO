import "./car.css";
import carImg from "../../assets/Image.webp";
import { ShieldCheck } from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import { Timer } from "lucide-react";
import { Banknote } from "lucide-react";
import { ChevronRight } from "lucide-react";
import React from "react";

const Car = () => {
  return (
    <>
      <div className="car-section">
        <div className="car-card">
          <div className="car-hading">
            <h3>
              <spa>THE AUTO PRO ADVANTAGE</spa>
            </h3>
            <h1>Why Choose Us For Your Car?</h1>
          </div>
          <div className="car-group">
            <div className="card">
              <div>
                <span>
                  <ShieldCheck />
                </span>
              </div>
              <div>
                <h3>Certified Technicians</h3>
                <p>
                  ASE-certified experts with deep technical knowledge across all
                  brands.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="right">
                <span>
                  <Timer />
                </span>
              </div>
              <div>
                <h3>Fast Turnaround</h3>
                <p>
                  Quick repairs and maintenance without sacrificing quality.
                </p>
              </div>
            </div>
          </div>
          <div className="car-group">
            <div className="card">
              <div>
                <span>
                  <ClipboardCheck />
                </span>
              </div>
              <div>
                <h3>Genuine Spare Parts</h3>
                <p>
                  We only use original manufacturer parts for safety and
                  longevity.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="right">
                <span>
                  <Banknote />
                </span>
              </div>
              <div>
                <h3>Affordable Pricing</h3>
                <p>
                  We only use original manufacturer parts for safety and
                  longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="car-img">
          <img src={carImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Car;
