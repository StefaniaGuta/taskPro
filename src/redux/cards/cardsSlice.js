import { createSlice } from '@reduxjs/toolkit';
import { addCard, deleteCard, editCard} from '../cards/cardsOpeartions';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
      isLoading: false,
      error: null,
  },
extraReducers: (builder) => {
  builder
    .addCase(addCard.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addCard.fulfilled, (state, action) => {
      state.cards.push(action.payload);
      state.isLoading = false;
    })
    .addCase(addCard.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(deleteCard.pending, (state) => {
      state.isLoading = false;
      state.error = null;
    })
    .addCase(deleteCard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cards = state.cards.filter(card => card._id !== action.payload.id);
    })
    .addCase(deleteCard.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; 
    })
    .addCase(editCard.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(editCard.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
    
      const index = state.cards.findIndex(card => card._id === action.payload._id);
      if (index !== -1) {
        state.cards[index] = action.payload;
      }
    })
    .addCase(editCard.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
},
});

export const cardsReducer = cardsSlice.reducer;