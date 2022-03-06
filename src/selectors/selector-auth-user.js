export const getIsAuthSelector = (state) => {
  return state.auth.isLoggedIn;
};

export const getUserSelector = (state) => {
  return state.auth.user;
};

export const getMessageSelector = (state) => {
  return state.auth.message;
};
