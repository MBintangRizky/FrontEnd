import React, { useState } from 'react';
import LayoutAdmin from '../LayoutAdmin';
import ToRateCard from '../../Components/ToRateCard';
import MyReviewCard from '../../Components/MyReviewCard';

function Review() {
  const [activeTab, setActiveTab] = useState('toRate'); // toRate or myReviews

  return (
    <LayoutAdmin>
      <h1 className="text-2xl font-bold mb-4">My Rating</h1>

      <div className="mb-4">
        <button 
          className={`mr-4 py-2 px-4 ${activeTab === 'toRate' ? 'text-[#0C66AC] border-b-2 font-bold border-[#0C66AC]' : 'text-gray-600'}`}
          onClick={() => setActiveTab('toRate')}
        >
          To Rate
        </button>
        <button 
          className={`py-2 px-4 ${activeTab === 'myReviews' ? 'text-[#0C66AC] border-b-2 font-bold border-[#0C66AC]' : 'text-gray-600'}`}
          onClick={() => setActiveTab('myReviews')}
        >
          My Reviews
        </button>
      </div>

      <div>
        {activeTab === 'toRate' && (
          <>
            <ToRateCard />
            <ToRateCard />
            <ToRateCard />
          </>
        )}

        {activeTab === 'myReviews' && (
          <MyReviewCard />
        )}
      </div>
    </LayoutAdmin>
  );
}

export default Review;
