import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  createNewBoard,
} from './boardOperations';


const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
  boards: [],
  oneBoard: {},
  isLoading: false,
  error: null,
  stats: {},
  allCards: [],
  },
  extraReducers: builder => {
    builder
    .addCase(getAllBoards.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getAllBoards.fulfilled, (state, action) => {
      state.isLoading = true;
      state.boards = action.payload; 
    })
    .addCase(getAllBoards.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; 
    })
      .addCase(createNewBoard.fulfilled, (state, action) => {
        state.boards = action.payload
        console.log(action.payload);
        state.isLoading = true;
        state.error = null;


      })
      
  }
})
     
      
      
      
      
      
      


export const boardsReducer = boardsSlice.reducer;