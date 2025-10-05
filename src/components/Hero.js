import React from 'react';
import profileImage from '../assets/—Pngtree—a 3d cartoon illustration of_22765163.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-white overflow-hidden pt-24">
      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
        <div className="fade-in">
          <div className="mb-8">
            <h1 className="text-6xl font-normal mb-5 text-black leading-tight -tracking-wider relative z-10 animate-text-glow">
              Hello, I am <span className="text-black font-medium animate-pulse">Shreya</span>
            </h1>
            <div className="typewriter">
              <h2 className="text-xl text-gray-600 mb-8 font-light tracking-wider uppercase italic typewriter-subtitle">Frontend Developer II</h2>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">3+ years crafting responsive & interactive web experiences with modern technologies</p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="px-4 py-2 border border-black text-sm font-medium uppercase tracking-wider transition-all duration-500 cursor-pointer relative overflow-hidden hover:text-white group animate-border-glow hover:scale-110 hover:rotate-1">
              <span className="absolute top-0 left-0 w-0 h-full bg-black transition-all duration-500 group-hover:w-full -z-10"></span>
              React
            </div>
            <div className="px-4 py-2 border border-black text-sm font-medium uppercase tracking-wider transition-all duration-500 cursor-pointer relative overflow-hidden hover:text-white group animate-border-glow hover:scale-110 hover:-rotate-1" style={{animationDelay: '0.2s'}}>
              <span className="absolute top-0 left-0 w-0 h-full bg-black transition-all duration-500 group-hover:w-full -z-10"></span>
              JavaScript
            </div>
            <div className="px-4 py-2 border border-black text-sm font-medium uppercase tracking-wider transition-all duration-500 cursor-pointer relative overflow-hidden hover:text-white group animate-border-glow hover:scale-110 hover:rotate-1" style={{animationDelay: '0.4s'}}>
              <span className="absolute top-0 left-0 w-0 h-full bg-black transition-all duration-500 group-hover:w-full -z-10"></span>
              TailwindCSS
            </div>
            <div className="px-4 py-2 border border-black text-sm font-medium uppercase tracking-wider transition-all duration-500 cursor-pointer relative overflow-hidden hover:text-white group animate-border-glow hover:scale-110 hover:-rotate-1" style={{animationDelay: '0.6s'}}>
              <span className="absolute top-0 left-0 w-0 h-full bg-black transition-all duration-500 group-hover:w-full -z-10"></span>
              HTML5
            </div>
            <div className="px-4 py-2 border border-black text-sm font-medium uppercase tracking-wider transition-all duration-500 cursor-pointer relative overflow-hidden hover:text-white group animate-border-glow hover:scale-110 hover:rotate-1" style={{animationDelay: '0.8s'}}>
              <span className="absolute top-0 left-0 w-0 h-full bg-black transition-all duration-500 group-hover:w-full -z-10"></span>
              AWS
            </div>
          </div>
          
          
          <div className="flex gap-5 flex-wrap">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#skills" className="btn btn-outline animate-pulse">My Skills</a>
          </div>
        </div>
        
        <div className="fade-in flex justify-center items-center">
          <img 
            src={profileImage}
            alt="Shreya - 3D Character"
            className="transform hover:scale-105 transition-all duration-500 hover:rotate-2 animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;