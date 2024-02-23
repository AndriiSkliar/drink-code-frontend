import { createAsyncThunk} from '@reduxjs/toolkit';

import {instance} from '../auth/authOperations';

export const getCategories = createAsyncThunk(
    'filters/getCategories',
    async (_, thunkAPI) => {
      try {
        const res = await instance.get('/filters/categories');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const getIngredients = createAsyncThunk(
    'filters/getIngredients',
    async (_, thunkAPI) => {
      try {
        const res = await instance.get('/filters/ingredients');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const getGlasses = createAsyncThunk(
    'filters/getGlasses',
    async (_, thunkAPI) => {
      try {
        const res = await instance.get('/filters/glasses');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );