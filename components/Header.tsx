
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-700/50 bg-gray-900/50 shrink-0">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500"></div>
        <h1 className="text-xl font-semibold text-gray-100">Open Source AI Chat Hub</h1>
      </div>
    </header>
  );
};
