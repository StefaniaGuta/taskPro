import axios from 'axios';


import { createAsyncThunk } from '@reduxjs/toolkit';
const THEME_API = 'https://taskpro-app-bcac9d37037a.herokuapp.com/api/auth/change-theme'

export const getTheme = createAsyncThunk(
  'users/getTheme',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(THEME_API);

      return data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTheme = createAsyncThunk(
  'users/updateTheme',
  async (newTheme, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const { data } = await axios.patch(
        'https://taskpro-app-bcac9d37037a.herokuapp.com/api/auth/change-theme', 
        { theme: newTheme },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      console.log(data);
      return data.theme;

    } catch (error) {
      console.error('Eroare la actualizarea temei:', error);
      const errorMessage = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);