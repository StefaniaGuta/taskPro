import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  refreshUser,
} from './authOperations';


const initialState = {
  user: { name: null, email: null },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending)
      .addCase(logIn.pending)
      .addCase(logOut.pending)
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.isRefreshing = true;
      })
      .addCase(register.fulfilled)
      .addCase(logIn.fulfilled)
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = { ...payload };  // Asigură-te că payload-ul conține 'name' și 'email'
        state.token = payload.tokenAccess;  // Dacă 'tokenAccess' este prezent în payload
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isLoading = false;
      })
      .addCase(register.rejected)
      .addCase(logIn.rejected)
      .addCase(logOut.rejected)
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = payload;
      })
      
  },
});

export const authReducer = authSlice.reducer;