import React, { useState, useRef } from 'react';

const Terminal = () => {
  const [lines, setLines] = useState(['$ shreya@portfolio:~$ ']);
  const [input, setInput] = useState('');
  const [position, setPosition] = useState({ 
    x: window.innerWidth > 768 ? window.innerWidth - 320 : 10, 
    y: window.innerHeight > 600 ? window.innerHeight - 220 : window.innerHeight - 180 
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const terminalRef = useRef(null);

  const commands = {
    help: 'Available commands: about, skills, projects, contact, clear',
    about: 'Frontend Developer II with 3+ years experience in React & modern web technologies',
    skills: 'React, JavaScript, TailwindCSS, HTML5, AWS, Node.js',
    projects: 'Netflix Clone, ConnectU - Check out my work above!',
    contact: 'Email: shreyashah2699@gmail.com | LinkedIn: /in/shreya-dev',
    clear: () => setLines(['$ shreya@portfolio:~$ '])
  };

  const handleCommand = (cmd) => {
    const command = cmd.toLowerCase().trim();
    const response = commands[command];
    
    if (command === 'clear') {
      response();
      return;
    }
    
    setLines(prev => [...prev, `$ ${cmd}`, response || `Command '${cmd}' not found. Type 'help' for available commands.`, '$ shreya@portfolio:~$ ']);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleStart = (e) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    setIsDragging(true);
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y
    });
  };

  const handleMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      const newX = Math.max(0, Math.min(window.innerWidth - 200, clientX - dragStart.x));
      const newY = Math.max(0, Math.min(window.innerHeight - 150, clientY - dragStart.y));
      
      setPosition({ x: newX, y: newY });
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMove, { passive: false });
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
    }
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, dragStart]);

  return (
    <div 
      ref={terminalRef}
      className="floating-terminal"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? 'grabbing' : 'default'
      }}
    >
      <div 
        className="terminal-header"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        style={{ cursor: 'grab', touchAction: 'none' }}
      >
        <div className="terminal-dots">
          {[1,2,3].map(i => <div key={i} className="terminal-dot"></div>)}
        </div>
        <div className="terminal-title">shreya@portfolio</div>
      </div>
      <div className="terminal-body" onClick={() => document.getElementById('terminal-input').focus()}>
        {lines.slice(0, -1).map((line, i) => (
          <div key={i} className="terminal-line" style={{opacity: 1, animation: 'none'}}>{line}</div>
        ))}
        <div className="terminal-line" style={{opacity: 1, animation: 'none'}}>
          {lines[lines.length - 1]}
          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#00ff00',
              fontFamily: 'Courier New, monospace',
              fontSize: '11px',
              width: '200px'
            }}
            placeholder="type 'help' for commands"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;