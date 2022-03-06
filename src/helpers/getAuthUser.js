export const getAuthUserStorage = () => {
  return JSON.parse(localStorage.getItem('user'))?.accessToken;
};
