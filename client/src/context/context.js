import React, { useReducer, useContext } from "react";

import reducer from "./reducer";
import axios from "axios";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  TOGGLE_SIDEBAR,
  USER_LOGOUT,
  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_ERROR,
  HANDLE_CHANGE,
  CLEAR_INPUTS,
  CREATE_START,
  CREATE_SUCCESS,
  CREATE_ERROR,
  GET_JOBS_START,
  GET_JOBS_SUCCESS,
  SET_EDIT,
  DELETE_START,
  MODIFY_START,
  MODIFY_SUCCESS,
  MODIFY_ERROR,
} from "./actions";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const userLocation = localStorage.getItem("location");

const initialState = {
  isLoading: false,
  showAlert: false,
  alertMessage: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  showSidebar: false,
  modifying: false,
  modifyJobId: "",
  position: "",
  company: "",
  jobLocation: userLocation || "",
  jobTypeChoices: [
    "Full Time",
    "Part Time",
    "Contract",
    "Internship",
    "Remote",
  ],
  jobType: "Full Time",
  statusChoices: ["Applied", "Interview", "Offer", "Declined"],
  status: "Applied",
  jobs: [],
  allJobs: 0,
  numOfPages: 0,
  page: 1,
};

const GlobalContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        userLogout();
      }

      return Promise.reject(error);
    }
  );

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
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_START });
    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      //   console.log(response)
      const { user, token, location } = response.data;
      dispatch({ type: REGISTER_SUCCESS, payload: { token, user, location } });
      addUserLocalStorage({ user, token, location });
    } catch (error) {
      //   console.log(error.response);
      dispatch({
        type: REGISTER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_START });
    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token, location } = data;
      dispatch({ type: LOGIN_SUCCESS, payload: { token, user, location } });
      addUserLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    console.log(
      "toggleSidebar called before state update, showSidebar is",
      state.showSidebar
    );
    dispatch({ type: TOGGLE_SIDEBAR });
    console.log(
      "toggleSidebar called after state update, showSidebar is",
      state.showSidebar
    );
  };

  const handleChange = ({ value, name }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { value, name } });
  };

  const clearInputs = () => {
    dispatch({ type: CLEAR_INPUTS });
  };

  const userLogout = () => {
    dispatch({ type: USER_LOGOUT });
    removeUserLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_START });
    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);
      const { user, token, location } = data;
      dispatch({ type: UPDATE_SUCCESS, payload: { token, user, location } });
      addUserLocalStorage({ user, token, location });
    } catch (error) {
      if (error.response.status === 401) {
        dispatch({
          type: UPDATE_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const createJob = async () => {
    dispatch({ type: CREATE_START });
    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authFetch.post("/jobs", {
        position,
        company,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: CREATE_SUCCESS });
      dispatch({ type: CLEAR_INPUTS });
      // clearInputs();
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getJobs = async () => {
    let url = `/jobs`;

    dispatch({ type: GET_JOBS_START });
    try {
      const { data } = await authFetch.get(url);
      const { jobs, allJobs, numOfPages } = data;
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: { jobs, allJobs, numOfPages },
      });
    } catch (error) {
      console.log(error.response);
      // userLogout();
    }
    clearAlert();
  };

  const setJobEdit = (id) => {
    dispatch({ type: SET_EDIT, payload: { id } });
  };

  const deleteJob = async (job_id) => {
    dispatch({ type: DELETE_START });
    try {
      await authFetch.delete(`/jobs/${job_id}`);
      getJobs();
    } catch (error) {
      console.log(error.response);
      // userLogout();
    }
  };

  const modifyJob = async () => {
    dispatch({ type: MODIFY_START });
    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authFetch.patch(`/jobs/${state.modifyJobId}`, {
        position,
        company,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: MODIFY_SUCCESS });
      dispatch({ type: CLEAR_INPUTS });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: MODIFY_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        userLogout,
        updateUser,
        handleChange,
        clearInputs,
        createJob,
        getJobs,
        setJobEdit,
        deleteJob,
        modifyJob,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { AppProvider, GlobalContext, useGlobalContext, initialState };
