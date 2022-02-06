import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API } from '../CONST/api-endpoints';
import { AUTH_TYPES_PREFIX } from '../CONST/types-prefix-auth/types-prefix-auth';
import dataService from '../services/auth.service';

export const registration = createAsyncThunk(
  AUTH_TYPES_PREFIX.registrationAction,
  async (data) => {
    try {
      const res = await dataService.post(API.registration, data);
      return res.data;
    } catch (e) {
      return e.response.data.message;
    }
  }
);

export const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isAuth: false,
    isLoading: false,
  },
  extraReducers: {
    [registration.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = action.payload;
    },
    [registration.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registration.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
  },
});

export default AuthSlice.reducer;
// export const authAsyncActions = asyncApiAuth;
