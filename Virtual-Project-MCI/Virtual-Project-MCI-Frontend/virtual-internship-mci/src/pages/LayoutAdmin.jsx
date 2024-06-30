import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function LayoutAdmin({ children }) {
  const location = useLocation();

  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleLogout = () => {
    // Handle logout logic here
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="flex min-h-[90vh] mt-[4.5em] w-max-xl">

      <aside className="w-1/4 bg-white text-[#1C1B1F] shadow-xl border-4 border-gray-200 p-4 rounded-tr-3xl flex flex-col justify-between">

        <div className='my-5 flex flex-col justify-center items-center gap-y-5'>
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" width={80} alt="" className="rounded-full cursor-pointer" />
          <p className='text-black'>Andrew Garfield</p>
        </div>

        <nav>
          <ul>
            <li className="mb-2">
              <NavLink
                to="/admin"
                exact
                className={`flex items-center gap-x-2 p-2 ${isActive("/admin") ? 'bg-[#005FAF] text-white' : 'hover:bg-gray-200'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
                Dashboard
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/admin/profile"
                className={`flex items-center gap-x-2 p-2 ${isActive("/admin/profile") ? 'bg-[#005FAF] text-white' : 'hover:bg-gray-200'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                </svg>
                Profile
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/admin/my-likes"
                className={`flex items-center gap-x-2 p-2 ${isActive("/admin/my-likes") ? 'bg-[#005FAF] text-white' : 'hover:bg-gray-200'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                My Likes
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/admin/review"
                className={`flex items-center gap-x-2 p-2 ${isActive("/admin/review") ? 'bg-[#005FAF] text-white' : 'hover:bg-gray-200'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                Review
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/admin/faq"
                className={`flex items-center gap-x-2 p-2 ${isActive("/admin/faq") ? 'bg-[#005FAF] text-white' : 'hover:bg-gray-200'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                </svg>
                Help Centre
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="mt-auto">
          <ul>
            <li className="mb-2">
              <NavLink
                to=""
                onClick={(e) => {
                  e.preventDefault();
                  setShowLogoutConfirmation(true);
                }}
                className="flex items-center gap-x-2 p-2 hover:bg-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                </svg>
                Log out
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      <main className="w-3/4 max-w-7xl px-7 py-4 overflow-auto">
        {children}
      </main>

      {showLogoutConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white px-[10em] py-[4em] rounded-lg">
            <p className="text-lg">Are you sure you want to log out?</p>
            <div className="flex justify-center mt-10">
              <button className="w-1/2 mr-2 bg-white text-[#5F9AC8] border-2 border-[#5F9AC8] rounded-full px-5 py-2.5 hover:bg-[#5F9AC8] hover:text-white" onClick={() => setShowLogoutConfirmation(false)}>No</button>
              <button className="w-1/2 ml-2 bg-white border-2 border-red-500 text-red-500 rounded-full px-5 py-2.5 hover:bg-red-500 hover:text-white" onClick={handleLogout}>Yes</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default LayoutAdmin;

