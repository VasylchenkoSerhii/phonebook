import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';
import {
  registerErrorReducer,
  logInErrorReducer,
  LogOutReducer,
  refreshUserRedcer,
} from './caseReducer';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  registerError: null,
  loginError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(register.rejected, registerErrorReducer)
      .addCase(logIn.rejected, logInErrorReducer)
      .addCase(logOut.fulfilled, LogOutReducer)
      .addCase(refreshUser.fulfilled, refreshUserRedcer)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
          state.loginError = null;
          state.registerError = null;
        }
      );
  },
});

export const authReducer = authSlice.reducer;
