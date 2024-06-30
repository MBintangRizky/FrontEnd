import React, { useState } from 'react';
import footer from '/footer.png';
import linkedIn from '/linkedin.svg';
import ig from '/ig.svg';
import facebook from '/facebook.svg';
import youtube from '/youtube.svg';
import contact from '/image/wa-contact.png';
import '../App.css';
import { Input, Button } from "@material-tailwind/react";

function Footer() {
  const [email, setEmail] = useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className='mx-auto'>
      <div className='flex mx-auto justify-center my-5'>
        <a href="">
          <img src={contact} width={200} alt="Contact" />
        </a>
      </div>

      <footer className="bg-footer text-white py-8">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <div className="mb-4">
            <img src={footer} alt="Logo footer" width={96} height={66} />
          </div>
          <div className='mx-auto text-center w-11/12'>
            <h3 className='text-2xl'>MCI | Millionaire Club Indonesia</h3>
            <p>MC-Indonesia is a club made for its members, they will enjoy not only physical health but also financial health. Our products are certified halal and Our direct selling system has been certified for Shariah compliance</p>
          </div>

          <div className='flex flex-col md:flex-row justify-between w-11/12 my-5'>
            <div className="flex flex-col md:flex-row gap-x-7 my-5">
              <div className='flex flex-col gap-y-3'>
                <p className='font-bold sm:text-center md:text-left'>Company</p>
                <ul className="text-center md:text-left mb-4 md:mb-0">
                  <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">About Us</a></li>
                  <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Blogs</a></li>
                  <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                  <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Privacy & Policy</a></li>
                  <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
                </ul>
              </div>

              <div className='flex flex-col gap-y-3'>
                <p className='font-bold sm:text-center md:text-left'>Products</p>
                <ul className="text-center md:text-left mb-4 md:mb-0">
                  <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Millionaire Health Care</a></li>
                  <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Millionaire Body Care</a></li>
                  <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Millionaire Fashion</a></li>
                  <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Millionaire Kids Care</a></li>
                  <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Millionaire Kids Marvel Series</a></li>
                </ul>
              </div>

              <div className='flex flex-col gap-y-3'>
                <div>
                  <p className='font-bold sm:text-center md:text-left'>Service</p>
                  <ul className="text-center md:text-left mb-4 md:mb-0">
                    <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Download Application</a></li>
                    <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Digital Catalogue</a></li>
                  </ul>
                </div>

                <div>
                  <p className='font-bold sm:text-center md:text-left'>Support</p>
                  <ul className="text-center md:text-left mb-4 md:mb-0">
                    <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">FAQ</a></li>
                    <li className="mb-1 text-gray-300"><a href="#" className="hover:text-gray-300">Customer Service</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-y-3 my-5 mx-auto">
              <div className="md:text-right">
                <p className='font-bold sm:text-center md:text-left'>Connect With Us</p>
                <div className='flex flex-row gap-x-2 mx-auto mt-3'>
                  <a href="#" className='text-center bg-gray-600 rounded-full p-2'>
                    <img src={linkedIn} width={15} height={15} alt="LinkedIn" />
                  </a>
                  <a href="#" className='text-center bg-gray-600 rounded-full p-2'>
                    <img src={youtube} width={15} height={15} alt="YouTube" />
                  </a>
                  <a href="#" className='text-center bg-gray-600 rounded-full p-2'>
                    <img src={facebook} width={15} height={15} alt="Facebook" />
                  </a>
                  <a href="#" className='text-center bg-gray-600 rounded-full p-2'>
                    <img src={ig} width={15} height={15} alt="Instagram" />
                  </a>
                </div>
              </div>

              <div className='w-full'>
                <p className='font-bold sm:text-center md:text-left mb-3'>Validator SN Nano Spray</p>
                <div className='w-[20em]'>
                  <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative">
                    <input 
                      type="search" 
                      id="search" 
                      className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Validator SN Nano Spray" 
                      required 
                    />
                    <button 
                      type="submit" 
                      className="text-white absolute end-2.5 bottom-2.5 bg-[#D9A251] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Check
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p>&copy; 2024 MCI WORLD. All Rights Reserved | owned by PT Millionaire Group Indonesia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
