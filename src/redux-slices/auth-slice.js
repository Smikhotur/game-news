import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../CONST/api-endpoints';
import { AUTH_TYPES_PREFIX } from '../CONST/types-prefix-auth/types-prefix-auth';
import dataService from '../services/auth.service';
import axios from 'axios';
import { API_URL } from '../services/http-common';

const user = JSON.parse(localStorage.getItem('user'));

export const registerUser = createAsyncThunk(
  AUTH_TYPES_PREFIX.registrationAction,
  async (data) => {
    try {
      const res = await dataService.post(API.registration, data);
      console.log(res.data);

      if (res.data.accessToken) {
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

      if (res.data.accessToken) {
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
    try {
      const res = await dataService.post(API.logout);
      localStorage.removeItem('user');
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);

export const checkAuth = createAsyncThunk(
  AUTH_TYPES_PREFIX.checkAuthAction,
  async () => {
    try {
      const res = await axios.get(API_URL + API.refresh, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (res.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(res.data));
      }

      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
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
      if (action.payload?.accessToken) {
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
      if (action.payload?.accessToken) {
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
