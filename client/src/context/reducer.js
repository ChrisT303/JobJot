const reducer = (state, action) => {
    throw new Error(`No action type provided: ${action.type}`);
}

export default reducer;