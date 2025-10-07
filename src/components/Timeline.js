import React from 'react';

const Timeline = () => {
  const experiences = [
    {
      year: '2024',
      title: 'Frontend Developer II',
      company: 'Current Role',
      description: 'Leading responsive web development projects with React and modern CSS frameworks',
      tech: ['React', 'TailwindCSS', 'AWS']
    },
    {
      year: '2022',
      title: 'Frontend Developer',
      company: 'Previous Role',
      description: 'Developed interactive user interfaces and maintained web applications',
      tech: ['JavaScript', 'HTML5', 'CSS3']
    },
    {
      year: '2021',
      title: 'Junior Developer',
      company: 'Career Start',
      description: 'Started journey in web development, learning modern frameworks and best practices',
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-cyan-500/5 dark:to-blue-500/5"></div>
      <div className="max-w-6xl mx-auto px-4 md:px-5 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-cyan-400">&lt;</span>Timeline<span className="text-blue-600 dark:text-cyan-400">/&gt;</span>
        </h2>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center mb-8 md:mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`w-full md:w-1/2 mb-4 md:mb-0 px-4 md:px-0 ${index % 2 === 0 ? 'md:pr-8 text-center md:text-right' : 'md:pl-8 text-center md:text-left'}`}>
                <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 p-6 border-2 border-blue-500/30 dark:border-cyan-500/30 rounded-lg transition-all duration-300 hover:border-blue-600 dark:hover:border-cyan-400 hover:scale-105 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl text-blue-600 dark:text-cyan-400">
                      <i className={index === 2 ? 'fas fa-chess-pawn' : index === 1 ? 'fas fa-chess-bishop' : 'fas fa-chess-rook'}></i>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider mb-4 rounded">
                      {exp.year}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{exp.title}</h3>
                  <h4 className="text-base font-medium mb-3 text-blue-600 dark:text-cyan-400">{exp.company}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 border border-blue-500/50 dark:border-cyan-500/50 text-blue-700 dark:text-cyan-300 px-3 py-1 text-xs font-normal uppercase tracking-wider rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 border-4 border-white dark:border-gray-800 rounded-full flex items-center justify-center text-2xl md:text-3xl z-10 hover:scale-110 transition-transform duration-300">
                <i className={`text-white ${index === 2 ? 'fas fa-chess-pawn' : index === 1 ? 'fas fa-chess-bishop' : 'fas fa-chess-rook'}`}></i>
              </div>
              
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;