import React, { useEffect, useState } from 'react';

const ParallaxEffect = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-container">
      {/* 3D Floating Elements */}
      <div 
        className="parallax-element floating-cube"
        style={{
          transform: `translateY(${scrollY * 0.1}px) rotateX(${scrollY * 0.05}deg) rotateY(${scrollY * 0.1}deg)`
        }}
      />
      <div 
        className="parallax-element floating-sphere"
        style={{
          transform: `translateY(${scrollY * -0.15}px) rotateZ(${scrollY * 0.08}deg)`
        }}
      />
      <div 
        className="parallax-element floating-pyramid"
        style={{
          transform: `translateY(${scrollY * 0.2}px) rotateX(${scrollY * -0.1}deg)`
        }}
      />
      
      {/* Animated Grid Lines */}
      <div 
        className="grid-lines"
        style={{
          transform: `translateY(${scrollY * 0.05}px) perspective(1000px) rotateX(${Math.min(scrollY * 0.02, 45)}deg)`
        }}
      />
      
      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="floating-particle"
          style={{
            left: `${10 + (i * 6)}%`,
            animationDelay: `${i * 0.2}s`,
            transform: `translateY(${scrollY * (0.05 + i * 0.01)}px)`
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxEffect;