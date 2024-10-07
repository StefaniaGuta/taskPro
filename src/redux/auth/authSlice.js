import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
} from './authOperations';

import { updateTheme } from '../../redux/theme/themeOperation';


const initialState = {
  user: { name: null, email: null, avatarURL: null },
  token: null,
  isLoggedIn: null,
  theme: 'light'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = null;
        state.isLoggedIn = true;
        state.theme = action.payload.user.theme || 'light';
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.theme = action.payload.user.theme || 'light';
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(updateTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload;
      })
  },
});

export const authReducer = authSlice.reducer;