import { createSlice } from "@reduxjs/toolkit";
import { addColumn} from "./columnsOperations";

const columnsSlice = createSlice({
  name: "columns",
  initialState: {
    columns: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addColumn.pending, (state) => {
        state.columns.isLoading = true;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.columns.isLoading = false;
        state.columns.error = null;
        state.columns.items.push(action.payload); 
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.columns.isLoading = false;
        state.columns.error = action.payload;
      })
  },
});

export const columnsReducer = columnsSlice.reducer;