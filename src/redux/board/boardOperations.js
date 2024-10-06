import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
      const { res } = await axios.get(`/api/boards`);
      console.log( 'all boards', res)
      return res.data;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createNewBoard = createAsyncThunk(
  'boards/createBoard',
  async (newBoard, thunkAPI) => {
    try {
      const formData = new FormData();
      const { title, iconId, background } = newBoard;

      formData.append('title', title);
      formData.append('iconId', iconId);

      if (background && typeof background === 'object' && background.type?.startsWith('image')) {
        formData.append('background', background);
      } else {
        formData.append('backgroundId', background);
      }

      const { data } = await axios.post(
        '/api/boards',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      console.log(data, 'created')
      return data.board;
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.message);
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