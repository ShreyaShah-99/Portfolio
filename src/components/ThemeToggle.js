import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-[9999] p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 dark:from-yellow-400 dark:to-orange-500 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-110 border-2 border-white dark:border-gray-800"
      aria-label="Toggle theme"
      style={{
        boxShadow: isDark 
          ? '0 0 30px rgba(251, 191, 36, 0.5), 0 10px 25px rgba(0,0,0,0.3)'
          : '0 0 30px rgba(59, 130, 246, 0.5), 0 10px 25px rgba(0,0,0,0.2)'
      }}
    >
      {isDark ? (
        <svg className="w-8 h-8 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg className="w-8 h-8 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;