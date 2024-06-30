import React, { useState } from 'react';
import authBg from '/image/bg-login.png';
import google from '/image/google.png';
import facebook from '/image/facebook.png';
import logo from '/logo.png';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/300.css"; // Specify weight
import "@fontsource/poppins/300-italic.css"; // Specify weight and style

function Register() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { firstName, lastName, email, password } = formData;
      const name = `${firstName} ${lastName}`;

      const response = await fetch('http://localhost:8000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      if (!response.ok) {
        throw new Error('Registration failed.');
      }
      const data = await response.json();
      setLoading(false);
      setMsg(data.message);
    } catch (error) {
      console.error('Error during registration:', error);
      setLoading(false);
      setMsg('Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100">
      <div
        className="flex rounded shadow-md bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${authBg})`,
          width: '100%',
          maxWidth: '1800px',
          minHeight: '100vh',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backgroundBlendMode: 'normal',
        }}
      >
        <div className="w-1/3 flex flex-col gap-y-5 justify-center items-center p-8 bg-opacity-75">
          <div className="flex items-center">
            <img src={logo} alt="Logo Navbar" width={80} height={80} />
          </div>
          <p className="text-xl text-white text-center">Millionaire Club Indonesia (MCI)</p>
        </div>
        <div className="w-2/3 rounded-l-2xl flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-lg p-10">
            <h1 className="text-2xl font-bold mb-4 text-center">Create Account</h1>
            {msg && <p className="text-sm text-center text-green-400 mb-5">{msg}</p>}
            <form onSubmit={handleSubmit}>
              <div className='flex items-center justify-between gap-x-2'>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="block rounded-full px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                    id="firstName"
                    name="firstName"
                    placeholder=""
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    First Name
                  </label>
                </div>
                <div className="relative mb-4">
                  <input
                    type="text"
                    className="block rounded-full px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                    id="lastName"
                    name="lastName"
                    placeholder=""
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <div className="relative mb-4">
                <input
                  type="email"
                  className="block rounded-full px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                  id="email"
                  name="email"
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Email
                </label>
              </div>
              <div className="relative mb-4">
                <input
                  type="password"
                  className="block rounded-full px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                  id="password"
                  name="password"
                  placeholder=""
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
                >
                  Password
                </label>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center mb-[0.125rem] block min-h-[1.5rem]">
                  <input className="mr-2 leading-tight" id="remember" type="checkbox" />
                  <label className="text-gray-700 text-sm font-bold" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#!" className="text-[#DBA253] text-sm">
                  Forgot password?
                </a>
              </div>
              <div className="flex flex-col gap-y-2">
                <button
                  className="bg-[#0C66AC] rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
                <p className="text-sm text-gray-600">
                  Already have an account?{' '}
                  <span>
                    <a href="/login" className="text-[#DBA253]">
                      Login
                    </a>
                  </span>
                </p>
              </div>
            </form>
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-500 after:mt-0.5 after:flex-1 after:border-t after:border-gray-500">
              <p className="mx-4 mb-0 text-center text-gray-600 text-sm">Or</p>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <button className="flex items-center text-gray-600 text-sm p-3 rounded-full border-solid border-2 border-gray-600 px-5">
                <img src={google} width={20} height={20} alt="" />
                Sign Up with Google
              </button>
              {/* <button className="flex items-center text-gray-600 text-sm p-3 rounded-full border-solid border-2 border-gray-600">
                <img src={facebook} width={20} height={20} alt="" />
                Sign Up with Facebook
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
