import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://drink-code-backend.onrender.com/api',
});

const authHeaderToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signup', credentials);
      authHeaderToken.set(data.token); 
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); 
    }
  }
);

const signIn = createAsyncThunk(
  'auth/signin',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/signin', credentials);
      authHeaderToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const signOut = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/signout');
    authHeaderToken.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

    if (!token) {
      return thunkAPI.rejectWithValue('Unable to fetch User');
    }

    authHeaderToken.set(token);

    try {
      const res = await axios.get('/users/current');

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const subscribeEmail = createAsyncThunk(
  '/auth/subscribe',
  async (data, thunkAPI) => {
    try {
      await axios.post('/users/subscribe', data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const themeThunk = createAsyncThunk(
  'auth/theme',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await axios.patch('/users/theme', payload);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (data, thunkAPI) => {
    try {
      const response = await axios.patch('/users/update', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const authOperations = {
  signUp,
  signIn,
  signOut,
  currentUser,
  subscribeEmail,
  themeThunk,
  updateUser,
};