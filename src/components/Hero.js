import React from 'react';
import profileImage from '../assets/—Pngtree—a 3d cartoon illustration of_22765163.png';

const Hero = () => {
  return (
    <section id="home" className="hero min-h-screen flex items-center overflow-hidden pt-20 sm:pt-28 md:pt-32 lg:pt-16 bg-white dark:bg-gray-900 relative" style={{perspective: '1000px'}}>
      {/* Floating Code Elements */}
      {[
        { code: 'const dev = new Frontend();', x: 10, y: 20, delay: 0 },
        { code: 'dev.skills.push("React");', x: 80, y: 30, delay: 1 },
        { code: 'dev.experience = "3+ years";', x: 15, y: 70, delay: 2 },
        { code: 'dev.createMagic();', x: 75, y: 80, delay: 3 }
      ].map((item, i) => (
        <div
          key={i}
          className="absolute text-blue-500/20 dark:text-cyan-500/20 font-mono text-sm pointer-events-none"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animation: `codeFloat ${4 + i}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
            transform: 'translateZ(20px)'
          }}
        >
          {item.code}
        </div>
      ))}
      
      {/* Geometric Shapes */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute opacity-10 pointer-events-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `geometryFloat ${3 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          <div className={`w-8 h-8 ${i % 2 === 0 ? 'bg-blue-500 rounded-full' : 'bg-purple-500 rotate-45'}`} />
        </div>
      ))}
      
      <div className="max-w-6xl mx-auto px-4 md:px-5 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center min-h-[75vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] relative z-10">
        <div className="fade-in">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-5 text-gray-900 dark:text-white leading-tight relative z-10 glitch" data-text="Hello, I am Shreya">
              Hello, I am <span className="highlight">Shreya</span>
            </h1>
            <div className="typewriter">
              <h2 className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 font-light tracking-wider uppercase typewriter-subtitle">&lt; Frontend Developer II /&gt;</h2>
            </div>
          </div>
          <div className="text-sm md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed relative z-10 font-mono">
            <span className="text-blue-600 dark:text-cyan-400">const</span> <span className="text-purple-600 dark:text-yellow-400">experience</span> = {"{"}  
            <br />&nbsp;&nbsp;<span className="text-green-600 dark:text-green-400">years</span>: <span className="text-orange-600 dark:text-orange-400">3+</span>,
            <br />&nbsp;&nbsp;<span className="text-green-600 dark:text-green-400">focus</span>: <span className="text-red-600 dark:text-red-400">'responsive & interactive web experiences'</span>
            <br />{"}"};
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-4 mb-8 relative z-10">
            {[
              { name: 'React.js', icon: 'fab fa-react' },
              { name: 'JavaScript', icon: 'fab fa-js-square' },
              { name: 'TailwindCSS', icon: 'fas fa-palette' },
              { name: 'HTML5', icon: 'fab fa-html5' },
              { name: 'AWS', icon: 'fab fa-aws' }
            ].map((tech, i) => (
              <div key={i} className="tech-item" style={{animationDelay: `${i * 0.1}s`}}>
                <i className={`${tech.icon} mr-2`}></i>{tech.name}
              </div>
            ))}
          </div>
          
          


        </div>
        
        <div className="flex justify-center items-center relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img 
              src={profileImage}
              alt="Shreya - 3D Character"
              className="relative transform hover:scale-110 transition-all duration-500 hover:rotate-6 animate-float filter drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(0, 212, 255, 0.5))'
              }}
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-white text-sm">✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;