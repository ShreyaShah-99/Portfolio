import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Netflix Clone', description: 'Full-featured Netflix clone with movie streaming interface and user authentication', technologies: ['React', 'TailwindCSS'], image: 'fas fa-play', github: '#', demo: 'https://netflix-app-sigma-five.vercel.app/' },
    { title: 'ConnectU', description: 'Social networking platform connecting people with shared interests and goals', technologies: ['React', 'Node.js', 'SQLite', 'Socket.io'], image: 'fas fa-users', github: '#', demo: 'https://connect-u-ui.vercel.app/' }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-cyan-500/5 dark:to-blue-500/5"></div>
      <div className="max-w-6xl mx-auto px-4 md:px-5 relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-cyan-400">&lt;</span>Projects<span className="text-blue-600 dark:text-cyan-400">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotateX-6 hover:rotateY-3 transition-all duration-500 border border-blue-500/30 dark:border-cyan-500/30 hover:border-blue-600 dark:hover:border-cyan-400" style={{transformStyle: 'preserve-3d', perspective: '1000px'}}>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 rounded-bl-3xl flex items-center justify-center">
                <i className={`${project.image} text-xl text-white`}></i>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500"></div>
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 border border-blue-500/50 dark:border-cyan-500/50 text-blue-700 dark:text-cyan-300 px-4 py-2 rounded-full text-xs font-semibold hover:border-blue-600 dark:hover:border-cyan-400 hover:shadow-md transition-all duration-200">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="flex-1 text-center py-3 px-4 font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 border-2 border-blue-500 dark:border-cyan-500 text-blue-600 dark:text-cyan-400 hover:bg-blue-500 dark:hover:bg-cyan-500 hover:text-white">
                    <i className="fab fa-github mr-2"></i>Code
                  </a>
                  <a href={project.demo} className="flex-1 text-center py-3 px-4 font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 text-white hover:from-blue-600 hover:to-purple-600 dark:hover:from-cyan-600 dark:hover:to-blue-600">
                    <i className="fas fa-external-link-alt mr-2"></i>Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;