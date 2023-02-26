import React, { useState, useEffect } from "react";
import { Logo, FormRow, AlertMessage } from "../components";
import { useGlobalContext } from "../context/context";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegistered: true,
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const [showLogin, setShowLogin] = useState(false);

  const { user, isLoading, showAlert, displayAlert, registerUser } =
    useGlobalContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isRegistered } = values;
    if (!name || !email || !password) {
      displayAlert();
      return;
    }
    const newUser = { name, email, password };

    registerUser(newUser);
  };

  useEffect(() => {
    if (user.token) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user.token, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border-t-4 border-[#75c9b7]">
        <div className="flex flex-col items-center mb-6">
          <Logo />
          <h2 className="text-2xl font-medium text-center mt-6">
            {showLogin ? "Login" : "Register"}
          </h2>
          {showAlert && <AlertMessage />}
        </div>
        <form onSubmit={handleSubmit}>
          {showLogin ? null : (
            <FormRow
              type="text"
              name="Name"
              value={values.name}
              handleChange={handleChange}
              id="name"
            />
          )}
          <FormRow
            type="email"
            name="Email"
            value={values.email}
            handleChange={handleChange}
            id="email"
          />
          <FormRow
            type="password"
            name="Password"
            value={values.password}
            handleChange={handleChange}
            id="password"
          />
          <button
            type="submit"
            className="w-full bg-[#ffe26a] hover:bg-[#f7d13c] text-white py-2 px-4 rounded-md mb-4"
            disabled={isLoading}
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
