import { createAsyncThunk } from '@reduxjs/toolkit';
//import { axios, ENDPOINTS } from '../../api';
import axios from 'axios';

axios.defaults.baseURL =  'https://taskpro-app-bcac9d37037a.herokuapp.com'

export const addColumn = createAsyncThunk(
  'columns/addColumn',
  async ({ boardName, name}, thunkAPI) => { 
    try {
      const { data } = await axios.post(`/api/boards/${boardName}/column`, {
        name, 
      });

      console.log('column created');
      console.log(data);
      return data;
    } catch (error) {
      console.log(error, 'error colum');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  'columns/deleteColumn',
  async (columnId, thunkAPI) => {
    try {
      await axios.delete();
      return columnId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editColumn = createAsyncThunk(
  'columns/editColumn',
  async ({ editedColumn, id }, thunkAPI) => {
    try {
      const response = await axios.patch(

        editedColumn
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);