import React from 'react';
import DollarImage from '/image/dollar.png';
import GlobeImage from '/image/globe.png';
import MedalImage from '/image/medal.png';
import UsersImage from '/image/users.png';

function WhyMci() {
  return (
    <div className='my-5'>
      <h1 className='text-center text-4xl font-semibold mb-[1em]'>Why MCI?</h1>
      <div className='container mx-auto flex flex-row  gap-x-5 rounded-full border-solid border-4 border-blue-500 px-5 py-5'>
        <div className='flex flex-col items-center w-1/4'>
          <img src={DollarImage} className='bg-[#5F9AC8] p-2 rounded-full' width={64} height={64} alt="" srcSet="" />
          <p className='text-[12px] my-3 text-center'>
            MCI helps thousands of its members to break away from the paradigm of monthly income to earn 3X in a day. The various backgrounds of successful leaders are once again proof that this business is for all groups.
          </p>
        </div>
        
        <div className='flex flex-col items-center  w-1/4'>
          <img src={GlobeImage} className='bg-[#5F9AC8] p-2 rounded-full' width={64} height={64} alt="" srcSet="" />
          <p className='text-[12px] my-3 text-center'>
            The Free Tour Program which has successfully sent thousands of its members to various popular tourist destinations in the world.
          </p>
        </div>

        <div className='flex flex-col items-center  w-1/4'>
          <img src={MedalImage} className='bg-[#5F9AC8] p-2 rounded-full' width={64} height={64} alt="" srcSet="" />
          <p className='text-[12px] my-3 text-center'>
            MCI is Certificate Of Merit World Record Museum and several other awards see more
          </p>
        </div>
   
        <div className='flex flex-col items-center w-1/4'>
          <img src={UsersImage} className='bg-[#5F9AC8] p-2 rounded-full' width={64} height={64} alt="" srcSet="" />
          <p className='text-[12px] my-3 text-center'>
            MCI is widely known as a prestigious online business. Lets join our big family
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyMci;
