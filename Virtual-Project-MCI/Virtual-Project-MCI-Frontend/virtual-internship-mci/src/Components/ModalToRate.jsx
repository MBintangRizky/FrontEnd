import React, { useState } from 'react';

function StarRating({ rating, setRating }) {
  const stars = Array(5).fill(0).map((_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      fill={index < rating ? "#FFD700" : "none"}
      viewBox="0 0 24 24"
      stroke={index < rating ? "#FFD700" : "currentColor"}
      className="w-5 h-5 cursor-pointer"
      onClick={() => setRating(index + 1)}
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

function ReviewModal({ isOpen, onClose }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [showUsername, setShowUsername] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/2">
        <div className="bg-blue-600 text-white py-4 px-6 rounded-t-lg text-center">
          <h2 className="text-xl flex items-center mx-auto justify-center gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>

            Share a Review
          </h2>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Rating <span className="text-red-500">*</span>
            </label>
            <StarRating rating={rating} setRating={setRating} />

            <div className='flex items-center gap-x-5'>
              <button className='w-1/2 flex flex-col items-center border-2 border-red-500 p-3 rounded-md my-5 text-red-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>

                Add Photo
              </button>
              <button className='w-1/2 flex flex-col items-center border-2 border-red-500 p-3 rounded-md my-5 text-red-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>

                Add Video
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Review <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded"
              rows="4"
              placeholder="Write your review..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-4 flex items-center">
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={showUsername} 
                onChange={(e) => setShowUsername(e.target.checked)} 
              />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show username in your review</span>
            </label>
          </div>
          <div className="flex justify-end">
            <button 
              className="text-gray-600 mr-4"
              onClick={onClose}
            >
              Cancel
            </button>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded"
              onClick={() => {
                // Handle send review logic here
                console.log({ rating, review, showUsername });
                onClose();
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
