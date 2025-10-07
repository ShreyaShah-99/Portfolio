import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'py-3 shadow-lg shadow-blue-500/20 dark:shadow-cyan-500/20' : 'py-4'} border-b border-blue-500/30 dark:border-cyan-500/30`}>
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <div className={`nav-brand flex items-center gap-3 cursor-pointer transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="logo">
            <i className="fas fa-heart text-2xl text-blue-600 dark:text-cyan-400 hover:text-blue-500 dark:hover:text-cyan-300 transition-colors duration-300"></i>
          </div>
          <span className="text-gray-900 dark:text-white font-medium text-lg tracking-wide">It's Me</span>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-gray-600 dark:text-gray-300 font-normal transition-colors duration-300 tracking-wider uppercase text-sm relative hover:text-blue-600 dark:hover:text-cyan-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-600 dark:after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Home</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 font-normal transition-colors duration-300 tracking-wider uppercase text-sm relative hover:text-blue-600 dark:hover:text-cyan-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-600 dark:after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="#timeline" className="text-gray-600 dark:text-gray-300 font-normal transition-colors duration-300 tracking-wider uppercase text-sm relative hover:text-blue-600 dark:hover:text-cyan-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-600 dark:after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Experience</a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 font-normal transition-colors duration-300 tracking-wider uppercase text-sm relative hover:text-blue-600 dark:hover:text-cyan-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-600 dark:after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">Projects</a>
          </nav>
          
          <div className="flex items-center gap-2">
            <i className="fas fa-sun text-sm text-gray-600 dark:text-gray-400"></i>
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
                isDark ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  isDark ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
            <i className="fas fa-moon text-sm text-gray-600 dark:text-gray-400"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;