export const fetchContactsReducer = (state, { payload }) => {
    state.items = payload;
};

export const addContactReducer = (state, { payload }) => {
    state.items.push(payload);
};

export const removeContactReducer = (state, { payload }) => {
    const index = state.items.findIndex(item => item.id === payload.id);
    state.items.splice(index, 1);
};

export const pendingReducer = state => {
    state.isLoading = true;
};

export const rejectedReducer = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

export const fulfilledReducer = state => {
    state.isLoading = false;
    state.error = null;
};
