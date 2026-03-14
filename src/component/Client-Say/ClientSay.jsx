import "./client-Say.css";
import React from "react";
import profile from "../../assets/testimonialprofile1.webp";
import { Star } from "lucide-react";
const ClientSay = () => {
  return (
    <>
      <div className="Client-Say">
        <div className="Say-hading">
          <h2>What Our Client Say</h2>
        </div>
        <div className="Say-group">
          <div className="Say-card">
            <div className="card-star">
              <span>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
            </div>
            <div>
              <p>
                Best service in the city. They diagnosed a recurring engine
                issue that two other shops missed. Fast, professional, and fair
                pricing.
              </p>
            </div>
            <div className="profile">
              <div>
                <img src={profile} alt="" />
              </div>
              <div>
                <h3>Sarah Jenkins</h3>
                <h5>BMW M3 OWNER</h5>
              </div>
            </div>
          </div>
          {/* 1 cadr */}
          <div className="Say-card">
            <div>
              <span>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
            </div>
            <div>
              <p>
                Best service in the city. They diagnosed a recurring engine
                issue that two other shops missed. Fast, professional, and fair
                pricing.
              </p>
            </div>
            <div className="profile">
              <div>
                <img src={profile} alt="" />
              </div>
              <div>
                <h3>Sarah Jenkins</h3>
                <h5>BMW M3 OWNER</h5>
              </div>
            </div>
          </div>
          {/* 2 card */}
          <div className="Say-card">
            <div>
              <span>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
            </div>
            <div>
              <p>
                Best service in the city. They diagnosed a recurring engine
                issue that two other shops missed. Fast, professional, and fair
                pricing.
              </p>
            </div>
            <div className="profile">
              <div>
                <img src={profile} alt="" />
              </div>
              <div>
                <h3>Sarah Jenkins</h3>
                <h5>BMW M3 OWNER</h5>
              </div>
            </div>
          </div>
          {/* 3 card */}
          <div className="Say-card">
            <div>
              <span>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </span>
            </div>
            <div>
              <p>
                Best service in the city. They diagnosed a recurring engine
                issue that two other shops missed. Fast, professional, and fair
                pricing.
              </p>
            </div>
            <div className="profile">
              <div>
                <img src={profile} alt="" />
              </div>
              <div>
                <h3>Sarah Jenkins</h3>
                <h5>BMW M3 OWNER</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientSay;
