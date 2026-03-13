import "./navbar.css"
import { Camera } from 'lucide-react';
import { Icon } from 'lucide-react';
import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="nav-group">
        <header className="navbar">
          <div>
            <h2 className="logo">AUTOPRO</h2>
          </div>
          <nav>
            <ul className="nav-text">
              <li>Home</li>
              <li>Servive</li>
              <li>Pricing</li>
              <li>About</li>
              <li>Reviews</li>
            </ul>
          </nav>
          <div>
          <button className="btn">Book Service</button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
