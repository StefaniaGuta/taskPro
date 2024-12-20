import { createSlice } from '@reduxjs/toolkit';
import { addCard, deleteCard} from '../cards/cardsOpeartions';

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
      console.log(state)
    })
    .addCase(addCard.fulfilled, (state, action) => {
      state.cards.push(action.payload);
      state.isLoading = false;
      console.log('payload', action.payload)
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
      state.cards = state.cards.filter(card => card._id !== action.payload);
      
    
      console.log(action.payload)
      console.log(state.cards)
    })
  
    .addCase(deleteCard.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload; 
    })
},
});

export const cardsReducer = cardsSlice.reducer;