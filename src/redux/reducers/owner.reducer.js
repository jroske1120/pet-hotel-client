const setOwner = (state = [], action) => {
    if (action.type === 'SET_OWNER') {
        return action.payload;
    }
    return state
};

export default setOwner;