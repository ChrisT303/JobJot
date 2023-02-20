import React, { useState } from "react";
import { Logo } from "../components";

const RegisterPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border-t-4 border-[#75c9b7]">
        <div className="flex flex-col items-center mb-6">
          <Logo />
          <h2 className="text-2xl font-medium text-center mt-2">
            {showLogin ? "Login" : "Register"}
          </h2>
        </div>
        <form>
  {showLogin ? null : (
    <div className="mb-4">
      <label htmlFor="name" className="block font-medium mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="w-full border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#c7ddcc] focus:border-transparent shadow-lg"
        required
      />
    </div>
  )}
  <div className="mb-4">
    <label htmlFor="email" className="block font-medium mb-2">
      Email
    </label>
    <input
      type="email"
      id="email"
      className="w-full border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#c7ddcc] focus:border-transparent shadow-lg"
      required
    />
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block font-medium mb-2">
      Password
    </label>
    <input
      type="password"
      id="password"
      className="w-full border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#c7ddcc] focus:border-transparent shadow-lg"
      required
    />
  </div>
  <button
    type="submit"
    className="w-full bg-[#ffe26a] hover:bg-[#f7d13c] text-white py-2 px-4 rounded-md mb-4"
  >
    {showLogin ? "Login" : "Register"}
  </button>
</form>

        <div className="text-center">
          {showLogin ? (
            <>
              <span className="text-gray-600">Don't have an account?</span>
              <button
                className="text-[#75c9b7] underline ml-1"
                onClick={() => setShowLogin(false)}
              >
                Register
              </button>
            </>
          ) : (
            <>
              <span className="text-gray-600">Already have an account?</span>
              <button
                className="text-[#75c9b7] underline ml-1"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
