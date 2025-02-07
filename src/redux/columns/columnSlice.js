import { createSlice } from "@reduxjs/toolkit";
import { addColumn, editColumn, deleteColumn } from "./columnsOperations";

const columnsSlice = createSlice({
  name: "columns",
  initialState: {
    columns: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    updateLocalColumn: (state, action) => {
      const { id, name } = action.payload;
      const column = state.columns.find(col => col._id === id);
      if (column) column.name = name;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addColumn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.columns.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editColumn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteColumn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.isLoading = true;
        state.cards = action.payload
        state.columns = state.columns.filter((col) => col._id !== action.payload.id)
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});
export const { updateLocalColumn } = columnsSlice.actions;
export const columnsReducer = columnsSlice.reducer;
