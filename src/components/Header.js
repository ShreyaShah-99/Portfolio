import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'py-3 shadow-lg' : 'py-4'} border-b border-gray-200`}>
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
        <div className="nav-brand flex items-center gap-3 cursor-pointer" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
          <div className="logo">
            <span className="text-2xl hover:text-blue-600 transition-colors duration-300">♕️</span>
          </div>
          <span className={`text-black font-medium text-lg tracking-wide transition-all duration-500 ${isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>It's Me</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="text-black font-normal transition-colors duration-300 tracking-wider uppercase text-sm relative hover:text-gray-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-black after:transition-all after:duration-300 hover:after:w-full">Home</a>
          <a href="#about" className="text-black font-normal transition-colors duration-300 tracking-wider uppercase text-sm relative hover:text-gray-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-black after:transition-all after:duration-300 hover:after:w-full">About</a>
          <a href="#timeline" className="text-black font-normal transition-colors duration-300 tracking-wider uppercase text-sm relative hover:text-gray-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-black after:transition-all after:duration-300 hover:after:w-full">Experience</a>
          <a href="#skills" className="text-black font-normal transition-colors duration-300 tracking-wider uppercase text-sm relative hover:text-gray-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-black after:transition-all after:duration-300 hover:after:w-full">Skills</a>
          <a href="#projects" className="text-black font-normal transition-colors duration-300 tracking-wider uppercase text-sm relative hover:text-gray-600 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-black after:transition-all after:duration-300 hover:after:w-full">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;