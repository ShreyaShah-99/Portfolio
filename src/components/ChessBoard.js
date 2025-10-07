import React, { useState, useEffect } from 'react';

const ChessBoard = ({ moveNumber, children, title, piece }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), moveNumber * 800);
    return () => clearTimeout(timer);
  }, [moveNumber]);

  return (
    <div className={`chess-move ${isVisible ? 'move-played' : 'move-waiting'}`}>
      <div className="move-notation">
        <span className="move-number">{moveNumber}.</span>
        <span className="piece">{piece}</span>
        <span className="move-title">{title}</span>
      </div>
      <div className="chess-section">
        {children}
      </div>
    </div>
  );
};

export default ChessBoard;