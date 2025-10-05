import React, { useEffect, useState } from 'react';

const ButterflyReveal = () => {
  const [revealedSections, setRevealedSections] = useState(new Set());
  const [isActive, setIsActive] = useState(false);

  const createMultipleColorSplashes = () => {
    const butterfly = document.querySelector('.butterfly');
    if (!butterfly) return;
    
    const rect = butterfly.getBoundingClientRect();
    const colors = ['#FF8A95', '#FFB366', '#E6E600', '#66CC80', '#66B3FF', '#B366FF', '#FF66D9', '#9966FF'];
    
    // Create 2-3 subtle splashes
    const splashCount = 2 + Math.floor(Math.random() * 2);
    
    for (let i = 0; i < splashCount; i++) {
      const splash = document.createElement('div');
      splash.className = 'subtle-splash';
      splash.style.left = (rect.left + rect.width / 2 + (Math.random() - 0.5) * 30) + 'px';
      splash.style.top = (rect.top + rect.height + Math.random() * 15) + 'px';
      splash.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
      splash.style.setProperty('--delay', (i * 0.15) + 's');
      splash.style.setProperty('--size', (10 + Math.random() * 15) + 'px');
      
      document.body.appendChild(splash);
      
      setTimeout(() => {
        if (splash.parentNode) splash.parentNode.removeChild(splash);
      }, 3000);
    }
  };

  const createInkSplash = (x, y, sectionId) => {
    const colors = ['#FF8A95', '#FFB366', '#E6E600', '#66CC80', '#66B3FF', '#B366FF'];
    
    // Gentle ink splash
    const splash = document.createElement('div');
    splash.className = 'gentle-splash';
    splash.style.left = x + 'px';
    splash.style.top = y + 'px';
    splash.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    
    document.body.appendChild(splash);
    
    // Fewer particles
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('div');
      particle.className = 'gentle-particle';
      const angle = (i / 6) * 360;
      const distance = 25 + Math.random() * 35;
      particle.style.left = (x + Math.cos(angle * Math.PI / 180) * distance) + 'px';
      particle.style.top = (y + Math.sin(angle * Math.PI / 180) * distance) + 'px';
      particle.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) particle.parentNode.removeChild(particle);
      }, 2500);
    }
    
    // Reveal section
    setTimeout(() => {
      setRevealedSections(prev => new Set([...prev, sectionId]));
    }, 300);
    
    setTimeout(() => {
      if (splash.parentNode) splash.parentNode.removeChild(splash);
    }, 2000);
  };

  useEffect(() => {
    const startAnimation = () => {
      setIsActive(true);
      
      const sections = [
        { id: 'hero', delay: 3000, x: window.innerWidth * 0.2, y: window.innerHeight * 0.3 },
        { id: 'about', delay: 7000, x: window.innerWidth * 0.7, y: window.innerHeight * 0.5 },
        { id: 'timeline', delay: 11000, x: window.innerWidth * 0.3, y: window.innerHeight * 0.7 },
        { id: 'skills', delay: 15000, x: window.innerWidth * 0.8, y: window.innerHeight * 0.8 },
        { id: 'projects', delay: 19000, x: window.innerWidth * 0.5, y: window.innerHeight * 0.9 }
      ];

      // Subtle color splash effect
      const dropInterval = setInterval(createMultipleColorSplashes, 250);
      
      // Section reveals
      sections.forEach(({ id, delay, x, y }) => {
        setTimeout(() => createInkSplash(x, y, id), delay);
      });

      // End animation
      setTimeout(() => {
        clearInterval(dropInterval);
        const butterfly = document.querySelector('.butterfly');
        if (butterfly) butterfly.classList.add('exit');
      }, 25000);
    };

    const timer = setTimeout(startAnimation, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'timeline', 'skills', 'projects'];
    
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        if (revealedSections.has(sectionId)) {
          section.classList.add('section-revealed');
        } else {
          section.classList.add('section-hidden');
        }
      }
    });
  }, [revealedSections]);

  return (
    <div className={`butterfly-container ${isActive ? 'active' : ''}`}>
      <div className="butterfly">
        <div className="wing wing-left"></div>
        <div className="wing wing-right"></div>
        <div className="body"></div>
      </div>
    </div>
  );
};

export default ButterflyReveal;