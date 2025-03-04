import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: 'all',
  reducers: {
    setFilterSlice(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilterSlice } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;