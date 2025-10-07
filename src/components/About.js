import React from 'react';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience', delay: 0 }
  ];

  const skills = [
    { icon: 'fas fa-mobile-alt', text: 'Responsive Design', animation: 'animate-bounce' },
    { icon: 'fas fa-bolt', text: 'Interactive UIs', animation: 'animate-pulse' },
    { icon: 'fas fa-cloud', text: 'AWS Integration', animation: 'animate-bounce' },
    { icon: 'fas fa-code', text: 'Modern JavaScript', animation: 'animate-pulse' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-5">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-cyan-400">&lt;</span>About<span className="text-blue-600 dark:text-cyan-400">/&gt;</span>
        </h2>
        <div className="max-w-4xl mx-auto text-center px-4">
          <div className="mb-12">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 md:mb-8">
              I'm a passionate Frontend Developer with 3+ years of experience creating beautiful, responsive websites. 
              I love turning ideas into interactive digital experiences that users enjoy.
            </p>
            
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-cyan-500/10 dark:to-blue-500/10 px-8 py-4 rounded-full border border-blue-500/20 dark:border-cyan-500/20">
              <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400">{stats[0].number}</div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">{stats[0].label}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="group p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-blue-500/20 dark:border-cyan-500/20 hover:border-blue-500/40 dark:hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105 hover:rotateY-12 hover:translateZ-4" style={{transformStyle: 'preserve-3d'}}>
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${skill.icon} text-white text-lg`}></i>
                </div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{skill.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;