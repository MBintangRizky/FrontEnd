// ProgressBar.js
import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-[#0C66AC] h-2.5 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
