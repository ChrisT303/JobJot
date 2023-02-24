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

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: "",
  alertType: "",
  user: null,
  token: null,
  userLocation: "",
  jobLocation: "",
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

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_START });
    try {
      console.log("Making axios request with data:", currentUser);
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log("Response data:", response.data);
      const { token, user, location } = response.data ;
      dispatch({ type: REGISTER_SUCCESS, payload: { token, user, location } });
    } catch (error) {
      console.log("Error:", error);
      dispatch({ type: REGISTER_ERROR, payload: {msg: error.response.data.msg} });
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
