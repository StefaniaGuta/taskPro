import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const updateTheme = createAsyncThunk(
  'users/updateTheme',
  async (newTheme, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        'https://taskpro-app-bcac9d37037a.herokuapp.com/api/auth/change-theme', 
        { theme: newTheme },
      );

      return data.theme;

    } catch (error) {
      console.error('Eroare la actualizarea temei:', error);
      const errorMessage = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);