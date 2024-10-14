import { createSlice } from '@reduxjs/toolkit';
import { addCard} from '../cards/cardsOpeartions';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {
      items: [],
      isLoading: false,
      error: null,
    },
  },
extraReducers: (builder) => {
  builder
    .addCase(addCard.pending, (state) => {
      state.cards.isLoading = true;
    })
    .addCase(addCard.fulfilled, (state, action) => {
      state.cards.isLoading = false;
      state.cards.error = null;
      state.cards.items.push(action.payload);
    })
    .addCase(addCard.rejected, (state, action) => {
      state.cards.isLoading = false;
      state.cards.error = action.payload;
    })
},
});

export const cardsReducer = cardsSlice.reducer;