import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit';
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
      const { data } = await instance.get(`/drinks/search?letter=${letter}`);

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
      const { data } = await instance.get(`/drinks/search/category?category=${category}`);

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
      const { data } = await instance.get(`/drinks/search/ingredients?ingredient=${ingredient}`);

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  drinks: [],
  category: null,
  ingredient: null,
  isLoading: false,
  error: null,
};

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,

  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchDrinks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.drinks = payload;
      })
      .addCase(fetchDrinksByLetter.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.drinks = payload;
      })
      .addCase(fetchDrinksByCategory.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.drinks = payload;
      })
      .addCase(fetchDrinksByIngredient.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.drinks = payload;
      })
      .addMatcher(
        isAnyOf(
          fetchDrinks.pending,
          fetchDrinksByLetter.pending,
          fetchDrinksByCategory.pending,
          fetchDrinksByIngredient.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchDrinks.rejected,
          fetchDrinksByLetter.rejected,
          fetchDrinksByCategory.rejected,
          fetchDrinksByIngredient.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const drinksReducer = drinksSlice.reducer;
