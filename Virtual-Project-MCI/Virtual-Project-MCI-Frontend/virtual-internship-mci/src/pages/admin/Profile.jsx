import React, { useEffect, useState } from 'react';
import LayoutAdmin from '../LayoutAdmin';
import { jwtDecode } from 'jwt-decode';

function Profile() {
  const [user, setUser] = useState({
    name: '',
    jenis_kelamin: '', // Align with backend field name
    email: '',
    no_hp: '', // Align with backend field name
    alamat: '', // Align with backend field name
    photo: ''
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('api_token');
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.sub;

      fetch(`http://localhost:8000/penggunas/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => response.json())
        .then(data => {
          setUser({
            name: data.user.name,
            jenis_kelamin: data.user.jenis_kelamin || '', 
            email: data.user.email,
            no_hp: data.user.no_hp || '', 
            alamat: data.user.alamat || '', 
            photo: data.user.photo || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww'
          });
        })
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('api_token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.sub;

    fetch(`http://localhost:8000/penggunas/${userId}`, {
      method: 'POST', // Assuming POST method for update
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        jenis_kelamin: user.jenis_kelamin, 
        no_hp: user.no_hp, 
        alamat: user.alamat, 
        photo: user.photo
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setSuccess(true);
        // console.log('User updated successfully:', data);
        
      })
      .catch(error => console.error('Error updating user data:', error));
  };

  return (
    <LayoutAdmin>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p className='text-gray-500'>Update your photo and personal details here</p>

      <div className='flex mt-5 max-w-5xl'>
        <div className="flex flex-col items-center mr-8">
          <img
            src={user.photo}
            alt="Profile"
            className="w-32 h-32 rounded-full mb-4"
          />
          <input type="file" accept="image/*" className="mb-4" />
        </div>

        <div className='w-full'>
          <div className="bg-white border-2 border-gray-200 shadow-md rounded-2xl p-10 mb-4">
            <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
            {success && (    <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
              <span className="font-medium">Success!</span> User Data Updated.
            </div>)}
        
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  id="gender"
                  name="jenis_kelamin" // Align with backend field name
                  value={user.jenis_kelamin}
                  onChange={handleInputChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="">Select Gender</option>
                  <option value="Laki-laki">Male</option> {/* Assuming 'Laki-laki' is male in Indonesian */}
                  <option value="Perempuan">Female</option> {/* Assuming 'Perempuan' is female in Indonesian */}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="no_hp" // Align with backend field name
                  value={user.no_hp}
                  onChange={handleInputChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  name="alamat" // Align with backend field name
                  value={user.alamat}
                  onChange={handleInputChange}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default Profile;
