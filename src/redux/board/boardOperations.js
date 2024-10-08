import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL =  'https://taskpro-app-bcac9d37037a.herokuapp.com'

export const getBackgroundIcons = createAsyncThunk(
  'boards/getBackgroundIcons',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllBoards = createAsyncThunk(
  'boards/getAllBoards',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://taskpro-app-bcac9d37037a.herokuapp.com/api/boards`)
      if(!data) {
        console.log("you don't have any board yet");
      }
      console.log(data);
      return data;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        Notiflix.Notify.failure('Utilizatorul nu are carduri create încă');
      }
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewBoard = createAsyncThunk(
  'boards/createBoard',
  async (credentials, thunkAPI) => {
    try {

      const { data } = await axios.post('/api/boards', credentials);
      console.log(data, 'created');
      console.log('board was created succesfully')
      console.log(credentials);
      return data;
    } catch (error) {
      console.log(error);
      console.log(credentials);
      return thunkAPI.rejectWithValue(error.message || 'Eroare necunoscută');
    }
  }
);



export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({_, dataUpdate }, thunkAPI) => {
    try {
      const formData = new FormData();
      const { title, iconId, background } = dataUpdate;
      formData.append('title', title);
      formData.append('iconId', iconId);

      if (background !== 'on') {
        !background.type?.startsWith('image')
          ? formData.append('backgroundId', background)
          : formData.append('background', background);
      }

      const { data } = await axios.patch(
        'boards/{boardName}',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      return data.board;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        'boards/{boardName}'
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOneBoard = createAsyncThunk(
  'boards/getOneBoard',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        'boards/{boardName}'
      );

      return data.board[0];
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);