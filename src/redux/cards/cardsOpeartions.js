import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://taskpro-app-bcac9d37037a.herokuapp.com/'

export const addCard = createAsyncThunk(
  "cards/addCard",
  async ({ boardName, columnId, title, description, priority, deadline }, thunkAPI) => {
    try {
      const newCard = {
        title,
        description,
        priority,
        deadline,
      };

      const response = await axios.post(`${URL}api/boards/${boardName}/column/${columnId}/cards`, newCard);

      return response.data;
    } catch (e) {
      console.log("Error adding card:", e);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async ({ cardId, columnId }, thunkAPI) => {
    try {
      await axios.delete();
      return { cardId, columnId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'cards/editCard',
  async ({ cardId, editedCard }, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        
        editedCard
      );

      return { card: data.card, columnId: editedCard.column };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);