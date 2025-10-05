import React from 'react';

const Card = ({ children, className = '', hover = true, ...props }) => (
  <div 
    className={`bg-white p-6 rounded-xl shadow-lg border border-gray-200 transition-all duration-300 ${hover ? 'hover:shadow-xl hover:-translate-y-2' : ''} ${className}`}
    {...props}
  >
    {children}
  </div>
);

const StatCard = ({ number, label, delay = 0 }) => (
  <Card className="text-center animate-pulse" style={{animationDelay: `${delay}s`}}>
    <h3 className="text-2xl text-black mb-1 font-light">{number}</h3>
    <p className="text-gray-600 text-sm">{label}</p>
  </Card>
);

const SkillCard = ({ skill, index }) => (
  <Card className="text-center fade-in" style={{animationDelay: `${index * 0.1}s`}}>
    <div className="w-16 h-16 bg-black mx-auto mb-4 flex items-center justify-center hover:scale-110 transition-transform duration-300">
      <i className={`${skill.icon} text-xl text-white`}></i>
    </div>
    <h3 className="text-base text-black font-medium">{skill.name}</h3>
  </Card>
);

export { Card, StatCard, SkillCard };