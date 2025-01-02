import React from 'react';
import './footer.css';
import PPartner from '../assets/PlatinumPartner.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h1 className="footer-title">Contact Us</h1>
                <div className="footer-details">
                    <p>Location: Roop Glass Solution <br></br> Borivali East, Mumbai-400068 </p>
                    <p>Mobile Phone: +91 000000000</p>
                    <p>Email: roopglass@gmail.com</p>
                    <img src={PPartner} alt="Visiting Card" />
                </div>
                <div className="CARD">
                </div>
            </div>
        </footer>
    );
};

export default Footer;