import React from 'react';
import PropTypes from 'prop-types';

function StatisticCard({ number, label, bgColor, textColor }) {
  return (
    <div className={`w-[10em] ${bgColor} ${textColor} bg-opacity-20 h-[15em] flex flex-col items-center justify-between py-5 rounded-3xl`}>
      <div></div>
      <p className='text-3xl font-bold'>{number}</p>
      <p className='bg-white rounded-full p-2 text-sm'>{label}</p>
    </div>
  );
}


export default StatisticCard;
