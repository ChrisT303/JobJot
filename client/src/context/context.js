import React, {  useReducer, useContext } from "react";

import reducer from "./reducer";

const initialState = {
    isLoading: false,
    showAlert: false,
    alertMessage: "",
    alertType: "",
};

const GlobalContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <GlobalContext.Provider value={{...state}}>
        {children}
    </GlobalContext.Provider>
}

const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export { AppProvider, GlobalContext, useGlobalContext}
