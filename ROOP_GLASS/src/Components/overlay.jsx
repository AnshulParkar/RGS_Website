import React, { useState } from 'react';
import { X } from 'lucide-react';
import './overlay.css';

const CallbackOverlay = ({ isOpen, onClose }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(true);

    // useEffect(() => {
    //     if (isOpen) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }

    //     return () => {
    //         document.body.style.overflow = 'auto';
    //     };
    // }, [isOverlayOpen]);
    if(!isOverlayOpen) return null;

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     alert('Form submitted! This is where you would handle the callback request.');
    // };

    // const handleGoogleSignIn = () => {
    //     alert('Google Sign-in clicked! Implement your OAuth logic here.');
    // };

    // if (!isOpen) return null;

    // try {
    //     const response = await fetch('http://localhost:173/roopglass', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ name, phone })
    //     });

    //     if (response.ok) {
    //         alert('Form submitted successfully!');
    //         onClose();
    //     } else {
    //         alert('Failed to submit form');
    //     }
    // } catch (error) {
    //     alert('Error submitting form');
    // }
// };
const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    try {
        const response = await fetch('http://localhost/handleCallback.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                name: name,
                phone: phone,
                message: message
            })
        });

        const result = await response.text();
        alert(result);
        if (response.ok) {
            onClose();
        }
    } catch (error) {
        alert('Error submitting form');
    }
};
    return (
        <div className="overlay">
            <div className="overlay-content">
                <button 
                    onClick={() => {
                        setIsOverlayOpen(false);
                        onClose();
                    }}
                    className="close-button"
                >
                    <X size={22} />
                </button>

                <div className="form-container">
                    <h2 className="form-title">Request Callback</h2>
                    
                    <form onSubmit={handleSubmit} className="form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            className="input"
                            required
                        />
                        
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter Mobile Number"
                            className="input"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Enter Your Message"
                            className="input"
                        ></textarea>
                        
                        <button
                            type="submit"
                            className="submit-button"
                        >
                            SUBMIT
                        </button>
                    </form>

                    <p className="form-footer">
                        Our team will contact you soon.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CallbackOverlay;
