import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const API_URL = 'https://taskpro-app-bcac9d37037a.herokuapp.com/';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${API_URL}api/users/signup`, credentials);
      const { token } = data;
      localStorage.setItem('token', token);
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${API_URL}api/users/login`, credentials);
      const { token } = data;
      localStorage.setItem('token', token);
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
      await axios.get(`${API_URL}api/users/logout`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const refreshUser  = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
  
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
  
    try {
      const token = localStorage.getItem('token');
    const res = await axios.get(`${API_URL}api/users/current`, {
      headers: { Authorization: `Bearer ${token}` },
    });
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });


export const editUser = createAsyncThunk(
  'api/user/editUser',
  async (dataUser, thunkAPI) => {
    const formData = new FormData();
    const { avatar_url, name, email, password } = dataUser;
    formData.append('avatar_url', avatar_url);
    formData.append('name', name);
    formData.append('email', email);
    if (password) {
      formData.append('password', password);
    }

    try {
      const { data } = await axios.patch('users/current', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);