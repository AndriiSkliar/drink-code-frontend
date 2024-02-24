// @ts-nocheck
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://drink-code-backend.onrender.com/api',
});
// для внешнего хостинга
instance.defaults.baseURL = 'https://drink-code-backend.onrender.com/api';
// instance.defaults.baseURL = 'http://localhost:3000/api';

const authHeaderToken = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post('/auth/signup', credentials);
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
      const { data } = await instance.post('/auth/signin', credentials);
      authHeaderToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const signOut = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await instance.post('/auth/signout');
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

    try {
      authHeaderToken.set(token);
      const res = await instance.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      authHeaderToken.set(token);
      const { data } = await instance.get('/users/current');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);

export const subscribeEmail = createAsyncThunk(
  '/auth/subscribe',
  async (data, thunkAPI) => {
    try {
      await instance.post('/users/subscribe', data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const themeThunk = createAsyncThunk(
  'auth/theme',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await instance.patch('/users/theme', payload);
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
      const response = await instance.patch('/users/update', data, {
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
