import React, { useState } from 'react';
import { X } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CallbackOverlay = ({ isOpen, onClose }) => {
    const [isOverlayOpen, setIsOverlayOpen] = useState(true);

    if (!isOverlayOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;

        try {
            const response = await fetch('http://localhost/handleCallback.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({ name, phone, message })
            });

            const result = await response.text();
            alert(result);
            if (response.ok) onClose();
        } catch (error) {
            alert('Error submitting form');
        }
    };

    return (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50" style={{ zIndex: 1000 }}>
            <div className="bg-white p-4 rounded shadow w-100" style={{ maxWidth: '400px', position: 'relative' }}>
                <button
                    onClick={() => { setIsOverlayOpen(false); onClose(); }}
                    className="btn-close position-absolute top-0 end-0 m-2"
                />

                <div className="text-center">
                    <h2 className="fw-bold mb-3">Request Callback</h2>

                    <form onSubmit={handleSubmit} className="d-flex flex-column">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            className="form-control mb-3"
                            required
                        />
                        
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter Mobile Number"
                            className="form-control mb-3"
                            required
                        />

                        <textarea
                            name="message"
                            placeholder="Enter Your Message"
                            className="form-control mb-3"
                        ></textarea>

                        <button type="submit" className="btn btn-primary w-100">
                            SUBMIT
                        </button>
                    </form>

                    <p className="mt-3 text-secondary">
                        Our team will contact you soon.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CallbackOverlay;
