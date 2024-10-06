import { createSlice } from '@reduxjs/toolkit';
import {

  createNewBoard,
} from './boardOperations';


const boardsSlice = createSlice({
  name: 'board',
  initialState: {
    boards: [],
    oneBoard: {},
    background: [],
    isLoading: false,
    error: null,
    stats: {},
    allCards: [],
  },
  extraReducers: builder => {
    builder
      
      .addCase(createNewBoard.fulfilled, (state, action) => {
        state.name = action.payload
        state.background = action.payload;
        state.icon = action.payload;
        state.isLoading = false;
        state.error = null;
        console.log(action.payload);
      })
  }
})
     
      
      
      
      
      
      


export const boardsReducer = boardsSlice.reducer;