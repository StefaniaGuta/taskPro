import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";

const API_URL = 'https://taskpro-app-bcac9d37037a.herokuapp.com/';

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {

      const res = await axios.post(`${API_URL}api/auth/register`, credentials);

      if (res.status === 201) {
        console.log('Registration successfully!');

        const loginResponse = await axios.post(`${API_URL}api/auth/login`, {
          email: credentials.email,
          password: credentials.password
        });

        if (loginResponse.status === 200 && loginResponse.data.token) {
          localStorage.setItem('authToken', loginResponse.data.token);

          setAuthHeader(loginResponse.data.token) 
          return loginResponse.data;
        }
      }

      return res.data;
    } catch (error) {

      if (error.response && error.response.status === 409) {
        Notiflix.Notify.failure('Email already registered!');
      } else {
        Notiflix.Notify.failure('Registration failed.');
      }

      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post(`${API_URL}api/auth/login`, credentials);
      const { token } = data;
     setAuthHeader(token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
    try {
      await axios.get(`${API_URL}api/auth/logout`) 
      clearAuthHeader();
      console.log('log out')
  } catch (error) {
    console.log(error)
    return thunkAPI.rejectWithValue(error.message);
  }
});


export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${API_URL}api/auth/current`)
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const editUser = createAsyncThunk(
    "users/profile",
    async (formData, thunkAPI) => {
      try {
  
        const { data } = await axios.patch(`${API_URL}api/auth/update`, formData);
        return data;
      } catch (err) {
        console.log(err);
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  );

