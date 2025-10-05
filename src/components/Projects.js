import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Netflix Clone', description: 'Full-featured Netflix clone with movie streaming interface and user authentication', technologies: ['React', 'TailwindCSS'], image: 'fas fa-play', github: '#', demo: 'https://netflix-app-sigma-five.vercel.app/' },
    { title: 'ConnectU', description: 'Social networking platform connecting people with shared interests and goals', technologies: ['React', 'Node.js', 'SQLite', 'Socket.io'], image: 'fas fa-users', github: '#', demo: 'https://connect-u-ui.vercel.app/' }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="section-title fade-in">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 fade-in border border-gray-200">
              <div className="absolute top-0 right-0 w-20 h-20 bg-black rounded-bl-3xl flex items-center justify-center">
                <i className={`${project.image} text-xl text-white`}></i>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-800"></div>
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-xs font-semibold border border-gray-200 hover:border-gray-400 hover:shadow-md transition-all duration-200">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {[{href: project.github, icon: 'fab fa-github', text: 'Code', style: 'border-2 border-black text-black hover:bg-black hover:text-white'}, 
                    {href: project.demo, icon: 'fas fa-external-link-alt', text: 'Demo', style: 'bg-black text-white hover:bg-gray-800'}].map((btn, i) => (
                    <a key={i} href={btn.href} className={`flex-1 text-center py-3 px-4 font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-sm ${btn.style}`}>
                      <i className={`${btn.icon} mr-2`}></i>{btn.text}
                    </a>
                  ))}
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