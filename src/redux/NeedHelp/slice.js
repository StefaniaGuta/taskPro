import { createSlice } from '@reduxjs/toolkit';
import {sendHelp} from '../NeedHelp/operations';

const initialState = {
  comment : '',
  isLoading: false,
  error: null,
};

export const needHelpSlice = createSlice({
  name: 'needHelp',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(sendHelp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendHelp.fulfilled, (state, action) => {
        state.comment = action.payload;
        state.isLoading = true;
        state.error = null;
      })
      .addCase(sendHelp.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.error.message;
      });
  },
});

export const needHelpReducer = needHelpSlice.reducer;
