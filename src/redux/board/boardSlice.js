import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  createNewBoard,
  boardBackground,
  deleteBoard,
} from './boardOperations';


const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    boards: {
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
      state.boards = action.payload; 
      state.isLoading = false;
      state.error = null;
      console.log('pyload', action.payload)
    })
    .addCase(deleteBoard.pending, (state) => {
      state.isLoading = false;
      state.error = null;
    })
    .addCase(deleteBoard.fulfilled, (state, action) => {
      const deletedBoardId = action.payload.deletedBoardId;
      state.boards = action.payload.dashboards.filter(board => board._id !== deletedBoardId);
      state.isLoading = false;
    })
    .addCase(deleteBoard.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; 
    })
    .addCase(boardBackground.fulfilled, (state, action) => {
      state.boards = action.payload;
      state.isLoading = false;
      state.error = null;
    })
  }
})
     
      
      
      
      
      
      


export const boardsReducer = boardsSlice.reducer;