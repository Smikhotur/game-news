export const getAuthUserStorage = () => {
  return JSON.parse(localStorage.getItem('user'))?.accessToken;
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};
