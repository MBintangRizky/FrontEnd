import React from 'react'
import news1 from '/image/news1.png'
import news2 from '/image/news2.png'
import news3 from '/image/news3.png'

function CardLayout() {
  return (
    <div className='my-[4em]'>
      <div className='container mx-auto flex items-center justify-between mb-5'>
        <h1 className='text-3xl font-bold'>Latest News</h1>

        <div className='flex flex-row items-center gap-x-2 text-[#0C66AC]'>
          <a href="">See All</a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clipRule="evenodd" />
        </svg>

        </div>
      </div>

      <div className='container mx-auto flex items-center justify-between'>
        <div className="max-w-sm bg-white border border-gray-500 rounded-[33px] dark:bg-gray-800 dark:border-gray-700" style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.1)" }}>


            <a href="#">
                <img className=" p-2" src={news1} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Itinerary Trip Kunming April-Mei 2024</h5>
                </a>
                
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-500 rounded-[33px] dark:bg-gray-800 dark:border-gray-700" style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.1)" }}>
            <a href="#">
                <img className="rounded-t-lg p-2" src={news3} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dresscode Gala Dinner Trip Kunming April-Mei 2024</h5>
                </a>

                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

        <div className="max-w-sm bg-white border border-gray-500 rounded-[33px] dark:bg-gray-800 dark:border-gray-700" style={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.1)" }}>
            <a href="#">
                <img className="rounded-t-lg p-2" src={news2} alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Helper Trip Kunming April-Mei 2024</h5>
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>


      </div>


  

    </div>
  )
}

export default CardLayout