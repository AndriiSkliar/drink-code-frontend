// @ts-nocheck
import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/authOperations';

export const fetchCocktails = createAsyncThunk(
  'cocktails/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/drinks');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
export const fetchOwnCoctails = createAsyncThunk(
  'coctails/fetchOwnCoctails',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/drinks/own');
      
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchPopularDrinks = createAsyncThunk(
  'cocktails/getPopular',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/drinks/popular');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteCocktails = createAsyncThunk(
  'cocktails/getFavorite',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/drinks/favorites');

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addCocktail = createAsyncThunk(
  'cocktails/addCocktail',
  async (cocktail, thunkApi) => {
    try {
      const { data } = await instance.post('/drinks/own/add', cocktail);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteOwnCocktail = createAsyncThunk(
  'cocktails/deleteOwnCocktail',
  async (cocktailId, thunkApi) => {
    try {
      const { data } = await instance.delete(
        `/drinks/own/remove/${cocktailId}`
      );

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'cocktails/addToFavorite',
  async (cocktail, thunkApi) => {
    try {
      const { data } = await instance.post(
        `/drinks/favorites/add/${cocktail.id}`,
        cocktail
      );

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteFromFavorites = createAsyncThunk(
  'cocktails/deleteFromFavorites',
  async (cocktail, thunkApi) => {
    try {
      const { data } = await instance.delete(
        `/drinks/favorites/remove/${cocktail.id}`,
        cocktail
      );

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
export const drinksOperations = {
  fetchCocktails,
  fetchPopularDrinks,
  fetchFavoriteCocktails,
  addCocktail,
  deleteOwnCocktail,
  addToFavorites,
  deleteFromFavorites,
  fetchOwnCoctails,
};
