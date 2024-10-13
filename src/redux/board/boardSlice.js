import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  createNewBoard,
} from './boardOperations';


const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    boards: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: builder => {
    builder
    .addCase(getAllBoards.pending, (state) => {
      state.isLoading = false;
      state.error = null;
    })
    .addCase(getAllBoards.fulfilled, (state, action) => {
      state.isLoading = false;
      state.boards = action.payload; 
    })
    .addCase(getAllBoards.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; 
    })
      .addCase(createNewBoard.fulfilled, (state, action) => {
        state.boards.items = action.payload; 
        state.isLoading = false;
        state.error = null;
      })
      
  }
})
     
      
      
      
      
      
      


export const boardsReducer = boardsSlice.reducer;