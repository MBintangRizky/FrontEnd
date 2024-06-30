import React from 'react';

function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3 p-6">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m-6 4a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-center mb-2">
            You have successfully rated this product
          </h2>
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
