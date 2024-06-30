import React from 'react';

import HeroImage from '/image/hero.png'

function Hero() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-semibold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Need Reasons <span className='text-[#0C66AC]'>to Love</span> MCI?</h1>
            <p className="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-2xl lg:text-3xl dark:text-gray-400 italic"><span className='text-[#0C66AC] italic'>Proff</span> not <span className='text-[#0C66AC] italic'>Promise</span></p>
            <p className='text-gray-600'>
            MCI is widely known as a prestigious online business, not only because of its Fantastic Pay Out but also the Free Tour Program which has successfully sent thousands of its members to various popular tourist destinations in the world.
            </p>
            <div className='mt-5 flex flex-row items-center gap-x-4'>
              <a href="#" className="border-solid border-2 border-[#0C66AC] px-4 py-2 text-[#0C66AC] rounded-full">
                More Info
                
              </a>
              <a href="#" className="bg-[#0C66AC] px-4 py-2 text-white rounded-full">
                Join Now
              </a> 
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={HeroImage} alt="Hero Image" />
          </div>                
        </div>
      </section>
    </div>
  );
}

export default Hero;
