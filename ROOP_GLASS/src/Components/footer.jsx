import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import './footer.css';  // Change this line - remove "styles from"
import businessCard from '../assets/PlatinumPartner.png'; // Import the image

const ContactSection = () => {
  return (
    <div className="contactContainer">
      <div className="innerContainer">
        <h2 className="header">Contact Us</h2>
        
        <div className="contentWrapper">
          <div className="contactInfo">
            <div className="contactItem">
              <MapPin className="icon" />
              <span className="contactText">ADDRESS</span>
            </div>
            
            <div className="contactItem">
              <Mail className="icon" />
              <span className="contactText">MAIL</span>
            </div>
            
            <div className="contactItem">
              <Phone className="icon" />
              <span className="contactText">+91 0000000000</span>
            </div>
          </div>
          
          <div className="cardContainer">
            <div className="card">
                <img 
                    src={businessCard} 
                    alt="Business Card" 
                    className="cardImage" 
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;