import { initialState } from "./context";
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
} from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertMessage: "All fields must have an input.",
      alertType: "danger",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertMessage: "",
      alertType: "",
    };
  }
  if (action.type === REGISTER_START) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === REGISTER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertMessage: "Registration successful.",
    };
  }
  if (action.type === REGISTER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertMessage: action.payload.msg,
    };
  }
  if (action.type === LOGIN_START) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertMessage: "Login Successful.",
    };
  }
  if (action.type === LOGIN_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertMessage: action.payload.msg,
    };
  }
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === USER_LOGOUT) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: "",
      jobLocation: "",
    };
  }
  if (action.type === UPDATE_START) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertMessage: "Profile Updated!",
    };
  }
  if (action.type === UPDATE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertMessage: action.payload.msg,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === CLEAR_INPUTS) {
    const clearedInputs = {
      modifying: false,
      modifyJobId: "",
      position: "",
      company: "",
      jobLocation: state.userLocation,
      jobType: "Full Time",
      status: "Applied",
    };
    return {
      ...state,
      ...clearedInputs,
    };
  }
  if (action.type === CREATE_START) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === CREATE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertMessage: "Job Created!",
    };
  }
  if (action.type === CREATE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertMessage: action.payload.msg,
    };
  }
  if (action.type === GET_JOBS_START) {
    return {
      ...state,
      isLoading: true,
      showAlert: false,
    };
  }
  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      allJobs: action.payload.allJobs,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === SET_EDIT) {
    const job = state.jobs.find((job) => job._id === action.payload.id);
    const { _id, position, company, jobLocation, jobType, status } = job;
    return {
      ...state,
      modifying: true,
      modifyJobId: _id,
      position,
      company,
      jobLocation,
      jobType,
      status,
    };
  }
  throw new Error(`No action type provided: ${action.type}`);
};

export default reducer;
