import React from 'react';

const Address = () => {
  return (
    <div style={styles.container}>
      <strong className="mx-auto text-[#FFDA32]">
        © 2024 Copyright: <a href="#">www.adventuresrentaltour.com</a>
      </strong>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#13253F', // Light background color
    textAlign: 'center' // Subtle top border for separation
  },
};

export default Address;
