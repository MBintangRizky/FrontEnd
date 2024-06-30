import React, { useState } from 'react';
import LayoutAdmin from '../LayoutAdmin';

function MyLikes() {
  const [liked, setLiked] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleSelectAll = (e) => {
    setSelectAll(e.target.checked);
 
  };
  
  return (
    <LayoutAdmin>

      <div className='flex items-center justify-between'>
        <h1 className="text-2xl font-bold mb-4">My Likes</h1>
        <div class="flex items-center">
            <input  checked={selectAll}
            onChange={handleSelectAll} id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="checked-checkbox" class="ms-2 text-lg font-medium text-gray-900 dark:text-gray-300">Select All</label>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-10 items-center'>

        <div className="max-w-sm bg-white shadow rounded-lg shadow-lg relative">
          <button className="absolute top-2 right-2" onClick={handleLikeClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={liked ? 'red' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke={liked ? 'red' : 'gray'} className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          <div className='bg-gray-200 rounded-t-lg p-4'>
            <a href="/products/1">
              <img className="rounded-t-lg p-2 h-72 mx-auto" src="/image/product1.png" alt="" />
            </a>
          </div>
          <div className="p-5">
            <a href="/products/1">
              <h5 className="mb-2 text-xl tracking-tight text-gray-900 hover:text-[#DBA253] dark:text-white">Product 1 SKU</h5>
            </a>

            <div className='mt-5 flex items-center justify-between mb-0'>
              <p>Product 1 Price</p>
              <button className='bg-[#DBA253] rounded-full p-3 text-white' onClick={() => addToCart(product)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white shadow rounded-lg shadow-lg relative">
          <button className="absolute top-2 right-2" onClick={handleLikeClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={liked ? 'red' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke={liked ? 'red' : 'gray'} className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          <div className='bg-gray-200 rounded-t-lg p-4'>
            <a href="/products/1">
              <img className="rounded-t-lg p-2 h-72 mx-auto" src="/image/product1.png" alt="" />
            </a>
          </div>
          <div className="p-5">
            <a href="/products/1">
              <h5 className="mb-2 text-xl tracking-tight text-gray-900 hover:text-[#DBA253] dark:text-white">Product 1 SKU</h5>
            </a>

            <div className='mt-5 flex items-center justify-between mb-0'>
              <p>Product 1 Price</p>
              <button className='bg-[#DBA253] rounded-full p-3 text-white' onClick={() => addToCart(product)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-white shadow rounded-lg shadow-lg relative">
          <button className="absolute top-2 right-2" onClick={handleLikeClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill={liked ? 'red' : 'none'} viewBox="0 0 24 24" strokeWidth={1.5} stroke={liked ? 'red' : 'gray'} className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
          <div className='bg-gray-200 rounded-t-lg p-4'>
            <a href="/products/1">
              <img className="rounded-t-lg p-2 h-72 mx-auto" src="/image/product1.png" alt="" />
            </a>
          </div>
          <div className="p-5">
            <a href="/products/1">
              <h5 className="mb-2 text-xl tracking-tight text-gray-900 hover:text-[#DBA253] dark:text-white">Product 1 SKU</h5>
            </a>

            <div className='mt-5 flex items-center justify-between mb-0'>
              <p>Product 1 Price</p>
              <button className='bg-[#DBA253] rounded-full p-3 text-white' onClick={() => addToCart(product)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-end items-center mt-5 gap-x-5'>
        <button className='bg-red-500 bg-opacity-10 rounded-full text-red-500 px-4 py-2'>
          Unlike
        </button>

        <button className='bg-[#0C66AC] flex items-center gap-x-2  text-white px-4 py-2 rounded-full'>
          <img src="/image/wa-icon.png" width={20} alt="" srcset="" />
          Buy Now
        </button>
      </div>

    </LayoutAdmin>
  );
}

export default MyLikes;
