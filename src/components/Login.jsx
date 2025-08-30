import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);


  const toggeleSignInForm = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className="relative h-screen w-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_medium.jpg"
          alt="background"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Login Form */}
      <div className="flex justify-center items-center h-full">
        <form className="relative z-10 bg-black bg-opacity-75 p-8 rounded-2xl w-96 shadow-lg">

          <>
            <h2 className="text-white text-2xl font-bold mb-6 text-center">
              {isSignIn ? '  Sign In' : 'Sign Up'}
            </h2>
          { !isSignIn &&
              <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          }

            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
            /></>


          <button className="w-full bg-red-600  text-white font-semibold py-3 rounded transition duration-200">
            {isSignIn ? '  Sign In' : 'Sign Up'}
          </button>
          <p className="text-gray-400 text-sm mt-4 text-center">


            {isSignIn ? 'New to Netflix?' : 'Already Registered?'} 
             
            <a href="#" className="text-white hover:underline" onClick={toggeleSignInForm}>
              {isSignIn ? ' Sign up now' : ' Sign in now'}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
