import React, { useState } from 'react';

const ChessPortfolio = () => {
  const initialBoard = [
    ['♜','♞','♝','♛','♚','♝','♞','♜'],
    ['♟','♟','♟','♟','♟','♟','♟','♟'],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    ['♙','♙','♙','♙','♙','♙','♙','♙'],
    ['♖','♘','♗','♕','♔','♗','♘','♖']
  ];

  const portfolioMoves = [
    { move: 'e2-e4', section: 'hero', title: 'Opening Move - Meet Shreya', content: 'Frontend Developer II with 3+ years of experience' },
    { move: 'e7-e5', section: 'about', title: 'Counter Attack - About Me', content: 'Passionate about creating responsive web experiences' },
    { move: 'Nf3', section: 'skills', title: 'Knight Development - My Skills', content: 'React, JavaScript, TailwindCSS, HTML5, AWS' },
    { move: 'Nc6', section: 'timeline', title: 'Strategic Position - Experience', content: 'My professional journey and achievements' },
    { move: 'Bb5', section: 'projects', title: 'Bishop Attack - Projects', content: 'Netflix Clone, ConnectU and more strategic builds' }
  ];

  const [currentMove, setCurrentMove] = useState(0);
  const [board, setBoard] = useState(initialBoard);
  const [revealedSections, setRevealedSections] = useState(['hero']);

  const playNextMove = () => {
    if (currentMove < portfolioMoves.length - 1) {
      const nextMove = currentMove + 1;
      setCurrentMove(nextMove);
      setRevealedSections(prev => [...prev, portfolioMoves[nextMove].section]);
    }
  };

  const resetGame = () => {
    setCurrentMove(0);
    setRevealedSections(['hero']);
    setBoard(initialBoard);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Chess Game Header */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-white p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">♔ Shreya's Chess Portfolio ♕</h1>
            <p className="text-amber-200">Play chess to unlock portfolio sections</p>
          </div>
          <div className="text-right">
            <div className="text-lg">Move: {currentMove + 1}/5</div>
            <div className="text-sm text-amber-200">{portfolioMoves[currentMove]?.move}</div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chess Board */}
        <div className="bg-white rounded-lg shadow-2xl p-6">
          <h2 className="text-2xl font-bold text-center mb-4 text-amber-800">♛ Interactive Chess Board ♛</h2>
          
          <div className="grid grid-cols-8 gap-0 border-4 border-amber-800 mb-4 mx-auto" style={{width: '320px', height: '320px'}}>
            {board.map((row, rowIndex) =>
              row.map((piece, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-10 h-10 flex items-center justify-center text-2xl font-bold cursor-pointer hover:bg-opacity-80 transition-all ${
                    (rowIndex + colIndex) % 2 === 0 ? 'bg-amber-100' : 'bg-amber-600'
                  }`}
                >
                  {piece}
                </div>
              ))
            )}
          </div>

          <div className="text-center space-y-3">
            <div className="bg-amber-100 p-3 rounded-lg">
              <div className="font-bold text-amber-800">{portfolioMoves[currentMove]?.title}</div>
              <div className="text-sm text-amber-700">Move: {portfolioMoves[currentMove]?.move}</div>
            </div>
            
            <div className="flex gap-3 justify-center">
              <button
                onClick={playNextMove}
                disabled={currentMove >= portfolioMoves.length - 1}
                className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {currentMove >= portfolioMoves.length - 1 ? 'Game Complete!' : 'Play Next Move'}
              </button>
              <button
                onClick={resetGame}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Reset Game
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Sections */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-amber-800">♜ Portfolio Unlocked ♜</h2>
          
          {portfolioMoves.map((moveData, index) => (
            <div
              key={moveData.section}
              className={`bg-white rounded-lg shadow-lg p-6 border-2 transition-all duration-500 ${
                revealedSections.includes(moveData.section)
                  ? 'border-amber-400 opacity-100 transform translate-y-0'
                  : 'border-gray-200 opacity-50 transform translate-y-4'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">
                  {index === 0 ? '♔' : index === 1 ? '♕' : index === 2 ? '♘' : index === 3 ? '♖' : '♗'}
                </span>
                <h3 className="text-xl font-bold text-amber-800">{moveData.title}</h3>
                {!revealedSections.includes(moveData.section) && (
                  <span className="text-sm bg-gray-200 px-2 py-1 rounded">🔒 Locked</span>
                )}
              </div>
              
              {revealedSections.includes(moveData.section) ? (
                <div>
                  <p className="text-gray-700 mb-3">{moveData.content}</p>
                  {moveData.section === 'hero' && (
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-lg">
                      <h4 className="font-bold">Welcome to my portfolio!</h4>
                      <p>I'm Shreya, a Frontend Developer II passionate about creating amazing web experiences.</p>
                    </div>
                  )}
                  {moveData.section === 'about' && (
                    <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-lg">
                      <h4 className="font-bold">About Me</h4>
                      <p>3+ years of experience in React, JavaScript, and modern web technologies.</p>
                    </div>
                  )}
                  {moveData.section === 'skills' && (
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-lg">
                      <h4 className="font-bold">Technical Skills</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['React ♛', 'JavaScript ♜', 'TailwindCSS ♝', 'HTML5 ♞', 'AWS ♟'].map(skill => (
                          <span key={skill} className="bg-white bg-opacity-20 px-2 py-1 rounded text-sm">{skill}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {moveData.section === 'timeline' && (
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-lg">
                      <h4 className="font-bold">Experience Timeline</h4>
                      <div className="space-y-2 mt-2">
                        <div>♔ 2024 - Frontend Developer II</div>
                        <div>♕ 2022 - Frontend Developer</div>
                        <div>♖ 2021 - Junior Developer</div>
                      </div>
                    </div>
                  )}
                  {moveData.section === 'projects' && (
                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-lg">
                      <h4 className="font-bold">Featured Projects</h4>
                      <div className="space-y-2 mt-2">
                        <div>♛ Netflix Clone - React, TailwindCSS</div>
                        <div>♜ ConnectU - React, Node.js, SQLite</div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-gray-400 italic">Play chess moves to unlock this section...</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChessPortfolio;