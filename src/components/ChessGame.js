import React, { useState } from 'react';

const ChessGame = () => {
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

  const [board, setBoard] = useState(initialBoard);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('white');
  const [gameStatus, setGameStatus] = useState('Your move! Click a piece to start.');

  const isWhitePiece = (piece) => piece && '♔♕♖♗♘♙'.includes(piece);
  const isBlackPiece = (piece) => piece && '♚♛♜♝♞♟'.includes(piece);

  const handleSquareClick = (row, col) => {
    const piece = board[row][col];
    
    if (selectedSquare) {
      const [selectedRow, selectedCol] = selectedSquare;
      const selectedPiece = board[selectedRow][selectedCol];
      
      // Check if it's a valid move (simplified)
      if ((currentPlayer === 'white' && isWhitePiece(selectedPiece)) || 
          (currentPlayer === 'black' && isBlackPiece(selectedPiece))) {
        
        // Make the move
        const newBoard = board.map(row => [...row]);
        newBoard[row][col] = selectedPiece;
        newBoard[selectedRow][selectedCol] = null;
        
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'white' ? 'black' : 'white');
        setGameStatus(`${currentPlayer === 'white' ? 'Black' : 'White'}'s turn`);
      }
      
      setSelectedSquare(null);
    } else if (piece && 
               ((currentPlayer === 'white' && isWhitePiece(piece)) || 
                (currentPlayer === 'black' && isBlackPiece(piece)))) {
      setSelectedSquare([row, col]);
      setGameStatus(`Selected ${piece}. Click where to move.`);
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setSelectedSquare(null);
    setCurrentPlayer('white');
    setGameStatus('Game reset! Your move.');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white rounded-lg shadow-2xl border-2 border-gray-800 p-4">
      <div className="text-center mb-2">
        <h3 className="text-sm font-bold text-gray-800">♔ Play Chess ♔</h3>
        <p className="text-xs text-gray-600">{gameStatus}</p>
      </div>
      
      <div className="grid grid-cols-8 gap-0 border-2 border-gray-800 mb-2" style={{width: '240px', height: '240px'}}>
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-7 h-7 flex items-center justify-center cursor-pointer text-lg font-bold transition-all duration-200 hover:scale-110 ${
                (rowIndex + colIndex) % 2 === 0 ? 'bg-amber-100' : 'bg-amber-800'
              } ${
                selectedSquare && selectedSquare[0] === rowIndex && selectedSquare[1] === colIndex
                  ? 'ring-2 ring-blue-500 ring-inset'
                  : ''
              }`}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
            >
              {piece}
            </div>
          ))
        )}
      </div>
      
      <div className="flex gap-2">
        <button
          onClick={resetGame}
          className="px-3 py-1 bg-gray-800 text-white text-xs rounded hover:bg-gray-700 transition-colors"
        >
          Reset
        </button>
        <div className="text-xs text-gray-600 flex items-center">
          Turn: {currentPlayer === 'white' ? '♔' : '♚'}
        </div>
      </div>
    </div>
  );
};

export default ChessGame;