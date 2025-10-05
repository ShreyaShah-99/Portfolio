import React, { useState } from 'react';

const Terminal = () => {
  const [lines, setLines] = useState(['$ shreya@portfolio:~$ ']);
  const [input, setInput] = useState('');

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

  return (
    <div className="floating-terminal">
      <div className="terminal-header">
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