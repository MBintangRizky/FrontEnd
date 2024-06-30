import React from 'react';

function StarRating({ rating }) {
  const stars = Array(5).fill(0).map((_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      fill={index < rating ? "#FFD700" : "none"}
      viewBox="0 0 24 24"
      stroke={index < rating ? "#FFD700" : "currentColor"}
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.117 6.545h6.871c.969 0 1.37 1.24.588 1.81l-5.58 4.057 2.117 6.545c.3.921-.755 1.688-1.54 1.18L12 17.347l-5.624 4.717c-.784.508-1.84-.259-1.54-1.18l2.117-6.545-5.58-4.057c-.782-.57-.381-1.81.588-1.81h6.871l2.117-6.545z"
      />
    </svg>
  ));
  
  return <div className="flex">{stars}</div>;
}

function MyReviewCard() {
  return (
    <div className='bg-white mb-4 border-4 border-gray-200 shadow rounded-3xl px-10 py-4 flex items-center justify-center'>
      <div className='w-5/12 flex items-center justify-center gap-x-5'>
        <img src="/image/option6.png" className='bg-gray-200' width={50} alt="Product" />
        <p>Millionaire Pendant De Luxe - Green Diamond</p>
      </div>

      <div className='w-1/6 flex items-center justify-center'>
        <p className='text-gray-500'>17/05/2024</p>
      </div>

      <div className='w-3/12 flex items-center justify-center'>
        <StarRating rating={5} /> {/* Example rating */}
      </div>

      <div className='w-1/6 flex items-center justify-center'>
        <button className='text-[#D9A251] border-2 border-[#D9A251] text-sm rounded-full px-7 py-2'>
          Update
        </button>
      </div>
    </div>
  )
}

export default MyReviewCard;
