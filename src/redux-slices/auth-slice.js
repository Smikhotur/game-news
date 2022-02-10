import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../CONST/api-endpoints';
import { AUTH_TYPES_PREFIX } from '../CONST/types-prefix-auth/types-prefix-auth';
import dataService from '../services/auth.service';

const user = JSON.parse(localStorage.getItem('user'));

export const registerUser = createAsyncThunk(
  AUTH_TYPES_PREFIX.registrationAction,
  async (data) => {
    try {
      const res = await dataService.post(API.registration, data);

      if (res.data.token) {
        localStorage.setItem('user', JSON.stringify(res.data));
      }

      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);

export const loginUser = createAsyncThunk(
  AUTH_TYPES_PREFIX.loginAction,
  async (data) => {
    try {
      const res = await dataService.post(API.login, data);

      if (res.data.token) {
        localStorage.setItem('user', JSON.stringify(res.data));
      }

      return res.data;
    } catch (e) {
      console.log(e.response.data.message);
      return e.response.data.message;
    }
  }
);

export const logoutUser = createAsyncThunk(
  AUTH_TYPES_PREFIX.logoutAction,
  async () => {
    await dataService.logout();
  }
);

const initialState = user
  ? { isLoggedIn: true, user, message: '' }
  : { isLoggedIn: false, user: null, message: '' };

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      if (action.payload?.token) {
        state.isLoggedIn = true;
        state.user = action.payload;
      } else {
        state.isLoggedIn = false;
        state.message = action.payload;
      }
    },
    [registerUser.rejected]: (state) => {
      state.isLoggedIn = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      if (action.payload?.token) {
        state.isLoggedIn = true;
        state.user = action.payload;
      } else {
        state.isLoggedIn = false;
        state.message = action.payload;
      }
    },
    [loginUser.rejected]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logoutUser.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default AuthSlice.reducer;
