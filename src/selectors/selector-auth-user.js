export const getIsAuth = (state) => {
  return state.auth.isLoggedIn;
};

export const getMessage = (state) => {
  return state.auth.message;
};
