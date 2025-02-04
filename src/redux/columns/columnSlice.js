import { createSlice } from "@reduxjs/toolkit";
import { addColumn, editColumn } from "./columnsOperations";

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
        console.log(action.payload)
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editColumn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedColumn = action.payload; 
        state.columns = state.columns.map(column =>
            column._id === updatedColumn._id ? { ...column, ...updatedColumn } : column
        );
        console.log('payload', action.payload)
    })
    
      .addCase(editColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
  },
});
export const { updateLocalColumn } = columnsSlice.actions;
export const columnsReducer = columnsSlice.reducer;
