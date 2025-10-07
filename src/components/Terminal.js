import React, { useState, useRef } from 'react';

const Terminal = () => {
  const [lines, setLines] = useState(['$ shreya@portfolio:~$ ']);
  const [input, setInput] = useState('');
  const [position, setPosition] = useState({ x: window.innerWidth - 320, y: window.innerHeight - 220 });
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
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
        onMouseDown={handleMouseDown}
        style={{ cursor: 'grab' }}
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