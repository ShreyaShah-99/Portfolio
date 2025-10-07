import React, { useState } from 'react';

const Showcase = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      title: 'Responsive Design',
      description: 'Watch how layouts adapt to different screen sizes',
      icon: 'fas fa-mobile-alt',
      animation: 'responsive'
    },
    {
      title: 'Interactive Components',
      description: 'Hover effects and smooth transitions',
      icon: 'fas fa-mouse-pointer',
      animation: 'interactive'
    },
    {
      title: 'Loading Animations',
      description: 'Engaging loading states and micro-interactions',
      icon: 'fas fa-spinner',
      animation: 'loading'
    },
    {
      title: 'Data Visualization',
      description: 'Dynamic charts and progress indicators',
      icon: 'fas fa-chart-bar',
      animation: 'charts'
    }
  ];

  return (
    <section id="showcase" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-cyan-400">&lt;</span>Frontend Magic<span className="text-blue-600 dark:text-cyan-400">/&gt;</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {demos.map((demo, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeDemo === index 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 text-white shadow-lg scale-105' 
                    : 'bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveDemo(index)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeDemo === index ? 'bg-white/20' : 'bg-blue-500/10 dark:bg-cyan-500/10'
                  }`}>
                    <i className={`${demo.icon} text-xl ${activeDemo === index ? 'text-white' : 'text-blue-600 dark:text-cyan-400'}`}></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{demo.title}</h3>
                    <p className={`text-sm ${activeDemo === index ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'}`}>
                      {demo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 dark:border-cyan-500/20 shadow-xl">
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-600 dark:text-gray-400 text-sm font-mono">demo.jsx</span>
              </div>
            </div>
            
            {activeDemo === 0 && (
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-2 animate-pulse">
                  <div className="h-8 bg-blue-200 dark:bg-blue-800 rounded"></div>
                  <div className="h-8 bg-purple-200 dark:bg-purple-800 rounded"></div>
                  <div className="h-8 bg-blue-200 dark:bg-blue-800 rounded"></div>
                </div>
                <div className="grid grid-cols-1 gap-2 animate-pulse">
                  <div className="h-12 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded"></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Desktop → Mobile Layout</p>
              </div>
            )}
            
            {activeDemo === 1 && (
              <div className="space-y-4">
                <div className="group cursor-pointer">
                  <div className="h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-semibold">Hover Me!</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex-1 h-8 bg-blue-200 dark:bg-blue-800 rounded animate-bounce" style={{animationDelay: `${i * 0.2}s`}}></div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Interactive Elements</p>
              </div>
            )}
            
            {activeDemo === 2 && (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div className="space-y-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="h-4 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded animate-pulse" style={{width: `${i * 30}%`}}></div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Loading States</p>
              </div>
            )}
            
            {activeDemo === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-2 items-end h-24">
                  {[40, 70, 30, 90].map((height, i) => (
                    <div key={i} className="bg-gradient-to-t from-blue-500 to-purple-500 rounded-t animate-pulse" style={{height: `${height}%`, animationDelay: `${i * 0.3}s`}}></div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
                  <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Data Visualization</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;