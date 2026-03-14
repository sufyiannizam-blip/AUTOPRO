import React from 'react'
import './footer.css'
import { Phone } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Toolbox } from 'lucide-react';
import { Share2 } from 'lucide-react'
const Footer = () => {
  return (
    <>
      <footer className="footer-container">
      <div className="footer-content">
        
        {/* Logo & Description */}
        <div className="footer-logo-section">
          <h2><Toolbox style={{color: '#f23d4d'}} /> AUTOPRO</h2>
          <p>
            Expert automotive care you can trust. Since 2014, providing high-quality repairs with transparency and precision.
          </p>
          <div className="social-icons">
            <Share2 cursor="pointer" />
            <Globe cursor="pointer" />
            <MessagesSquare cursor="pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#service">Service</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact-section">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <MapPin />
            <span>123 Mechanic Way, Auto District, <br/>New York</span>
          </div>
          <div className="contact-item">
            <Phone />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="contact-item">
            <Mail />
            <span>info@autopro.com</span>
          </div>
        </div>

        {/* Map Section */}
        <div className="footer-map-section">
          <div className="map-container">
            {/* Google Map Embed (Placeholder) */}
            <iframe 
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14468.914282361406!2d67.0708!3d24.9608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDU3JzM4LjkiTiA2N8KwMDQnMTQuOSJF!5e0!3m2!1sen!2s!4v1647520000000!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </footer>
    </>
  )
}

export default Footer
