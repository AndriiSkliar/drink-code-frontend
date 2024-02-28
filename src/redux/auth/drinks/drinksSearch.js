import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/authOperations';

export const fetchDrinks = createAsyncThunk(
  'drinks/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/drinks');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchDrinksByLetter = createAsyncThunk(
  'drinks/getByLetter',
  async (letter, thunkApi) => {
    try {
      const { data } = await instance.get('/drinks/search', letter);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchDrinksByCategory = createAsyncThunk(
  'drinks/getByCategory',
  async (category, thunkApi) => {
    try {
      const { data } = await instance.get('/drinks/search/category', category);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchDrinksByIngredient = createAsyncThunk(
  'drinks/getByIngredient',
  async (ingredient, thunkApi) => {
    try {
      const { data } = await instance.get(
        '/drinks/search/ingredients',
        ingredient
      );

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
export const drinksOperations = {
  fetchDrinks,
};
