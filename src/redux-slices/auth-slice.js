import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../CONST/api-endpoints';
import { AUTH_TYPES_PREFIX } from '../CONST/types-prefix/types-prefix-auth';
import dataService from '../services/auth.service';
import axios from 'axios';
import { API_URL } from '../services/http-common';

const user = JSON.parse(localStorage.getItem('user'));

export const registerUser = createAsyncThunk(
  AUTH_TYPES_PREFIX.registrationAction,
  async (data) => {
    try {
      const res = await dataService.post(API.registration, data);

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

export const updateInfoUserAsync = createAsyncThunk(
  AUTH_TYPES_PREFIX.updateInfoUser,
  async (data) => {
    try {
      const res = await dataService.patch(`${API.user}/${data.id}`, data.param);
      console.log(res.data);
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
  ? { isLoggedIn: true, user, message: '', isLoading: false }
  : { isLoggedIn: false, user: null, message: '', isLoading: false };

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    upDateUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;

      if (action.payload?.accessToken) {
        state.isLoggedIn = true;
        state.user = action.payload;
      } else {
        state.isLoggedIn = false;
        state.message = action.payload;
      }
    },
    [registerUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registerUser.rejected]: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;

      if (action.payload?.accessToken) {
        state.isLoggedIn = true;
        state.user = action.payload;
      } else {
        state.isLoggedIn = false;
        state.message = action.payload;
      }
    },
    [loginUser.pending.type]: (state) => {
      state.isLoading = true;
    },
    [loginUser.rejected]: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = null;
    },
    [logoutUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.user = null;
    },
    [logoutUser.pending.type]: (state) => {
      state.isLoading = true;
    },
  },
});
export const { upDateUser } = AuthSlice.actions;

export default AuthSlice.reducer;
