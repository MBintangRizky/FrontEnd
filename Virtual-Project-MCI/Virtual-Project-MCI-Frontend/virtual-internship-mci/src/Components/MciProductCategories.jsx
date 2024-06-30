import React from 'react';
import ProductCatImage from '/image/productCat.png';
import LiveSecretImage from '/image/liveSecret.png';
import TourImage from '/image/tourBg.png';

function MciProductCategories() {
  return (
    <div className='my-5'>
      <div className='container mx-auto mb-[5em]'>
        <h1 className='text-4xl text-black font-semibold text-center mb-[2em]'>Millionaire Product Categories</h1>
        <div className='flex justify-center'> 
          <img src={ProductCatImage} alt="" srcSet="" width={1000} height={600} />
        </div>
      </div>

      <div className='container mx-auto mb-[5em]'>
        <h1 className='text-4xl text-black font-semibold text-center'>Live Secret Bracelet</h1>
        <p className='text-[12px] text-center text-gray-600 mb-[4em]'>LSB is one of the pendant variants, this pendant emits scalar energy, FIR, and contains germanium.</p>
        <div className='flex justify-center'> 
          <img src={LiveSecretImage} alt="" srcSet="" width={1000} height={600} />
        </div>
      </div>

      <div className='mx-auto'>
        <h1 className='text-4xl text-black font-semibold text-center'>Free Tour Program</h1>
        <p className='text-[12px] text-center text-gray-600 mb-[4em] w-2/3 mx-auto'>MCI is widely known as a prestigious online business, not only because of its Fantastic Pay Out but also the Free Tour Program which has successfully sent thousands of its members to various popular tourist destinations in the world.</p>
        
        {/* The background start from here */}
        <div className='flex items-center justify-center gap-x-5 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${TourImage})`, minHeight: '400px' }}> 
          <button className='border-solid border-2 border-white px-4 py-2 rounded-full text-white'>
            More Info
          </button>
          <button className='bg-[#D9A251] px-4 py-2 rounded-full text-white'>
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MciProductCategories;
