import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import logo from "/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("api_token");
    if (token) {
      setIsLoggedIn(true);
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.role === "admin") {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("api_token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <nav className='bg-white p-4 fixed w-full top-0 z-10'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center'>
          <img src={logo} alt='Logo Navbar' width={50} height={50} />
        </div>
        <div className='text-black text-lg flex-grow text-center md:text-left'>
          <button className='block md:hidden' onClick={handleToggle}>
            {isOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            )}
          </button>
          <ul
            className={`md:flex md:justify-center ${
              isOpen ? "block" : "hidden"
            } md:items-center md:w-auto w-full gap-x-10`}>
            <li className='md:mx-4 my-2 md:my-0 hover:text-[#DBA253]'>
              <a href='/'>Home</a>
            </li>
            <li className='md:mx-4 my-2 md:my-0 hover:text-[#DBA253]'>
              <a href='/about-us'>About Us</a>
            </li>
            <li className='md:mx-4 my-2 md:my-0 hover:text-[#DBA253]'>
              <a href='/products'>Product</a>
            </li>
            <li className='md:mx-4 my-2 md:my-0 hover:text-[#DBA253]'>
              <a href='/join-us'>Join Us</a>
            </li>
            <li className='md:mx-4 my-2 md:my-0 hover:text-[#DBA253]'>
              <a href='/news'>News</a>
            </li>
            {isAdmin && (
              <li className='md:mx-4 my-2 md:my-0 hover:text-[#DBA253]'>
                <a href='/admin'>Admin</a>
              </li>
            )}
          </ul>
        </div>
        <div className='flex items-center'>
          {isLoggedIn ? (
            <div className='relative'>
              <button onClick={handleToggle}>
                <img
                  src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww'
                  width={30}
                  alt=''
                  className='rounded-full cursor-pointer'
                />
              </button>
              {isOpen && (
                <div className='absolute top-12 right-0 bg-white rounded-lg shadow-lg p-4'>
                  <button
                    onClick={handleLogout}
                    className='block w-full text-left py-2 px-4 hover:bg-gray-100'>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <a href='/login' className='text-[#0C66AC] mr-4 text-md'>
                Login
              </a>
              <a
                href='/register'
                className='bg-[#0C66AC] hover:bg-blue-700 text-white py-2 px-4 rounded-full text-md'>
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
