import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'ReactJS', icon: 'fab fa-react' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'TailwindCSS', icon: 'fas fa-palette' },
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Responsive Design', icon: 'fas fa-mobile-alt' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:from-cyan-500/5 dark:to-blue-500/5"></div>
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-cyan-400">&lt;</span>Skills<span className="text-blue-600 dark:text-cyan-400">/&gt;</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 border border-blue-500/30 dark:border-cyan-500/30 rounded-lg p-6 text-center hover:border-blue-600 dark:hover:border-cyan-400 transition-all duration-300 hover:transform hover:scale-105 shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 mx-auto mb-4 flex items-center justify-center rounded-lg hover:scale-110 transition-transform duration-300">
                  <i className={`${skill.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-base text-gray-900 dark:text-white font-medium">{skill.name}</h3>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-cyan-500/20 dark:to-blue-500/20 rounded-lg blur-xl animate-pulse"></div>
              <img 
                src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHc4dGZkMzBkZGNkNWJkZGNkNWJkZGNkNWJkZGNkNWJkZGNkNWJkZGNkNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif" 
                alt="Programming skills" 
                className="relative rounded-lg transform hover:scale-105 transition-all duration-500"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(0, 212, 255, 0.3))'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;