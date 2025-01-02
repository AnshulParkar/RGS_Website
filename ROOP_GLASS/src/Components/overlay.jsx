import React, { useState } from 'react';
import { X } from 'lucide-react';
import './overlay.css';

const CallbackOverlay = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted! This is where you would handle the callback request.');
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-in logic here
    alert('Google Sign-in clicked! Implement your OAuth logic here.');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#001C3D] text-white rounded-lg p-6 w-full max-w-md relative">
        {/* Logo placement */}
        <div className="absolute top-6 left-6">
          <img 
            src="/api/placeholder/120/40" 
            alt="Company Logo" 
            className="h-10 w-auto"
          />
        </div>

        {/* Close button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <X size={24} />
        </button>

        <div className="mt-16">
          <h2 className="text-xl font-bold mb-6 text-center">Request Callback</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-2 rounded bg-white text-gray-900"
              required
            />
            
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="w-full p-2 rounded bg-white text-gray-900"
              required
            />
            
            <textarea
              placeholder="Enter Your Message"
              className="w-full p-2 rounded bg-white text-gray-900 h-24"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
            >
              SUBMIT
            </button>
          </form>

          <div className="mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full bg-white text-gray-900 py-2 rounded hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <img 
                src="/api/placeholder/20/20" 
                alt="Google Logo" 
                className="w-5 h-5"
              /> 
              Sign in with Google
            </button>
          </div>

          <p className="text-center mt-4 text-sm">
            Our team will contact you soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallbackOverlay;