import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =  'https://taskpro-app-bcac9d37037a.herokuapp.com'

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ boardName, name}, thunkAPI) => { 
    try {
      const response = await axios.post(`/api/boards/${boardName}/column`, {name});
      console.log('column created');
      return response.data;
    } catch (error) {
      console.log(error, 'error column');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async ({boardName, id}, thunkAPI) => {
    try {
      const response = await axios.delete(`/api/boards/${boardName}/column/${id}`);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/editColumn',
  async (data, thunkAPI) => {
    const {boardName, id, editedColumn} = data;
    try {
      const response = await axios.patch(`/api/boards/${boardName}/column/${id}`,
        editedColumn
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);