import { createSlice } from "@reduxjs/toolkit";
import { addColumn } from "./columnsOperations";

const columnsSlice = createSlice({
  name: "columns",
  initialState: {
    columns: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addColumn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.columns.push(action.payload); 
        console.log(action.payload)
        state.isLoading = false;
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const columnsReducer = columnsSlice.reducer;
