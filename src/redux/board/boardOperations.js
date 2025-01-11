import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL =  'http://localhost:5000/'

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
      const response = await axios.get(`/api/boards`)
      if(!response.data) {
        console.log("you don't have any board yet");
      }

      return response.data;
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
      const {data} = await axios.post('/api/boards', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Eroare necunoscută');
    }
  }
);


export const updateBoard = createAsyncThunk(
  'boards/updateBoard',
  async ({boardName, dataUpdate }, thunkAPI) => {
    try {
      await axios.patch(`/api/boards/${boardName}`,{dataUpdate}); 
      console.log('edited')
      console.log(dataUpdate)
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteBoard = createAsyncThunk(
  'boards/deleteBoard',
  async (boardName, thunkAPI) => {
    try {
      await axios.delete(
        `api/boards/${boardName}`
      );
      return {name: boardName}
    } catch (error) {
      console.log('error delete', error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'boards/getOneBoard',
  async (boardName, thunkAPI) => {
    try {
      const response = await axios.get(
        `api/boards/${boardName}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const boardBackground = createAsyncThunk(
'boards/background',
async({userId, backgroundImage}, thunkAPI) => {
  try {
    const response = await axios.patch(
     `/api/auth/users/${userId}/set-background`, 
     { backgroundImage }
    );
    const cleanedBackgroundImage = response.data.replace(/\/\//g, '/');
    console.log(cleanedBackgroundImage);
    return response.data;

  }catch (error) {
    console.log(error)
  return thunkAPI.rejectWithValue(error.message);
}
});