import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const API_URL = 'https://taskpro-app-bcac9d37037a.herokuapp.com/';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}api/auth/register`, credentials)

      if (response.status === 201) {
        const { token } = response.data;

        console.log(response.data)

        localStorage.setItem('token', token);
      }
      console.log(credentials);
      console.log('registred')
    } catch (error) {
     console.log(error)
     return thunkAPI.rejectWithValue(error.response.data);
  };
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${API_URL}api/auth/login`, credentials);
      const { token } = data;
      localStorage.setItem('token', token);
      console.log('login')
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token || localStorage.getItem('token');

    if (!token) {
      return thunkAPI.rejectWithValue('No token available for logout');
    }

    try {
      await axios.get(`${API_URL}api/auth/logout`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log('logout')
      console.log(state);
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${API_URL}/api/auth/current`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


