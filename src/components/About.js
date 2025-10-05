import React from 'react';
import { StatCard } from './Card';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience', delay: 0 },
    { number: '50+', label: 'Responsive Websites', delay: 0.2 },
    { number: '5', label: 'Core Technologies', delay: 0.4 }
  ];

  const skills = [
    { icon: 'fas fa-mobile-alt', text: 'Responsive Design', animation: 'animate-bounce' },
    { icon: 'fas fa-bolt', text: 'Interactive UIs', animation: 'animate-pulse' },
    { icon: 'fas fa-cloud', text: 'AWS Integration', animation: 'animate-bounce' },
    { icon: 'fas fa-code', text: 'Modern JavaScript', animation: 'animate-pulse' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="section-title fade-in">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Frontend Developer II with 3+ years creating responsive & interactive websites. 
              Specialized in React, JavaScript, and modern web technologies.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-8">
              {stats.map((stat, i) => <StatCard key={i} {...stat} />)}
            </div>
            <div className="grid grid-cols-2 gap-5">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-4 p-4 border border-black transition-all duration-500 cursor-pointer hover:bg-black hover:text-white hover:translate-x-3 hover:scale-105 hover:rotate-1">
                  <i className={`${skill.icon} text-lg w-5 ${skill.animation}`}></i>
                  <span className="text-sm font-medium uppercase tracking-wider">{skill.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fade-in flex justify-center items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 animate-pulse"></div>
              <img 
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHc4dGZkMzBkZGNkNWJkZGNkNWJkZGNkNWJkZGNkNWJkZGNkNWJkZGNkNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZVik7pBtu9dNS/giphy.gif" 
                alt="Shreya - 3D Character" 
                className="animated-image relative transform hover:scale-105 transition-all duration-500 hover:rotate-1 shadow-2xl rounded-lg"
              />
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">Active Developer</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;