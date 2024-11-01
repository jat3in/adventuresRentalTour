import React from 'react';

const PhoneButton = () => {
    return (
    <a
      href="tel:+91-7005204786"
      style={{
        position: 'fixed',
        bottom: '90px', // Adjusted to be above WhatsApp button (typically at 20px bottom)
        right: '20px',
        backgroundColor: '#1180FF', // Phone icon background color, feel free to change
        padding: '15px',
        borderRadius: '50%',
        cursor: 'pointer',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000, // Ensure the button is on top of other content
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1v3.56c0 .55-.45 1-1 1C10.07 21.27 2.73 13.93 2.73 4c0-.55.45-1 1-1H7.3c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
      </svg>
    </a>
  );
};

export default PhoneButton;
