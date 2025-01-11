import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';


const URL = 'http://localhost:5000/';
export const sendHelp = createAsyncThunk(
    'needHelp/help',
    async (comment, thunkAPI) => {
    try {
     await axios.post(`${URL}api/need-help`, {comment})
     console.log('comment sent')
      
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.message);
      }
    }
)