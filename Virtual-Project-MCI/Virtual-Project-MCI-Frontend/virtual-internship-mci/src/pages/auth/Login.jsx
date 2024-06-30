import React, { useState } from 'react';
import authBg from '/image/bg-login.png';
import google from '/image/google.png';
import facebook from '/image/facebook.png';
import logo from '/logo.png';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/300.css"; // Specify weight
import "@fontsource/poppins/300-italic.css"; // Specify weight and style

async function loginUser(credentials) {
  return fetch('http://localhost:8000/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  }).then(response => response.json());
}

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await loginUser({ email, password });
    setLoading(false);
    if (response.api_token) {
      
      localStorage.setItem('api_token', response.api_token);
      window.location.href = '/';
    } else {
      setError(response.error || 'Login failed');
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
            <img src={logo} alt="Logo Navbar" width={80} height={80} srcSet="" />
          </div>
          <p className="text-xl text-white text-center">Millionaire Club Indonesia (MCI)</p>
        </div>
        <div className="w-2/3 flex items-center justify-center p-8 bg-white rounded-l-2xl">
          <div className="w-full max-w-lg p-10">
            <h1 className="text-2xl font-bold mb-2 text-center">Log In to Your Account</h1>
            <p className="text-gray-600 text-sm mb-4 text-center">Welcome back! Select method to log in:</p>
           
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="email"
                    className="block rounded-full px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-700 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    id="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <div className="relative">
                  <input
                    type="password"
                    className="block rounded-full px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white dark:bg-gray-700 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    id="password"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Password
                  </label>
                </div>
              </div>
              <div className="mb-6 flex items-center justify-between">
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
                  className="bg-[#0C66AC] rounded-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
                <p className="text-sm text-gray-600">
                  Don’t have an account? <span><a href="/register" className="text-[#DBA253]">Create an account</a></span>
                </p>
              </div>
            </form>

            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-500 after:mt-0.5 after:flex-1 after:border-t after:border-gray-500 dark:before:border-gray-500 dark:after:border-gray-500">
              <p className="mx-4 mb-0 text-sm text-center text-gray-600">Or continue with Google</p>
            </div>

            <div className="flex items-center justify-center mb-4">
              <button className="flex items-center text-gray-600 text-sm p-3 rounded-full border-solid border-2 border-gray-600 px-5">
                <img src={google} width={20} height={20} alt="" srcSet="" />
                Sign Up with Google
              </button>
   
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
