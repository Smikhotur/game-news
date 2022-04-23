export const getAuthUserStorage = () => {
  return JSON.parse(localStorage.getItem('user'))?.accessToken;
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};

export const setCurrentUser = (base64) => {
  return JSON.parse((localStorage.user.user.avatar = base64));
};

export const cloneLocalStorage = () => {
  return JSON.parse(JSON.stringify(getCurrentUser()));
};

export const updateLocalStorage = (clone) => {
  localStorage.setItem('user', JSON.stringify(clone));
};
