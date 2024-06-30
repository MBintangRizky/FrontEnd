import React, { useState } from 'react';
import ReviewModal from './ModalToRate';

function ToRateCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='bg-white mb-4 border-4 border-gray-200 shadow rounded-3xl px-10 py-4 flex items-center justify-center'>
      <div className='w-5/12 flex items-center justify-center gap-x-5'>
        <img src="/image/option6.png" className='bg-gray-200' width={50} alt="Product" />
        <p>Millionaire Pendant De Luxe - Green Diamond</p>
      </div>

      <div className='w-1/6 flex items-center justify-center'>
        <p className='text-gray-500'>1x</p>
      </div>

      <div className='w-3/12 flex items-center justify-center'>
        <p className='text-gray-500'>Rp.13.200.000</p>
      </div>

      <div className='w-1/6 flex items-center justify-center'>
        <button 
          className='text-white bg-[#D9A251] text-sm rounded-full px-7 py-2'
          onClick={() => setIsModalOpen(true)}
        >
          Rate
        </button>
      </div>

      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default ToRateCard;
