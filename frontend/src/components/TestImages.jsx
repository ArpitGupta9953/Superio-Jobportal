// TestImages.jsx - Quick working version
import React from 'react';

const TestImages = () => {
  return (
    <div style={{padding: '20px'}}>
      <h2>Working Images:</h2>
      
      <img 
        src="https://via.placeholder.com/150/0000FF/FFFFFF?text=Logo" 
        alt="Placeholder Logo" 
        style={{width: '100px', margin: '10px'}}
      />
      
      <img 
        src="https://via.placeholder.com/150/FF0000/FFFFFF?text=Icon" 
        alt="Placeholder Icon" 
        style={{width: '100px', margin: '10px'}}
      />
    </div>
  );
};

export default TestImages;
