import React from 'react';
import AboutImage from '/image/about.png';

function AboutUs() {
  return (
    <section className="my-[8em]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src={AboutImage} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg leading-relaxed text-gray-600">
            MC-Indonesia is a club made for its members, they will enjoy not only physical health but also financial health. By joining MC-Indonesia, cill members get privileges and exclusive products from us, including having a millionaire community in Indonesia. By utilizing this community, we hope that there will be better cooperation among its members and of course help improve economic conditions in Indonesia. 

            </p>

            <p className='mt-5 text-gray-600'>
            MCI-Indonesia statement states that members can get bonuses, prizes, commissions or benefits from any participating person or entity becoming a member. MC-Indonesia has been directly proportional to efforts and guarantees with prizes, bonuses, commissions or gains in tranding potential. Product results can differ from one person to another
            </p>

            <button className='mt-[5em] rounded-full bg-[#0C66AC] px-5 py-2 text-white'>Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
