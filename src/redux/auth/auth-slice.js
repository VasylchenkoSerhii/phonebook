import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./operations";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled](state, {payload}) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        }
    },
});

export const authReducer = authSlice.reducer;
