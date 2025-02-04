import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'http://localhost:5000/'

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ boardName, name}, thunkAPI) => { 
    try {
     const response = await axios.post(`${URL}api/boards/${boardName}/column`, {name});
      return  { ...response.data, boardName };
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
     const response = await axios.delete(`${URL}api/boards/${boardName}/column/${id}`);
      console.log('columns deleted')
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/editColumn',
  async (columnData, thunkAPI) => {
    try {
      const {boardName, id, name} = columnData;
      await axios.patch(`/api/boards/${boardName}/column/${id}`, {name});
      return {name};
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

