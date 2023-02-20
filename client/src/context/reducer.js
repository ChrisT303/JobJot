import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions";

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
  throw new Error(`No action type provided: ${action.type}`);
};

export default reducer;
