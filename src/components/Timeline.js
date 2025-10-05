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
    <section id="timeline" className="py-20" style={{background: '#ffffff'}}>
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-16 animate-pulse" style={{color: '#000000'}}>♟ My Chess Moves ♟</h2>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full rounded-full shadow-lg" style={{background: '#000000'}}></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div className="p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105" style={{background: '#fff', border: '2px solid #000000', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-4xl animate-bounce">
                      {index === 2 ? '♟' : index === 1 ? '♞' : '♛'}
                    </div>
                    <div className="text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg animate-pulse" style={{background: '#000000', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'}}>
                      {exp.year}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{color: '#000000'}}>{exp.title}</h3>
                  <h4 className="text-base font-medium mb-3" style={{color: '#000000'}}>{exp.company}</h4>
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-full hover:scale-110 transition-transform duration-200" style={{background: '#f5f5f5', color: '#000000', border: '1px solid #000000'}}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center text-3xl shadow-lg z-10 hover:scale-110 transition-transform duration-300" style={{width: '80px', height: '80px', borderRadius: '50%', border: '4px solid white', background: '#000000', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'}}>
                <span style={{color: '#ffffff'}}>{index === 2 ? '♟' : index === 1 ? '♞' : '♛'}</span>
              </div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;