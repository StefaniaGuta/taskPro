import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';
import { useParams } from 'react-router-dom';

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
  async ({boardName, dataUpdate }, thunkAPI) => {
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
        `api/boards/${boardName}`,
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
  async (boardName, thunkAPI) => {
    try {
      const response = await axios.delete(
        `api/boards/${boardName}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getBoardById = createAsyncThunk(
  'boards/getOneBoard',
  async (credentials, thunkAPI) => {
    const boardName = useParams()
    try {
      const response = await axios.get(
        `api/boards/${boardName}`, credentials
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);