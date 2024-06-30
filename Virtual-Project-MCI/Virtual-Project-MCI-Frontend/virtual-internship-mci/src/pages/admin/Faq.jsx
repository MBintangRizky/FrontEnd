import React, { useState, useEffect } from 'react';
import LayoutAdmin from '../LayoutAdmin';

function Faq() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const token = localStorage.getItem('api_token');
        const response = await fetch('http://localhost:8000/faq', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching the FAQs:', error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <LayoutAdmin>
      <p className='text-center text-2xl text-gray-800 mb-5'>FAQ</p>

      <div className="flex flex-col gap-y-5">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className="transition-all duration-200 bg-white rounded-lg border-2 border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
          >
            <button
              type="button"
              onClick={() => toggleAccordion(index)}
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 text-gray-400 ${activeAccordion === index ? 'transform rotate-180' : ''}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div
              style={{ display: activeAccordion === index ? 'block' : 'none' }}
              className="px-4 pb-5 sm:px-6 sm:pb-6"
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-10'>
        <p className='text-center text-2xl text-gray-800 mb-5'>Contact Us</p>
        <div className='bg-white rounded-full border-2 border-gray-200 shadow-lg'>
          <img src="/image/wa-contact.png" width={200} className='px-5 py-3' alt="Contact WA" />
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default Faq;
