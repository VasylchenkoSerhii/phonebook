export const registerErrorReducer = (state, { payload }) => {
  state.loginError = null;
  state.registerError = payload;
};

export const logInErrorReducer = (state, { payload }) => {
  state.registerError = null;
  state.loginError = payload;
};

export const LogOutReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

export const refreshUserRedcer = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
