import React, { useEffect } from 'react';

const ButterflyColors = () => {
  useEffect(() => {
    const createColorDrop = () => {
      const butterfly = document.querySelector('.butterfly');
      if (!butterfly) return;

      const rect = butterfly.getBoundingClientRect();
      const colors = ['#9B59B6', '#6C5CE7', '#4A90E2', '#74B9FF', '#A29BFE'];
      
      const colorDrop = document.createElement('div');
      colorDrop.className = 'color-drop';
      colorDrop.style.left = (rect.left + rect.width / 2) + 'px';
      colorDrop.style.top = (rect.top + rect.height) + 'px';
      colorDrop.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      document.body.appendChild(colorDrop);
      
      setTimeout(() => {
        if (colorDrop.parentNode) {
          colorDrop.parentNode.removeChild(colorDrop);
        }
      }, 3000);
    };

    const interval = setInterval(createColorDrop, 300);
    
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default ButterflyColors;