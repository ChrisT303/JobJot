import React, { useReducer, useContext } from "react";

import reducer from "./reducer";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./actions";

const user = localStorage.getItem("token");
const token = localStorage.getItem("token");
const userLocation = localStorage.getItem("token");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  jobLocation: userLocation || "",
};

const GlobalContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("location", JSON.stringify(location));
  };

  const removeUserLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_START });
    try {
      console.log("Making axios request with data:", currentUser);
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log("Response data:", response.data);
      const { token, user, location } = response.data;
      dispatch({ type: REGISTER_SUCCESS, payload: { token, user, location } });
      addUserLocalStorage({ user, token, location });
    } catch (error) {
      console.log("Error:", error);
      dispatch({
        type: REGISTER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  return (
    <GlobalContext.Provider value={{ ...state, displayAlert, registerUser }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { AppProvider, GlobalContext, useGlobalContext };


// authControler.js
import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, unAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError("User already exists");
  }
  const user = await User.create({ name, email, password });
  const token = user.JWTToken();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all fields");
  }
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new unAuthenticatedError("Invalid credentials");
  }

  const doPasswordsMatch = await user.comparePasswords(password);
  if (!doPasswordsMatch) {
    throw new unAuthenticatedError("Invalid credentials");
  }
  res.send("Login");
};

const updateUser = async (req, res) => {
  res.send("Update");
};

export { register, login, updateUser };
