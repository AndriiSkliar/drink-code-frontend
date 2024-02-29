import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth.operations';

export const fetchHomePageDrinks = createAsyncThunk(
  'cocktails/fetchHomepage',
  async (_, thunkApi) => {
    try {
      const { token } = thunkApi.getState().auth;

      if (!token) {
        return null;
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const resp = await instance.get('/drinks/mainpage', config);
      const data = resp.data;

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCocktails = createAsyncThunk(
  'cocktails/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('/drinks');

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
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
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addCocktail = createAsyncThunk(
  'cocktails/addCocktail',
  async (cocktail, thunkApi) => {
    try {
      const { data } = await instance.post('/drinks/own/add', cocktail);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
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
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'cocktails/addToFavorite',
  async (cocktailId, thunkApi) => {
    try {
      const { data } = await instance.post(
        `/drinks/favorites/add/${cocktailId}`
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteFromFavorites = createAsyncThunk(
  'cocktails/deleteFromFavorites',
  async (id, thunkApi) => {
    try {
      const { data } = await instance.delete(`/drinks/favorites/remove/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchDrinkDetails = createAsyncThunk(
  'cocktails/fetchDrinkDetails',
  async (id, thunkApi) => {
    try {
      const { data } = await instance.get(`/drinks/${id}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchDrinksBySearch = createAsyncThunk(
  'drinks/getBySearch',
  async (params, thunkApi) => {
    try {
      const { data } = await instance.get('/drinks/search', { params });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const drinksOperations = {
  fetchOwnCoctails,
  fetchCocktails,
  fetchPopularDrinks,
  fetchDrinksBySearch,
  fetchFavoriteCocktails,
  addCocktail,
  deleteOwnCocktail,
  addToFavorites,
  deleteFromFavorites,
  fetchHomePageDrinks,
  fetchDrinkDetails,
};
