import { createSlice } from '@reduxjs/toolkit';
import { getTheme, updateTheme } from './themeOperation';

const initialState = {
  theme: 'dark',
  isLoading: false,
  error: null,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTheme.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getTheme.fulfilled, (state, action) => {
        state.theme = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTheme.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(updateTheme.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateTheme.fulfilled, (state, action) => {
        state.theme = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateTheme.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const themeReducer = themeSlice.reducer;