import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-blue-500/20 dark:border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © 2025 Shreya. Built with <i className="fab fa-react text-blue-500 dark:text-cyan-400 mx-1"></i> React & 
          <i className="fas fa-heart text-red-500 mx-1"></i> by Frontend Developer II
        </p>
      </div>
    </footer>
  );
};

export default Footer;