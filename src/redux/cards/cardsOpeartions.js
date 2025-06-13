import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://backend-pro-beige.vercel.app/'

export const addCard = createAsyncThunk(
  "cards/addCard",
  async ({ boardName, id, title, description, priority, deadline}, thunkAPI) => {
    try {

      const response = await axios.post(`${URL}api/boards/${boardName}/column/${id}`, {title, description, priority, deadline});
      if (response.status !== 200) {
        throw new Error('Failed to add card');
      }
      return { ...response.data, columnId: id };
    } catch (e) {
      console.log(`${URL}api/boards/${boardName}/column/${id}`)
      console.error("Error adding card: response", e.response );
      console.error("Error adding card: data",  e.response.data );
      console.error("Error adding card: messaje",  e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteCard = createAsyncThunk(
  'cards/deleteCard',
  async ({ boardName, id}, thunkAPI) => {
    try {
      await axios.delete(`${URL}api/boards/${boardName}/${id}`);
      return { id };
    } catch (error) {
      console.log( 'error steregere card', error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editCard = createAsyncThunk(
  'cards/editCard',
  async ({ boardName, id, title, description, priority, deadline }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`${URL}api/boards/${boardName}/${id}`, {title, description, priority, deadline});
      return data;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const moveCard = createAsyncThunk( 
  'cards/moveCard',
  async ({ boardName, cardId, newColId }, thunkAPI) => {
    try {
      const response = await axios.patch(`${URL}api/boards/${boardName}/${cardId}`, {
        columnId: newColId._id
      });

      return {
        card: response.data,
        newColId: newColId._id,
      };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
