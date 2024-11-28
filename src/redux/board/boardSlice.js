import { createSlice } from '@reduxjs/toolkit';
import {
  getAllBoards,
  createNewBoard,
  boardBackground,
  deleteBoard,
  getBoardById,
} from './boardOperations';


const boardsSlice = createSlice({
  name: 'boards',
  initialState: {
    boards: {
      current: {},
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
      console.log('all boards state', state.action) //de lucrat aici
      console.log(' all boards payload', action.payload)
    })
    .addCase(getAllBoards.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; 
    })
    .addCase(createNewBoard.pending, (state) => {
      state.boards.isLoading = true;
    })
    .addCase(createNewBoard.fulfilled, (state, action) => {
      state.boards.isLoading = false;
      state.boards.error = null;
      [state.boards].push(action.payload);
      console.log( 'new board state', state.boards);
      console.log('new board payload', action.payload);
    })
    .addCase(createNewBoard.rejected, (state, action) => {
      state.boards.isLoading = false;
      state.boards.error = action.payload;
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
    .addCase(getBoardById.pending, (state) => {
      state.boards.isLoading = true;
    })
    .addCase(getBoardById.fulfilled, (state, action) => {
      state.boards.isLoading = false;
      state.boards.error = null;
      state.boards.current = action.payload;
      console.log('one board state', state.boards);
      console.log('one board payload', action.payload);
    })
    .addCase(getBoardById.rejected, (state, action) => {
      state.boards.isLoading = false;
      state.boards.error = action.payload;
    })
    .addCase(boardBackground.fulfilled, (state, action) => {
      state.boards = action.payload;
      state.isLoading = false;
      state.error = null;
    })
  }
})
     
      
      
      
      
      
      


export const boardsReducer = boardsSlice.reducer;