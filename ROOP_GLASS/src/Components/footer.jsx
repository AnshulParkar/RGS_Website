import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import './footer.css';  // Change this line - remove "styles from"
import businessCard from '../assets/PlatinumPartner2.png'; // Import the image

const ContactSection = () => {
  return (
    <div className="contactContainer">
      <div className="innerContainer">
        <h2 className="header">Contact Us</h2>
        
        <div className="contentWrapper">
          <div className="contactInfo">
            <div className="contactItem">
              <MapPin className="icon" />
              <span className="contactText">Roop Glass Solution <br />A1 Business Center, 2nd Floor, Sundar Kapoor Compound,<br /> Opp Thakur Mall, Dashisar Check Nakka, Mumbai-401107.</span>
            </div>
            
            <div className="contactItem">
              <Mail className="icon" />
              <span className="contactText">Roopglasss@gmail.com</span>
            </div>
            
            <div className="contactItem">
              <Phone className="icon" />
              <span className="contactText">+91 9320008279</span>
            </div>
          </div>
          
          <div className="cardContainer">
            <div className="card">
                <br />
                <br />
                <br />
                <img 
                    src={businessCard} 
                    alt="Business Card" 
                    className="cardImage" 
                />
            </div>
          </div>
        </div>
          <br />
          <br />
          <br />
          <br />
      </div>
    </div>
  );
};

export default ContactSection;