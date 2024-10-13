import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';



export const sendHelp = createAsyncThunk(
    'needHelp/help',
    async (comment, thunkAPI) => {
    try {
     await axios.post('https://taskpro-app-bcac9d37037a.herokuapp.com/api/need-help', {comment})
      
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.message);
      }
    }
)