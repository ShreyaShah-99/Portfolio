import React, { useState, useEffect, useRef } from 'react';

const Animation3D = () => {
  const [codeLines, setCodeLines] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sceneRef = useRef(null);

  const codeSnippets = [
    "const developer = new FrontendDev();",
    "developer.skills = ['React', 'JS', '3D'];",
    "developer.experience = '3+ years';",
    "developer.createMagic();",
    "// Building the future... ✨"
  ];

  useEffect(() => {
    const typeCode = async () => {
      setIsTyping(true);
      for (let i = 0; i < codeSnippets.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 800));
        setCodeLines(prev => [...prev, codeSnippets[i]]);
      }
      setIsTyping(false);
    };
    
    const interval = setInterval(() => {
      setCodeLines([]);
      typeCode();
    }, 8000);
    
    typeCode();
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePos({ x: (x - 0.5) * 40, y: (y - 0.5) * 40 });
      }
    };

    const scene = sceneRef.current;
    if (scene) {
      scene.addEventListener('mousemove', handleMouseMove);
      return () => scene.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section id="animation" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-5">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-cyan-400">&lt;</span>Code in Motion<span className="text-blue-600 dark:text-cyan-400">/&gt;</span>
        </h2>
        
        {/* 3D Coding Environment */}
        <div 
          ref={sceneRef}
          className="relative w-full h-96 bg-gradient-to-br from-gray-900 via-black to-gray-800 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-2xl shadow-2xl overflow-hidden"
          style={{ perspective: '1000px' }}
        >
          {/* Floating Code Blocks */}
          {codeLines.map((line, i) => (
            <div
              key={i}
              className="absolute text-green-400 font-mono text-sm md:text-base opacity-80 animate-pulse"
              style={{
                left: `${20 + (i * 15) % 60}%`,
                top: `${20 + (i * 20) % 60}%`,
                transform: `translateZ(${i * 20}px) rotateY(${mousePos.x * 0.1}deg) rotateX(${mousePos.y * 0.1}deg)`,
                animation: `codeFloat ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
                textShadow: '0 0 10px currentColor'
              }}
            >
              {line}
            </div>
          ))}

          {/* Central 3D Monitor */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              transform: `translate(-50%, -50%) rotateY(${mousePos.x * 0.3}deg) rotateX(${mousePos.y * 0.2}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Monitor Screen */}
            <div className="w-64 h-40 bg-gray-900 border-4 border-gray-700 rounded-lg relative">
              <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 rounded p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-1">
                  {codeLines.slice(0, 4).map((line, i) => (
                    <div key={i} className="text-green-400 text-xs font-mono opacity-90">
                      {line}
                    </div>
                  ))}
                  {isTyping && <div className="text-green-400 text-xs">|</div>}
                </div>
              </div>
              {/* Monitor Stand */}
              <div 
                className="absolute -bottom-8 left-1/2 w-16 h-8 bg-gray-700 transform -translate-x-1/2"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="w-full h-full bg-gray-600 transform rotateX(-90deg) translateZ(4px)"></div>
              </div>
            </div>
          </div>

          {/* Floating Geometric Shapes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translateZ(${Math.random() * 100}px)`,
                animation: `geometryFloat ${4 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              <div 
                className={`w-8 h-8 ${i % 3 === 0 ? 'bg-blue-500' : i % 3 === 1 ? 'bg-purple-500' : 'bg-cyan-500'} ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'}`}
                style={{
                  boxShadow: '0 0 20px currentColor',
                  animation: `shapeRotate ${2 + Math.random() * 3}s linear infinite`
                }}
              />
            </div>
          ))}

          {/* Binary Rain Background */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute top-0 text-blue-400 font-mono text-xs"
                style={{
                  left: `${i * 7}%`,
                  animation: `binaryRain ${3 + Math.random() * 4}s linear infinite`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              >
                {Array.from({length: 20}, () => Math.random() > 0.5 ? '1' : '0').join('')}
              </div>
            ))}
          </div>

          {/* Interactive Cursor Trail */}
          <div 
            className="absolute w-2 h-2 bg-cyan-400 rounded-full pointer-events-none opacity-60"
            style={{
              left: `calc(50% + ${mousePos.x * 2}px)`,
              top: `calc(50% + ${mousePos.y * 2}px)`,
              boxShadow: '0 0 15px currentColor',
              transform: 'translate(-50%, -50%)',
              transition: 'all 0.1s ease-out'
            }}
          />
        </div>

        {/* Development Process Visualization */}
        <div className="mt-16 relative">
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            {['Design', 'Code', 'Test', 'Deploy'].map((step, i) => (
              <div key={step} className="relative">
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500 flex items-center justify-center text-white font-bold shadow-lg"
                  style={{
                    animation: `processStep ${2}s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`
                  }}
                >
                  {i + 1}
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-700 dark:text-gray-300 text-sm font-medium">
                  {step}
                </div>
                {i < 3 && (
                  <div 
                    className="absolute top-1/2 -right-8 md:-right-16 w-8 md:w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-cyan-500 dark:to-blue-500"
                    style={{
                      animation: `flowLine 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.5 + 0.25}s`
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animation3D;