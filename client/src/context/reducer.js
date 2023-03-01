import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIDEBAR_TOGGLE,
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
  if (action.type === SIDEBAR_TOGGLE) {
    return {
      ...state,
      sideBarOpen: !state.sideBarOpen,
    };
  }
  throw new Error(`No action type provided: ${action.type}`);
};

export default reducer;
